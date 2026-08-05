// ============================================================================
// DASHBOARD
// Painel Frota
// Arquivo: js/pages/dashboard.js
// Responsável pela inicialização da página.
// ============================================================================

import {

    iniciarRelogio

} from "../utils/relogio.js";

import {

    iniciarFullscreen

} from "../utils/fullscreen.js";

import {
    COLUNAS_DASHBOARD_OCORRENCIAS
} from "../config/tabelas/dashboard.ocorrencias.js";

import {
    COLUNAS_DASHBOARD_VEICULOS
} from "../config/tabelas/dashboard.veiculos.js";

import {
    COLUNAS_DASHBOARD_EMPREGADOS
} from "../config/tabelas/dashboard.empregados.js";

import {

    carregarDashboard

} from "../controllers/dashboard.helpers.js";

import {

    registrarEventos

} from "../controllers/dashboard.events.js";

import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";

import {

    tratarErro

} from "../utils/errors.js";


// ============================================================================
// INIT
// ============================================================================

document.addEventListener(

    "DOMContentLoaded",

    inicializar

);

// ============================================================================
// INICIALIZAÇÃO
// ============================================================================

async function inicializar() {

    try {

        mostrarLoading();

        iniciarRelogio();

        iniciarFullscreen();

        await carregarDashboard();

        registrarEventos();

    }

    catch (erro) {

        tratarErro(

            erro

        );

    }

    finally {

        esconderLoading();

    }

}
