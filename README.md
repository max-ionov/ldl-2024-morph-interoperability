# Linguistic LOD for Interoperable Morphological Description

This folder contains data and all the queries mentioned in the paper submitted to LDL-2024.

Here is a list of data files:
* [italian.ttl](italian.ttl) — morphs and rules for a part of regular nominal inflection for two Italian verbs
* [chemistry.ttl](chemistry.ttl) — a small vocabulary with two nouns corresponding to chemical elements, prefixes that can be added to them and the rules on how to do it.

Folder [sparql](sparql) contains SPARQL queries that reproduce the SPARQL queries discussed in the paper. They can be tested, for example, with [Apache Jena command-line tools](https://jena.apache.org/documentation/query/cmds.html).
They should work with other SPARQL engines, too.

## Form generation and analysis

We tested these queries on two datasets: Italian, which we accessed locally, and Maltese, which we accessed by its [URL](https://raw.githubusercontent.com/max-ionov/maltese-morph/main/lexical-entries-small.ttl)

Where required, we hard-coded values applicable to both datasets in the queries.

### Generate forms

#### Generate forms for an Italian entry *parlare*:
```bash
sparql --data=italian.ttl --query=sparql/generate-forms-for-entry.rq
```

```----------------------------------------------------------------------------------------------------------------------------
| baseString    | newString      | gramTypes       | gramVals                | word                                        |
============================================================================================================================
| "parlare"@ita | "parlo"@ita    | "person number" | "firstPerson singular"  | <https://apps.ionov.me/ontolex/ita/parlare> |
| "parlare"@ita | "parlate"@ita  | "person number" | "secondPerson plural"   | <https://apps.ionov.me/ontolex/ita/parlare> |
| "parlare"@ita | "parla"@ita    | "person number" | "thirdPerson singular"  | <https://apps.ionov.me/ontolex/ita/parlare> |
| "parlare"@ita | "parlono"@ita  | "person number" | "thirdPerson plural"    | <https://apps.ionov.me/ontolex/ita/parlare> |
| "parlare"@ita | "parliame"@ita | "person number" | "firstPerson plural"    | <https://apps.ionov.me/ontolex/ita/parlare> |
| "parlare"@ita | "parli"@ita    | "person number" | "secondPerson singular" | <https://apps.ionov.me/ontolex/ita/parlare> |
----------------------------------------------------------------------------------------------------------------------------
```

#### Generate forms for all Italian entries in the dataset:
```bash
sparql --data=italian.ttl --query=sparql/generate-all-forms.rq
```

```
----------------------------------------------------------------------------------------------------------------------------------
| baseString      | newString        | gramTypes       | gramVals                | word                                          |
==================================================================================================================================
| "accentare"@ita | "accento"@ita    | "person number" | "firstPerson singular"  | <https://apps.ionov.me/ontolex/ita/accentare> |
| "parlare"@ita   | "parla"@ita      | "person number" | "thirdPerson singular"  | <https://apps.ionov.me/ontolex/ita/parlare>   |
| "accentare"@ita | "accenta"@ita    | "person number" | "thirdPerson singular"  | <https://apps.ionov.me/ontolex/ita/accentare> |
| "accentare"@ita | "accentate"@ita  | "person number" | "secondPerson plural"   | <https://apps.ionov.me/ontolex/ita/accentare> |
| "parlare"@ita   | "parlono"@ita    | "person number" | "thirdPerson plural"    | <https://apps.ionov.me/ontolex/ita/parlare>   |
| "parlare"@ita   | "parlate"@ita    | "person number" | "secondPerson plural"   | <https://apps.ionov.me/ontolex/ita/parlare>   |
| "parlare"@ita   | "parli"@ita      | "person number" | "secondPerson singular" | <https://apps.ionov.me/ontolex/ita/parlare>   |
| "accentare"@ita | "accenti"@ita    | "person number" | "secondPerson singular" | <https://apps.ionov.me/ontolex/ita/accentare> |
| "parlare"@ita   | "parliame"@ita   | "person number" | "firstPerson plural"    | <https://apps.ionov.me/ontolex/ita/parlare>   |
| "accentare"@ita | "accentono"@ita  | "person number" | "thirdPerson plural"    | <https://apps.ionov.me/ontolex/ita/accentare> |
| "parlare"@ita   | "parlo"@ita      | "person number" | "firstPerson singular"  | <https://apps.ionov.me/ontolex/ita/parlare>   |
| "accentare"@ita | "accentiame"@ita | "person number" | "firstPerson plural"    | <https://apps.ionov.me/ontolex/ita/accentare> |
----------------------------------------------------------------------------------------------------------------------------------
```

#### Generate forms for a Maltese entry _kiteb_:
```bash
sparql --data=https://raw.githubusercontent.com/max-ionov/maltese-morph/main/lexical-entries-small.ttl --query=sparql/generate-forms-for-entry.rq
```

```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| baseString  | newString    | gramTypes                     | gramVals                                      | word                                                                                    |
========================================================================================================================================================================================================
| "kiteb"@mlt | "kiteb"@mlt  | "aspect person number gender" | "perfective thirdPerson singular masculine"   | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt | "ktibna"@mlt | "aspect person number"        | "perfective firstPerson plural"               | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt | "jikteb"@mlt | "number aspect person gender" | "singular imperfective thirdPerson masculine" | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt | "jiktbu"@mlt | "aspect person number"        | "imperfective thirdPerson plural"             | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt | "kitbet"@mlt | "aspect person number gender" | "perfective thirdPerson singular feminine"    | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt | "nikteb"@mlt | "number aspect person"        | "singular imperfective firstPerson"           | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt | "kitbu"@mlt  | "aspect person number"        | "perfective thirdPerson plural"               | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt | "tiktbu"@mlt | "number aspect person"        | "plural imperfective secondPerson"            | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt | "niktbu"@mlt | "aspect person number"        | "imperfective firstPerson plural"             | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt | "tikteb"@mlt | "number aspect person gender" | "singular imperfective thirdPerson feminine"  | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt | "ktibt"@mlt  | "aspect person number"        | "perfective secondPerson singular"            | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt | "ktibt"@mlt  | "aspect person number"        | "perfective firstPerson singular"             | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt | "ktibtu"@mlt | "aspect person number"        | "perfective secondPerson plural"              | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt | "tikteb"@mlt | "number aspect person"        | "singular imperfective secondPerson"          | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
```

#### Generate forms for all Maltese entries in the dataset:
```bash
sparql --data=https://raw.githubusercontent.com/max-ionov/maltese-morph/main/lexical-entries-small.ttl --query=sparql/generate-forms-for-entry.rq
```

```
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| baseString   | newString      | gramTypes                                          | gramVals                                                                        | word                                                                                    |
==================================================================================================================================================================================================================================================================
| "telaq"@mlt  | "telqu"@mlt    | "aspect person number"                             | "perfective thirdPerson plural"                                                 | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001411> |
| "għamel"@mlt | "għamel"@mlt   | "aspect person number gender"                      | "perfective thirdPerson singular masculine"                                     | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001692> |
| "kiteb"@mlt  | "kitbu"@mlt    | "aspect person number"                             | "perfective thirdPerson plural"                                                 | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "telaq"@mlt  | "telaq"@mlt    | "aspect person number gender"                      | "perfective thirdPerson singular masculine"                                     | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001411> |
| "kiteb"@mlt  | "ktibna"@mlt   | "aspect person number"                             | "perfective firstPerson plural"                                                 | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt  | "kiteb"@mlt    | "aspect person number gender"                      | "perfective thirdPerson singular masculine"                                     | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "għamel"@mlt | "jgħamel"@mlt  | "number aspect person gender"                      | "singular imperfective thirdPerson masculine"                                   | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001692> |
| "telaq"@mlt  | "tlaqtu"@mlt   | "aspect person number"                             | "perfective secondPerson plural"                                                | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001411> |
| "għamel"@mlt | "tgħamel"@mlt  | "number aspect person gender number aspect person" | "singular imperfective thirdPerson feminine singular imperfective secondPerson" | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001692> |
| "għamel"@mlt | "għamilt"@mlt  | "aspect person number aspect person number"        | "perfective secondPerson singular perfective firstPerson singular"              | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001692> |
| "telaq"@mlt  | "jitlaq"@mlt   | "number aspect person gender"                      | "singular imperfective thirdPerson masculine"                                   | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001411> |
| "kiteb"@mlt  | "ktibt"@mlt    | "aspect person number aspect person number"        | "perfective firstPerson singular perfective secondPerson singular"              | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt  | "jikteb"@mlt   | "number aspect person gender"                      | "singular imperfective thirdPerson masculine"                                   | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt  | "niktbu"@mlt   | "aspect person number"                             | "imperfective firstPerson plural"                                               | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt  | "tiktbu"@mlt   | "number aspect person"                             | "plural imperfective secondPerson"                                              | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "telaq"@mlt  | "nitilqu"@mlt  | "aspect person number"                             | "imperfective firstPerson plural"                                               | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001411> |
| "għamel"@mlt | "ngħamlu"@mlt  | "aspect person number"                             | "imperfective firstPerson plural"                                               | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001692> |
| "kiteb"@mlt  | "jiktbu"@mlt   | "aspect person number"                             | "imperfective thirdPerson plural"                                               | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt  | "nikteb"@mlt   | "number aspect person"                             | "singular imperfective firstPerson"                                             | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt  | "kitbet"@mlt   | "aspect person number gender"                      | "perfective thirdPerson singular feminine"                                      | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "għamel"@mlt | "għamlet"@mlt  | "aspect person number gender"                      | "perfective thirdPerson singular feminine"                                      | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001692> |
| "għamel"@mlt | "għamlu"@mlt   | "aspect person number"                             | "perfective thirdPerson plural"                                                 | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001692> |
| "telaq"@mlt  | "jitilqu"@mlt  | "aspect person number"                             | "imperfective thirdPerson plural"                                               | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001411> |
| "telaq"@mlt  | "tlaqt"@mlt    | "aspect person number aspect person number"        | "perfective secondPerson singular perfective firstPerson singular"              | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001411> |
| "telaq"@mlt  | "tlaqna"@mlt   | "aspect person number"                             | "perfective firstPerson plural"                                                 | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001411> |
| "telaq"@mlt  | "telqet"@mlt   | "aspect person number gender"                      | "perfective thirdPerson singular feminine"                                      | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001411> |
| "għamel"@mlt | "għamilna"@mlt | "aspect person number"                             | "perfective firstPerson plural"                                                 | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001692> |
| "telaq"@mlt  | "titilqu"@mlt  | "number aspect person"                             | "plural imperfective secondPerson"                                              | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001411> |
| "kiteb"@mlt  | "tikteb"@mlt   | "number aspect person number aspect person gender" | "singular imperfective secondPerson singular imperfective thirdPerson feminine" | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "għamel"@mlt | "tgħamlu"@mlt  | "number aspect person"                             | "plural imperfective secondPerson"                                              | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001692> |
| "għamel"@mlt | "jgħamlu"@mlt  | "aspect person number"                             | "imperfective thirdPerson plural"                                               | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001692> |
| "għamel"@mlt | "ngħamel"@mlt  | "number aspect person"                             | "singular imperfective firstPerson"                                             | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001692> |
| "telaq"@mlt  | "titlaq"@mlt   | "number aspect person number aspect person gender" | "singular imperfective secondPerson singular imperfective thirdPerson feminine" | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001411> |
| "telaq"@mlt  | "nitlaq"@mlt   | "number aspect person"                             | "singular imperfective firstPerson"                                             | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001411> |
| "kiteb"@mlt  | "ktibtu"@mlt   | "aspect person number"                             | "perfective secondPerson plural"                                                | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "għamel"@mlt | "għamiltu"@mlt | "aspect person number"                             | "perfective secondPerson plural"                                                | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975001692> |
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
```

### Form search / analysis

#### Find lexical entries for an Italian wordform *parlo*:
```bash
sparql --data=italian.ttl --query=sparql/find-entries.rq
```

```
----------------------------------------------------------------------------------------------------------------------------------------------
| word                                        | baseString    | newString   | form                                                           |
==============================================================================================================================================
| <https://apps.ionov.me/ontolex/ita/parlare> | "parlare"@ita | "parlo"@ita | <https://apps.ionov.me/ontolex/ita/parlare_form_v-are_ind_1sg> |
----------------------------------------------------------------------------------------------------------------------------------------------
```

#### Get morphological analyses for an Italian wordform *parlo*:
```bash
sparql --data=italian.ttl --query=sparql/analyse-form.rq
```

```
------------------------------------------------------------------------------------------------------------------------
| baseString    | newString   | gramTypes       | gramVals               | word                                        |
========================================================================================================================
| "parlare"@ita | "parlo"@ita | "person number" | "firstPerson singular" | <https://apps.ionov.me/ontolex/ita/parlare> |
------------------------------------------------------------------------------------------------------------------------
```

#### Find lexical entries for a Maltese wordform *ktibt*:
```bash
sparql --data=https://raw.githubusercontent.com/max-ionov/maltese-morph/main/lexical-entries-small.ttl --query=sparql/find-entries.rq
```

```
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| word                                                                                    | baseString  | newString   | form                                                                       |
====================================================================================================================================================================================================
| <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> | "kiteb"@mlt | "ktibt"@mlt | <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_1sg> |
| <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> | "kiteb"@mlt | "ktibt"@mlt | <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_2sg> |
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
```

#### Get morphological analyses for a Maltese wordform *ktibt*:
```bash
sparql --data=https://raw.githubusercontent.com/max-ionov/maltese-morph/main/lexical-entries-small.ttl --query=sparql/analyse-form.rq
```

```
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| baseString  | newString   | gramTypes              | gramVals                           | word                                                                                    |
=====================================================================================================================================================================================
| "kiteb"@mlt | "ktibt"@mlt | "aspect person number" | "perfective secondPerson singular" | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
| "kiteb"@mlt | "ktibt"@mlt | "aspect person number" | "perfective firstPerson singular"  | <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/5200a366e36f237975000f26> |
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
```

### Construct RDF

#### Construct RDF with forms for an Italian word _parlare_:

```bash
sparql --data=italian.ttl --query=sparql/construct-forms-for-entry.rq
```

```turtle
PREFIX :        <https://apps.ionov.me/ontolex/ita/>
PREFIX lexinfo: <http://www.lexinfo.net/ontology/2.0/lexinfo#>
PREFIX morph:   <https://www.w3.org/community/ontolex/wiki/Morphology#>
PREFIX ontolex: <http://www.w3.org/ns/lemon/ontolex#>
PREFIX owl:     <http://www.w3.org/2002/07/owl#>
PREFIX rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs:    <http://www.w3.org/2000/01/rdf-schema#>

:parlare_form_v-are_ind_2sg_gram
        lexinfo:number  lexinfo:singular;
        lexinfo:person  lexinfo:secondPerson .

:parlare_form_v-are_ind_2sg
        ontolex:writtenRep        "parli"@ita;
        morph:grammaticalMeaning  :parlare_form_v-are_ind_2sg_gram .

:parlare_form_v-are_ind_3pl_gram
        lexinfo:number  lexinfo:plural;
        lexinfo:person  lexinfo:thirdPerson .

:parlare_form_v-are_ind_3pl
        ontolex:writtenRep        "parlono"@ita;
        morph:grammaticalMeaning  :parlare_form_v-are_ind_3pl_gram .

:parlare_form_v-are_ind_2pl_gram
        lexinfo:number  lexinfo:plural;
        lexinfo:person  lexinfo:secondPerson .

:parlare_form_v-are_ind_2pl
        ontolex:writtenRep        "parlate"@ita;
        morph:grammaticalMeaning  :parlare_form_v-are_ind_2pl_gram .

:parlare_form_v-are_ind_3sg_gram
        lexinfo:number  lexinfo:singular;
        lexinfo:person  lexinfo:thirdPerson .

:parlare_form_v-are_ind_3sg
        ontolex:writtenRep        "parla"@ita;
        morph:grammaticalMeaning  :parlare_form_v-are_ind_3sg_gram .

:parlare_form_v-are_ind_1pl_gram
        lexinfo:number  lexinfo:plural;
        lexinfo:person  lexinfo:firstPerson .

:parlare_form_v-are_ind_1pl
        ontolex:writtenRep        "parliame"@ita;
        morph:grammaticalMeaning  :parlare_form_v-are_ind_1pl_gram .

:parlare_form_v-are_ind_1sg_gram
        lexinfo:number  lexinfo:singular;
        lexinfo:person  lexinfo:firstPerson .

:parlare_form_v-are_ind_1sg
        ontolex:writtenRep        "parlo"@ita;
        morph:grammaticalMeaning  :parlare_form_v-are_ind_1sg_gram .

:parlare  ontolex:otherForm  :parlare_form_v-are_ind_2sg , :parlare_form_v-are_ind_3pl , :parlare_form_v-are_ind_2pl , :parlare_form_v-are_ind_3sg , :parlare_form_v-are_ind_1pl , :parlare_form_v-are_ind_1sg .
```

#### Construct RDF with forms for a Maltese word _kiteb_:
```bash
sparql --data=https://raw.githubusercontent.com/max-ionov/maltese-morph/main/lexical-entries-small.ttl --query=sparql/construct-forms-for-entry.rq
```

```turtle
PREFIX entries: <https://mlrs.research.um.edu.mt/resources/gabra/lexemes/view/>
PREFIX lexinfo: <http://www.lexinfo.net/ontology/2.0/lexinfo#>
PREFIX morph:   <https://www.w3.org/community/ontolex/wiki/Morphology#>
PREFIX ontolex: <http://www.w3.org/ns/lemon/ontolex#>
PREFIX rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs:    <http://www.w3.org/2000/01/rdf-schema#>
PREFIX roots:   <https://mlrs.research.um.edu.mt/resources/gabra/roots/view/>

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_3sg_m_gram>
        rdf:type        morph:GrammaticalMeaning;
        lexinfo:aspect  lexinfo:perfective;
        lexinfo:gender  lexinfo:masculine;
        lexinfo:number  lexinfo:singular;
        lexinfo:person  lexinfo:thirdPerson .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_3sg_m>
        ontolex:writtenRep        "kiteb"@mlt;
        morph:grammaticalMeaning  <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_3sg_m_gram> .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_1sg_gram>
        rdf:type        morph:GrammaticalMeaning;
        lexinfo:aspect  lexinfo:imperfective;
        lexinfo:number  lexinfo:singular;
        lexinfo:person  lexinfo:firstPerson .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_1sg>
        ontolex:writtenRep        "nikteb"@mlt;
        morph:grammaticalMeaning  <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_1sg_gram> .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_1pl_gram>
        rdf:type        morph:GrammaticalMeaning;
        lexinfo:aspect  lexinfo:imperfective;
        lexinfo:number  lexinfo:plural;
        lexinfo:person  lexinfo:firstPerson .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_1pl>
        ontolex:writtenRep        "niktbu"@mlt;
        morph:grammaticalMeaning  <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_1pl_gram> .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_3sg_m_gram>
        rdf:type        morph:GrammaticalMeaning;
        lexinfo:aspect  lexinfo:imperfective;
        lexinfo:gender  lexinfo:masculine;
        lexinfo:number  lexinfo:singular;
        lexinfo:person  lexinfo:thirdPerson .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_3sg_m>
        ontolex:writtenRep        "jikteb"@mlt;
        morph:grammaticalMeaning  <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_3sg_m_gram> .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_3sg_f_gram>
        rdf:type        morph:GrammaticalMeaning;
        lexinfo:aspect  lexinfo:perfective;
        lexinfo:gender  lexinfo:feminine;
        lexinfo:number  lexinfo:singular;
        lexinfo:person  lexinfo:thirdPerson .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_3sg_f>
        ontolex:writtenRep        "kitbet"@mlt;
        morph:grammaticalMeaning  <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_3sg_f_gram> .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_2pl_gram>
        rdf:type        morph:GrammaticalMeaning;
        lexinfo:aspect  lexinfo:perfective;
        lexinfo:number  lexinfo:plural;
        lexinfo:person  lexinfo:secondPerson .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_2pl>
        ontolex:writtenRep        "ktibtu"@mlt;
        morph:grammaticalMeaning  <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_2pl_gram> .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_2sg_gram>
        rdf:type        morph:GrammaticalMeaning;
        lexinfo:aspect  lexinfo:perfective;
        lexinfo:number  lexinfo:singular;
        lexinfo:person  lexinfo:secondPerson .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_2sg>
        ontolex:writtenRep        "ktibt"@mlt;
        morph:grammaticalMeaning  <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_2sg_gram> .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_3pl_gram>
        rdf:type        morph:GrammaticalMeaning;
        lexinfo:aspect  lexinfo:perfective;
        lexinfo:number  lexinfo:plural;
        lexinfo:person  lexinfo:thirdPerson .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_3pl>
        ontolex:writtenRep        "kitbu"@mlt;
        morph:grammaticalMeaning  <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_3pl_gram> .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_1pl_gram>
        rdf:type        morph:GrammaticalMeaning;
        lexinfo:aspect  lexinfo:perfective;
        lexinfo:number  lexinfo:plural;
        lexinfo:person  lexinfo:firstPerson .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_1pl>
        ontolex:writtenRep        "ktibna"@mlt;
        morph:grammaticalMeaning  <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_1pl_gram> .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_3sg_f_gram>
        rdf:type        morph:GrammaticalMeaning;
        lexinfo:aspect  lexinfo:imperfective;
        lexinfo:gender  lexinfo:feminine;
        lexinfo:number  lexinfo:singular;
        lexinfo:person  lexinfo:thirdPerson .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_3sg_f>
        ontolex:writtenRep        "tikteb"@mlt;
        morph:grammaticalMeaning  <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_3sg_f_gram> .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_2pl_gram>
        rdf:type        morph:GrammaticalMeaning;
        lexinfo:aspect  lexinfo:imperfective;
        lexinfo:number  lexinfo:plural;
        lexinfo:person  lexinfo:secondPerson .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_2pl>
        ontolex:writtenRep        "tiktbu"@mlt;
        morph:grammaticalMeaning  <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_2pl_gram> .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_1sg_gram>
        rdf:type        morph:GrammaticalMeaning;
        lexinfo:aspect  lexinfo:perfective;
        lexinfo:number  lexinfo:singular;
        lexinfo:person  lexinfo:firstPerson .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_1sg>
        ontolex:writtenRep        "ktibt"@mlt;
        morph:grammaticalMeaning  <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_1sg_gram> .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_2sg_gram>
        rdf:type        morph:GrammaticalMeaning;
        lexinfo:aspect  lexinfo:imperfective;
        lexinfo:number  lexinfo:singular;
        lexinfo:person  lexinfo:secondPerson .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_2sg>
        ontolex:writtenRep        "tikteb"@mlt;
        morph:grammaticalMeaning  <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_2sg_gram> .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_3pl_gram>
        rdf:type        morph:GrammaticalMeaning;
        lexinfo:aspect  lexinfo:imperfective;
        lexinfo:number  lexinfo:plural;
        lexinfo:person  lexinfo:thirdPerson .

<https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_3pl>
        ontolex:writtenRep        "jiktbu"@mlt;
        morph:grammaticalMeaning  <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_3pl_gram> .

entries:5200a366e36f237975000f26
        ontolex:otherForm  <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_3sg_m> , <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_1sg> , <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_1pl> , <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_3sg_m> , <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_3sg_f> , <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_2pl> , <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_2sg> , <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_3pl> , <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_1pl> , <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_3sg_f> , <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_2pl> , <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_perf_1sg> , <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_2sg> , <https://data.ionov.me/gabra/5200a366e36f237975000f26_form_kiteb_impf_3pl> .
```

#### Construct RDF for all entries in the Italian dataset:
```bash
sparql --data=italian.ttl --query=sparql/construct-all-forms.rq
```

#### Construct RDF for all entries in the Maltese dataset:
```bash
sparql --data=https://raw.githubusercontent.com/max-ionov/maltese-morph/main/lexical-entries-small.ttl --query=sparql/construct-all-forms.rq
```

We omit the output of the last two queries, since it is too long.

## Chemical compounds

This is a small example that shows how we can use OntoLex-Morph for dealing with derivations of chemical compounds. Toy dataset [chemistry.ttl](chemistry.ttl) contains lexical entries _chlorine_, _iron_ and _sodium_ with its base element name and derivation rules for making entries like _chloride_ and _dichloride_ alongside their chemical formulas.

Since there are two steps for getting from _chlorine_ to _dichloride_, and SPARQL does not deal well with recursion, in this example we execute the steps separately.

#### Constructing RDF with generated _-ide_ elements:
```bash
sparql --data=chemistry.ttl --query=sparql/get-chemical-name.rq
```

```turtle
PREFIX :         <https://apps.ionov.me/ontolex/chem/>
PREFIX decomp:   <http://www.w3.org/ns/lemon/decomp#>
PREFIX lexinfo:  <http://www.lexinfo.net/ontology/2.0/lexinfo#>
PREFIX morph:    <https://www.w3.org/community/ontolex/wiki/Morphology#>
PREFIX ontolex:  <http://www.w3.org/ns/lemon/ontolex#>
PREFIX owl:      <http://www.w3.org/2002/07/owl#>
PREFIX rdf:      <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs:     <http://www.w3.org/2000/01/rdf-schema#>
PREFIX vartrans: <http://www.w3.org/ns/lemon/vartrans#>

:chloride_form  rdf:type    ontolex:Form;
        ontolex:writtenRep  "Cl"@en-x-chem , "chloride"@en-GB .

:chloride  rdf:type            ontolex:LexicalEntry;
        decomp:subTerm         :chlorine;
        ontolex:canonicalForm  :chloride_form .
```

#### Generating chemical formulas and compound names:
```bash
sparql --data=chemistry.ttl --query=sparql/generate-chemical-elements.rq > chloride.ttl
sparql --data=chemistry.ttl --data=chloride.ttl --query=sparql/get-chemical-name.rq
```

```
-----------------------------------------------------------------------------
| base_string      | new_string         | base_formula   | new_formula      |
=============================================================================
| "chloride"@en-GB | "dichloride"@en-GB | "Cl"@en-x-chem | "Cl_2"@en-x-chem |
-----------------------------------------------------------------------------
```

There might be more steps, e.g. for getting compounds like _sodium chloride_. For this, we just need to execute the same query one more time:
```bash
sparql --data=chemistry.ttl --query=sparql/generate-chemical-elements.rq > chloride.ttl
sparql --data=chemistry.ttl --query=sparql/generate-chemical-elements.rq > more-compounds.ttl
sparql --data=chemistry.ttl --data=chloride.ttl --data=more-compounds.ttl --query=sparql/get-chemical-name.rq
```

```
-----------------------------------------------------------------------------
| base_string      | new_string         | base_formula   | new_formula      |
=============================================================================
| "chlorine"@en-GB | "chloride"@en-GB   | "Cl"@en-x-chem | "Cl"@en-x-chem   |
| "chloride"@en-GB | "dichloride"@en-GB | "Cl"@en-x-chem | "Cl_2"@en-x-chem |
| "sodium"@en-GB   | "sodium chloride"  | "Na"@en-x-chem | "NaCl"@en-x-chem |
-----------------------------------------------------------------------------
```

For getting the compound _iron dichloride_, we have to run it again — there are 3 steps to generate it: _chlorine_ → _chloride_ → _dichloride_ → _iron dichloride_:
```bash
sparql --data=chemistry.ttl --query=sparql/generate-chemical-elements.rq > chloride.ttl
sparql --data=chemistry.ttl --query=sparql/generate-chemical-elements.rq > more-compounds.ttl
sparql --data=chemistry.ttl --data=more-compounds.ttl --query=sparql/generate-chemical-elements.rq > even-more-compounds.ttl
sparql --data=chemistry.ttl --data=more-compounds.ttl --data=even-more-compounds.ttl --query=sparql/get-chemical-name.rq
```

```
-------------------------------------------------------------------------------
| base_string      | new_string         | base_formula   | new_formula        |
===============================================================================
| "chlorine"@en-GB | "chloride"@en-GB   | "Cl"@en-x-chem | "Cl"@en-x-chem     |
| "chloride"@en-GB | "dichloride"@en-GB | "Cl"@en-x-chem | "Cl_2"@en-x-chem   |
| "iron"@en-GB     | "iron dichloride"  | "Fe"@en-x-chem | "FeCl_2"@en-x-chem |
| "sodium"@en-GB   | "sodium chloride"  | "Na"@en-x-chem | "NaCl"@en-x-chem   |
-------------------------------------------------------------------------------
```