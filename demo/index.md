# OntoLex-Morph interoperability

Enter a fragment of OntoLex-Morph dataset in Turtle, use one of the two examples: Italian or Maltese, 
or provide a link to a Turtle file in the field _Endpoint_.

Press _Analyse_ to extract all possible analyses of a form provided in the field _Form_

Press _Generate_ to generate all forms of a lexical entry provided by its canonical form in the field _Lexical entry_

<form onsubmit="return false" method="post">
<label for="ttl">Turtle:</label>
<div class="flush">Example data:
    <a target="_blank" href="https://raw.githubusercontent.com/max-ionov/ldl-2024-morph-interoperability/main/italian.ttl">Italian</a>,
    <a target="_blank" href="https://raw.githubusercontent.com/max-ionov/maltese-morph/main/lexical-entries-small.ttl">Maltese</a></div>
<textarea id="ttl" name="ttl" v-model="turtle">
</textarea>

<input placeholder="Remote file" id="endpoint" class="flush" v-model="endpoint"/>

<div id="controls">
<div class="input-group">
<input placeholder="Form" id="form" v-model="form"/>
<button @click="execute(form, true)">Analyse</button>
</div>
<div class="input-group">
<input placeholder="Lexical entry" id="entry" v-model="entry"/>
<button @click="execute(entry, false)">Generate</button>
</div>
</div>

</form>

<div v-if="loading">Loading...</div>
<div v-if="results?.length">
    Results:
    <table>
    <thead>
        <tr><td>Form</td><td>Entry</td><td>Gramm. cat.</td><td>Values</td></tr>
    </thead>
    <tr v-for="{baseString, newString, gramTypes, gramVals} in results">
    <td>{{ newString.val }}</td><td>{{ baseString.val }}</td><td>{{ gramTypes.val }}</td><td>{{ gramVals.val }}</td>
    </tr>
    </table>
</div>

<script setup>
import {buildQuery, getQueryResults} from "./services/sparql"; 
import {ref} from "vue"; 
import {QueryEngine} from "@comunica/query-sparql"; 

const sparql = new QueryEngine();

const form = ref("");
const entry = ref("");

const turtle = ref("");
const endpoint = ref("");

const results = ref("");
const loading = ref(false);

const getEndpoints = (remote, turtle) => {
    let endpoints = [];
    if (turtle !== "")
        endpoints.push({
            type: 'stringSource',
            value: turtle,
            mediaType: 'text/turtle',
            baseIRI: 'https://apps.ionov.me/ontolex/ita/',
        });
    if (remote !== "")
        endpoints.push({
            type: 'file',
            value: "https://corsproxy.io/?" + remote
        });

    return endpoints
};

const execute = (val, analyse) => {
loading.value = true;
results.value = [];
getQueryResults(sparql, buildQuery(val, analyse), ["baseString", "newString", "gramTypes", "gramVals"], getEndpoints(endpoint.value, turtle.value)).then((result) => {
        results.value = result;
        loading.value = false
    });
}
</script>

<style>

form {
    padding: 22px 24px;
    border-radius: 8px;
    box-shadow: var(--vp-shadow-4);
    margin-bottom: 1.2em;
    transition: background-color .5s ease;
}

form button {
    background-color: var(--vp-button-alt-bg);
    transition: background-color .5s;
    padding: .2em .6em;
    margin-left: .4em;
    border: 1px solid var(--vp-button-alt-border);
    color: var(--vp-button-alt-active-text);
    border-radius: 8px;
    font-size: .9em;
    font-weight: 600;
}

form input {
    border: 1px solid var(--vp-c-border);
    border-radius: 4px;
    padding: 0.2em 0.6em;
    margin-top: .6em;
    background: transparent;
    transition: background-color .5s;
}

form textarea {
    width: 100%;
    min-height: 20rem;
    display: block;
    border: 1px solid var(--vp-c-border);
    border-radius: 4px;
    padding: 0.2em 0.6em;
    margin-top: .6em;
    background: transparent;
    transition: background-color .5s;
}

div#controls {
    
    margin-top: .4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.2rem;
}

div.input-group {
    margin: 0 1rem;
}

.flush {
    display: flex;
    width: 100%;
    justify-content: right;
    gap: .1rem;
}

</style>

