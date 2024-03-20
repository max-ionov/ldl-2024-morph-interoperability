import {QueryEngine} from "@comunica/query-sparql";

export const buildTestQuery = (param: string, analyse: boolean) => {
    return `
    SELECT *
    WHERE { ?s ?p ?o. } LIMIT 100
    `
}

export const buildQuery = (param: string, analyse: boolean) => {
    return `
        PREFIX ontolex: <http://www.w3.org/ns/lemon/ontolex#>
        PREFIX morph: <https://www.w3.org/community/ontolex/wiki/Morphology#>
        PREFIX lexinfo: <http://www.lexinfo.net/ontology/2.0/lexinfo#>
        
        SELECT ?baseString ?newString (GROUP_CONCAT(?gramPred_val) as ?gramTypes) (GROUP_CONCAT(?gramObj_val) AS ?gramVals) ?word
        WHERE
        {
            ?word morph:morphologicalPattern ?paradigm ;
                  morph:baseForm ?baseForm ;
                  morph:baseForm/ontolex:writtenRep ?baseString .
            
            ?rule a morph:InflectionRule ;
                  morph:paradigm ?paradigm ;
                  morph:replacement/morph:source ?srcPattern ;
                  morph:replacement/morph:target ?dstPattern .
            
            OPTIONAL {
              ?rule morph:grammaticalMeaning [ ?gramPred ?gramObj ; ] . 
            }
            OPTIONAL {
              ?rule morph:involves ?morph .
              ?morph morph:grammaticalMeaning [ ?gramPred ?gramObj ; ] .
            }
            
            BIND(REPLACE(REPLACE(?srcPattern, "\\\\(V\\\\)", "(a|e|i|o|u|ie)"), "\\\\(C\\\\)", "(ċ|d|n|r|s|t|x|ż|z|b|f|ġ|g|għ|h|ħ|j|k|l|m|p|q|v|w)") AS ?srcPattern_repl)
            BIND(REPLACE(?dstPattern, "\\\\\\\\", "$") AS ?dstPattern_repl)
            BIND(REPLACE(?baseString, ?srcPattern_repl, ?dstPattern_repl) AS ?newString)
            #BIND(REPLACE(?baseString, ?srcPattern, ?dstPattern) AS ?newString)
            
            FILTER(STR(?${analyse ? "new" : "base" }String)="${param}")
            
            BIND(REPLACE(STR(?gramPred), ".*#", "") AS ?gramPred_val)
            BIND(REPLACE(STR(?gramObj), ".*#", "") AS ?gramObj_val)
            FILTER(?gramPred_val != "type") 
        } GROUP BY ?word ?baseString ?newString ?rule`
}

export const getQueryResults = async (sparql: QueryEngine,
                                      query: string,
                                      keys: string[],
                                      endpoint: any) => {
    let result = []

    console.log(endpoint);
    console.log(query);

    const bindingsStream = await sparql.queryBindings(query, {sources: endpoint, lenient: true})
    const bindings = await bindingsStream?.toArray()

    for(let row of bindings) {
        result.push(Object.fromEntries(keys.map((key) => [key, { val: row.get(key).value, type: row.get(key).termType }])))
    }
    return result
}