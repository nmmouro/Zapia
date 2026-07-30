// ============================================================================
// LANÇAMENTOS CONTROLLER
// Arquivo: js/controllers/lancamentos.controller.js
// ============================================================================

import {
    obterLancamentos,
    obterLancamento,
    excluirLancamento
} from "../services/lancamentos.js";

import {
    renderTable
} from "../ui/table.js";

import {
    mostrarLoading,
    esconderLoading
} from "../ui/loading.js";

import {
    COLUNAS_LANCAMENTOS
} from "../config/tabelas/lancamentos.js";

import {
    preencherFormulario
} from "../forms/lancamentos.fields.js";

let registros = [];

let registroEditando = null;

const tabela =
    document.querySelector("#tabelalancamentos");


// ============================================================================
// ESTADO
// ============================================================================

export function getRegistroEditando() {

    return registroEditando;

}

export function setRegistroEditando(id) {

    registroEditando = id;

}


// ============================================================================
// CARREGAR TABELA
// ============================================================================

export async function carregarTabela() {

    const resposta = await obterLancamentos();

    registros =
        resposta?.dados ??
        resposta;

    renderizarTabela();

}


// ============================================================================
// RENDER
// ============================================================================

function renderizarTabela() {

    renderTable(

        tabela,

        COLUNAS_LANCAMENTOS,

        registros,

        [

            {

                label: "Editar",

                className: "btn-edit",

                onClick:

                    registro => editarLancamento(registro.ID)

            },

            {

                label: "Excluir",

                className: "btn-delete",

                onClick:

                    registro => removerLancamento(registro.ID)

            }

        ]

    );

}


// ============================================================================
// EDITAR
// ============================================================================

export async function editarLancamento(id) {

    try {

        const resposta =
            await obterLancamento(id);

        const registro =
            resposta?.dados ??
            resposta;

        if (!registro) {

            throw new Error("Lançamento não encontrado.");

        }

        registroEditando =
            registro.ID;

        preencherFormulario(registro);

        const titulo =
            document.querySelector("#tituloFormulario");

        if (titulo) {

            titulo.textContent =
                "Editar lançamento";

        }

        document.body.classList.add("modo-edicao");

    }

    catch (erro) {

        console.error(erro);

        alert(

            erro.message ||

            "Não foi possível carregar o lançamento."

        );

    }

}


// ============================================================================
// EXCLUIR
// ============================================================================

export async function removerLancamento(id) {

    if (!confirm("Excluir lançamento?")) {

        return;

    }

    try {

        mostrarLoading();

        await excluirLancamento(id);

        await carregarTabela();

    }

    catch (erro) {

        console.error(erro);

        alert(

            erro.message ||

            "Erro ao excluir lançamento."

        );

    }

    finally {

        esconderLoading();

    }

}


window.editarLancamento =
    editarLancamento;
