// ============================================================================
// VEÍCULOS - HELPERS
// Painel Frota
// Arquivo: js/controllers/veiculos.helpers.js
// Responsável pelas operações auxiliares da tela.
// ============================================================================

import {

    COLUNAS_VEICULOS

} from "../config/tabelas/veiculos.js";

import {

    obterVeiculos,
    excluirVeiculo

} from "../services/veiculos.js";

import {

    renderTable

} from "../components/table.js";

import {

    editarVeiculo

} from "./veiculos.form.js";

import {

    tabela,
    setRegistros,
    getRegistros

} from "./veiculos.state.js";

// ============================================================================
// CARREGAR TABELA
// ============================================================================

export async function carregarTabela() {

    const resposta =
        await obterVeiculos();

    const lista =
        resposta?.data ??
        resposta?.dados ??
        resposta;

    if (!Array.isArray(lista)) {

        throw new Error(
            "Resposta inválida ao carregar empregados."
        );
    }

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

                COLUNAS_VEICULOS,

            data:

                obterRegistros(),

            actions: [

                {

                    label: "Editar",

                    className: "btn-edit",

                    onClick: item =>

                        editarVeiculo(

                            item.ID

                        )

                },

                {

                    label: "Excluir",

                    className: "btn-delete",

                    onClick: item =>

                        removerVeiculo(

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

export async function removerVeiculo(id) {

    const confirmar = confirm(

        "Deseja excluir este veículo?"

    );

    if (!confirmar) {

        return;

    }

    await excluirVeiculo(id);

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
