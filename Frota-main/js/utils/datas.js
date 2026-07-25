// ============================================================================
// DATAS UTILS
// Painel Frota
// Arquivo: js/utils/datas.js
//
// Funções auxiliares para datas e horários
// ============================================================================



// ============================================================================
// CONFIGURAÇÃO
// ============================================================================


const LOCALE = "pt-BR";




// ============================================================================
// DATA ATUAL
// ============================================================================


export function hoje(){


    return new Date();


}




// ============================================================================
// FORMATAR DATA BR
// ============================================================================


export function dataBR(

    data = new Date()

){


    const valor =
    new Date(data);



    if(isNaN(valor)) return "";



    return valor.toLocaleDateString(

        LOCALE

    );


}




// ============================================================================
// FORMATAR HORA
// ============================================================================


export function hora(

    data = new Date()

){


    const valor =
    new Date(data);



    if(isNaN(valor)) return "";



    return valor.toLocaleTimeString(

        LOCALE,

        {

            hour:"2-digit",

            minute:"2-digit"

        }

    );


}




// ============================================================================
// DATA E HORA COMPLETA
// ============================================================================


export function dataHora(

    data = new Date()

){


    const valor =
    new Date(data);



    if(isNaN(valor)) return "";



    return valor.toLocaleString(

        LOCALE

    );


}




// ============================================================================
// DATA PARA INPUT HTML
// yyyy-MM-dd
// ============================================================================


export function dataInput(

    data = new Date()

){


    const valor =
    new Date(data);



    if(isNaN(valor)) return "";



    const ano =
    valor.getFullYear();



    const mes =
    String(
        valor.getMonth()+1
    )
    .padStart(2,"0");



    const dia =
    String(
        valor.getDate()
    )
    .padStart(2,"0");



    return `${ano}-${mes}-${dia}`;


}




// ============================================================================
// HORA PARA INPUT HTML
// HH:mm
// ============================================================================


export function horaInput(

    data = new Date()

){


    const valor =
    new Date(data);



    if(isNaN(valor)) return "";



    const hora =
    String(
        valor.getHours()
    )
    .padStart(2,"0");



    const minuto =
    String(
        valor.getMinutes()
    )
    .padStart(2,"0");



    return `${hora}:${minuto}`;


}




// ============================================================================
// DIFERENÇA ENTRE DATAS
// ============================================================================


export function diferencaDias(

    inicio,

    fim

){


    const inicioData =
    new Date(inicio);



    const fimData =
    new Date(fim);



    if(

        isNaN(inicioData) ||

        isNaN(fimData)

    ){

        return 0;

    }



    const diferenca =
    fimData - inicioData;



    return Math.floor(

        diferenca /

        (1000 * 60 * 60 * 24)

    );


}




// ============================================================================
// VERIFICA SE É HOJE
// ============================================================================


export function ehHoje(data){


    return (

        dataBR(data)

        ===

        dataBR()

    );


}




// ============================================================================
// ORDENAR LISTA POR DATA
// ============================================================================


export function ordenarPorData(

    lista = [],

    campo

){


    return [

        ...lista

    ]

    .sort(

        (a,b)=>

            new Date(a[campo])

            -

            new Date(b[campo])

    );


}




// ============================================================================
// DATA BR -> INPUT
// DD/MM/YYYY
// PARA yyyy-MM-dd
// ============================================================================


export function dataParaInput(data){


    if(!data) return "";



    if(

        data.includes("-")

    ){

        return data;

    }



    const partes =
    data.split("/");



    if(partes.length !== 3)

        return "";



    const [

        dia,

        mes,

        ano

    ] = partes;



    return (

        `${ano}-${

            mes.padStart(2,"0")

        }-${

            dia.padStart(2,"0")

        }`

    );


}




// ============================================================================
// INPUT -> DATA BR
// yyyy-MM-dd
// PARA DD/MM/YYYY
// ============================================================================


export function inputParaData(data){


    if(!data) return "";



    const partes =
    data.split("-");



    if(partes.length !== 3)

        return "";



    const [

        ano,

        mes,

        dia

    ] = partes;



    return (

        `${dia}/${mes}/${ano}`

    );


}




// ============================================================================
// HORA PARA INPUT
// ============================================================================


export function horaParaInput(hora){


    if(!hora)

        return "";



    return String(hora)

        .substring(0,5);


}

// ============================================================================
// DATAS
// Arquivo: js/utils/datas.js
// ============================================================================

export function preencherDataHoraAtual(

    campoData,

    campoHora

) {

    const agora = new Date();


    // ------------------------------------------------------------------------
    // DATA
    // ------------------------------------------------------------------------

    if (campoData) {

        const ano =

            agora.getFullYear();


        const mes =

            String(

                agora.getMonth() + 1

            ).padStart(

                2,

                "0"

            );


        const dia =

            String(

                agora.getDate()

            ).padStart(

                2,

                "0"

            );


        campoData.value =

            `${ano}-${mes}-${dia}`;

    }


    // ------------------------------------------------------------------------
    // HORA
    // ------------------------------------------------------------------------

    if (campoHora) {

        const hora =

            String(

                agora.getHours()

            ).padStart(

                2,

                "0"

            );


        const minuto =

            String(

                agora.getMinutes()

            ).padStart(

                2,

                "0"

            );


        campoHora.value =

            `${hora}:${minuto}`;

    }

}

export function preencherDataAtual(
    campo
) {

    const agora =
        new Date();

    const ano =
        agora.getFullYear();

    const mes =
        String(
            agora.getMonth() + 1
        ).padStart(2, "0");

    const dia =
        String(
            agora.getDate()
        ).padStart(2, "0");

    campo.value =
        `${ano}-${mes}-${dia}`;

}
