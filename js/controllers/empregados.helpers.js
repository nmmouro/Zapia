// ============================================================================
// EMPREGADOS - HELPERS
// Painel Frota
// Arquivo: js/controllers/empregados.helpers.js
// Responsável pelas operações auxiliares da tela.
// ============================================================================

import {

    COLUNAS_EMPREGADOS

} from "../config/tabelas/empregados.js";

import {

    obterEmpregados,
    excluirEmpregado

} from "../services/empregados.js";

import {

    renderTable

} from "../components/table.js";

import {

    editarEmpregado

} from "./empregados.form.js";

import {

    tabela,
    setRegistros,
    getRegistros

} from "./empregados.state.js";

// ============================================================================
// CARREGAR TABELA
// ============================================================================

export async function carregarTabela() {

    const lista =

        await obterEmpregados();

    setRegistros(lista);

    renderizarTabela();

}

// ============================================================================
// RENDERIZAR TABELA
// ============================================================================

export function renderizarTabela() {

    renderTable(
       
        tabela,
        
        {

            columns:

                COLUNAS_EMPREGADOS,

            data:

                obterRegistros(),

            actions: [

                {

                    label: "Editar",

                    className: "btn-edit",

                    onClick: item =>

                        editarEmpregado(

                            item.ID

                        )

                },

                {

                    label: "Excluir",

                    className: "btn-delete",

                    onClick: item =>

                        removerEmpregado(

                            item.ID

                        )

                }

            ]

        }

    );

}

// ============================================================================
// REMOVER
// ============================================================================

export async function removerEmpregado(id) {

    const confirmar = confirm(

        "Deseja excluir este empregado?"

    );

    if (!confirmar) {

        return;

    }

    await excluirEmpregado(id);

    await carregarTabela();

}

// ============================================================================
// OBTER REGISTROS
// ============================================================================

function obterRegistros() {

    return tabelaRegistros();

}

function tabelaRegistros() {

    return window.structuredClone

        ? structuredClone([]).constructor === Array
            ? getLista()
            : getLista()

        : getLista();

}

function getLista() {

    return importState();

}

function importState() {

    return __registros();

}

function __registros() {

    // evita alterar diretamente o estado

    return [...requireRegistros()];

}

function requireRegistros() {

    return getRegistros();

}
