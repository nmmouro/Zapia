// ============================================================================
// FORMATADORES UTILS
// Painel Frota
// Arquivo: js/utils/formatadores.js
//
// Funções auxiliares para padronização de dados
// ============================================================================



// ============================================================================
// TEXTO
// ============================================================================


export function texto(valor = ""){


    if(valor === null || valor === undefined)

        return "";


    return String(valor)

        .trim();


}




// ============================================================================
// MAIÚSCULAS
// ============================================================================


export function maiusculas(valor = ""){


    return texto(valor)

        .toUpperCase();


}




// ============================================================================
// MINÚSCULAS
// ============================================================================


export function minusculas(valor = ""){


    return texto(valor)

        .toLowerCase();


}




// ============================================================================
// PRIMEIRA LETRA MAIÚSCULA
// ============================================================================


export function titulo(valor = ""){


    return texto(valor)

        .toLowerCase()

        .replace(

            /\b\w/g,

            letra => letra.toUpperCase()

        );


}




// ============================================================================
// SOMENTE NÚMEROS
// ============================================================================


export function somenteNumeros(valor = ""){


    return String(valor)

        .replace(

            /\D/g,

            ""

        );


}




// ============================================================================
// CPF
// ============================================================================


export function cpf(valor = ""){


    const numero =

        somenteNumeros(valor);



    if(numero.length !== 11)

        return valor;



    return numero.replace(

        /(\d{3})(\d{3})(\d{3})(\d{2})/,

        "$1.$2.$3-$4"

    );


}




// ============================================================================
// TELEFONE
// ============================================================================


export function telefone(valor = ""){


    const numero =

        somenteNumeros(valor);



    if(numero.length === 11){


        return numero.replace(

            /(\d{2})(\d{5})(\d{4})/,

            "($1) $2-$3"

        );


    }



    if(numero.length === 10){


        return numero.replace(

            /(\d{2})(\d{4})(\d{4})/,

            "($1) $2-$3"

        );


    }



    return valor;


}




// ============================================================================
// PLACA VEÍCULO
// ============================================================================


export function placa(valor = ""){


    return texto(valor)

        .toUpperCase();


}




// ============================================================================
// MOEDA BRASILEIRA
// ============================================================================


export function moeda(valor = 0){


    const numero =

        Number(valor);



    if(isNaN(numero))

        return "R$ 0,00";



    return numero.toLocaleString(

        "pt-BR",

        {

            style:"currency",

            currency:"BRL"

        }

    );


}




// ============================================================================
// NÚMEROS
// ============================================================================


export function numero(

    valor = 0,

    casas = 0

){


    const numero =

        Number(valor);



    if(isNaN(numero))

        return "0";



    return numero.toLocaleString(

        "pt-BR",

        {

            minimumFractionDigits:

            casas,



            maximumFractionDigits:

            casas

        }

    );


}




// ============================================================================
// KM / DISTÂNCIA
// ============================================================================


export function quilometragem(valor = 0){


    return numero(

        valor,

        0

    )

    + " km";


}




// ============================================================================
// CAPITALIZAR NOME
// ============================================================================


export function nome(valor = ""){


    return titulo(valor);


}
