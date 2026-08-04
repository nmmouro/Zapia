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
    getOcorrencias

} from "./dashboard.state.js";

// ============================================================================
// CARREGAR DASHBOARD
// ============================================================================

export async function carregarDashboard() {

    const dados =

        await obterDashboard();

    setVeiculos(

        dados.veiculos

    );

    setEmpregados(

        dados.empregados

    );

    setOcorrencias(

        dados.ocorrencias

    );

    renderizarDashboard();

}

// ============================================================================
// RENDERIZAR DASHBOARD
// ============================================================================

export function renderizarDashboard() {

    renderTable(

        tabelaVeiculos,

        {

            columns:

                COLUNAS_DASHBOARD_VEICULOS,

            data:

                getVeiculos()

        }

    );

    renderTable(

        tabelaEmpregados,

        {

            columns:

                COLUNAS_DASHBOARD_EMPREGADOS,

            data:

                getEmpregados()

        }

    );

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
