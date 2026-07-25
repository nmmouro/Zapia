// ============================================================================
// GERADOR DE IDs
// Arquivo: js/utils/id.js
// ============================================================================


export function gerarId(prefixo = "ID") {


    const agora = Date.now();


    const aleatorio =

        Math.random()
            .toString(36)
            .substring(2,8);



    return `${prefixo}-${agora}-${aleatorio}`;

}
