export const getUserConfig = () => {
    const rdfPrefix = 'https://github.com/max-ionov/ldl-2024-morph-interoperability/blob/main/'

    return {
        basePrefix: 'https://apps.ionov.me/ontolex/',
        endpoints: [
            {
                type: 'serialized',
                value: '',
                mediaType: 'text/turtle',
                baseIRI: 'https://apps.ionov.me/ontolex/',
            },
        ]
    }
}