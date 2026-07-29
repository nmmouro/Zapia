// ============================================================================
// API
// Painel Frota
// Arquivo: js/api/api.js
//
// Responsável pela comunicação HTTP com Google Apps Script
// ============================================================================


// ============================================================================
// IMPORTS
// ============================================================================

import {

    CONFIG

} from "../config/config.js";


import Validator from "../validators/validator.js";

// ============================================================================
// REQUEST
// ============================================================================

async function request(url, options = {}) {

    console.log(
        "API Request:",
        url
    );

    console.log(
        "API Options:",
        options
    );

    const resposta =
        await fetch(
            url,
            options
        );

    if (!resposta.ok) {

        throw new Error(
            `Erro HTTP ${resposta.status}`
        );

    }

    const json =
        await resposta.json();

    console.log(
        "Resposta bruta da API:",
        json
    );

    if (
        !json ||
        typeof json !== "object"
    ) {

        throw new Error(
            "Resposta inválida da API."
        );

    }

    if (
        json.success === false ||
        json.sucesso === false
    ) {

        throw new Error(

            json.message ||
            json.erro ||
            "Erro desconhecido na API."

        );

    }

    return json.data;

}



// ============================================================================
// GET
// ============================================================================

async function get(

    acao,

    aba,

    id = null

) {

    const params =

        new URLSearchParams();


    params.append(

        "acao",

        acao

    );


    params.append(

        "aba",

        aba

    );


    if (

        id !== null &&

        id !== undefined

    ) {

        params.append(

            "id",

            id

        );

    }


    const url =

        `${CONFIG.API_URL}?${params.toString()}`;


    return request(

        url

    );

}



// ============================================================================
// POST
// ============================================================================

async function post(

    acao,

    aba,

    dados = {},

    id = null

) {

    return request(

        CONFIG.API_URL,

        {

            method:

                "POST",


            headers: {

                "Content-Type":

                    "text/plain;charset=utf-8"

            },


            body:

                JSON.stringify({

                    acao,

                    aba,

                    id,

                    dados

                })

        }

    );

}


// ============================================================================
// CRUD
// ============================================================================


// ============================================================================
// LISTAR
// ============================================================================

export function listar(

    aba

) {

    return get(

        "listar",

        aba

    );

}



// ============================================================================
// BUSCAR
// ============================================================================

export function buscar(

    aba,

    id

) {

    return get(

        "buscar",

        aba,

        id

    );

}



// ============================================================================
// SALVAR
// ============================================================================

export function salvar(

    aba,

    dados

) {

    return post(

        "salvar",

        aba,

        dados

    );

}



// ============================================================================
// EDITAR
// ============================================================================

export function editar(

    aba,

    id,

    dados

) {

    return post(

        "editar",

        aba,

        dados,

        id

    );

}



// ============================================================================
// EXCLUIR
// ============================================================================

export function excluir(

    aba,

    id

) {

    return post(

        "excluir",

        aba,

        {},

        id

    );

}
