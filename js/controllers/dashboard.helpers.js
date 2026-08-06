// ============================================================================
// DASHBOARD - HELPERS
// Painel Frota
// Arquivo: js/controllers/dashboard.helpers.js
// ============================================================================

import {

    obterDashboard

} from "../services/dashboard.js";

import {

    renderTable

} from "../components/table.js";

import {

    COLUNAS_DASHBOARD_VEICULOS

} from "../config/tabelas/dashboard.veiculos.js";

import {

    COLUNAS_DASHBOARD_EMPREGADOS

} from "../config/tabelas/dashboard.empregados.js";

import {

    COLUNAS_DASHBOARD_OCORRENCIAS

} from "../config/tabelas/dashboard.ocorrencias.js";

import {

    tabelaVeiculos,

    tabelaEmpregados,

    tabelaOcorrencias,

    setVeiculos,

    setEmpregados,

    setOcorrencias,

    getVeiculos,

    getEmpregados,

    getOcorrencias,

    

} from "./dashboard.state.js";

// ============================================================================
// CARREGAR
// ============================================================================

export async function carregarDashboard() {

    const resposta =

        await obterDashboard();

    const dados =

        resposta?.data ??

        resposta?.dados ??

        resposta;

    if (!dados) {

        throw new Error(

            "Resposta inválida."

        );

    }

    setVeiculos(

        dados.veiculos

    );

    setEmpregados(

        dados.empregados

    );

    setOcorrencias(

        dados.ocorrencias

    );

    atualizarDashboard();

}

// ============================================================================
// ATUALIZA
// ============================================================================

export function atualizarDashboard() {

    atualizarVeiculos();

    atualizarEmpregados();

    atualizarOcorrencias();

}

// ============================================================================
// VEÍCULOS
// ============================================================================

function atualizarVeiculos() {

    renderTable(

        tabelaVeiculos,

        {

            columns:

                COLUNAS_DASHBOARD_VEICULOS,

            data:

                getVeiculos()

        }

    );

}

// ============================================================================
// EMPREGADOS
// ============================================================================

function atualizarEmpregados() {

    renderTable(

        tabelaEmpregados,

        {

            columns:

                COLUNAS_DASHBOARD_EMPREGADOS,

            data:

                getEmpregados()

        }

    );

}

// ============================================================================
// OCORRÊNCIAS
// ============================================================================

function atualizarOcorrencias() {

    renderTable(

        tabelaOcorrencias,

        {

            columns:

                COLUNAS_DASHBOARD_OCORRENCIAS,

            data:

                getOcorrencias()

        }

    );

}
