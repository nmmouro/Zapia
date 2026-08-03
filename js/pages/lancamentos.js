// ============================================================================
// LANÇAMENTOS
// Painel Frota
// Arquivo: js/pages/lancamentos.js
// Responsável pela inicialização da página.
// ============================================================================

import {
    
    iniciarRelogio

} from "../utils/relogio.js";

import {

    formulario,
    btnNovo,
    campoData,
    campoHora

} from "../controllers/lancamentos.state.js";

import {

    registrarEventos

} from "../controllers/lancamentos.events.js";

import {

    carregarTabela,
    carregarEmpregados,
    carregarVeiculos

} from "../controllers/lancamentos.helpers.js";

import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";

import {

    tratarErro

} from "../utils/errors.js";

import {
    
    iniciarFullscreen

} from "../utils/fullscreen.js";


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

        iniciarFullscreen();

        iniciarRelogio();

       registrarEventos(

            formulario,

            btnNovo

        );

        await carregarEmpregados();

        await carregarVeiculos();

        await carregarTabela();

    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}
