// ============================================================================
// EMPREGADOS
// Painel Frota
// Arquivo: js/pages/empregados.js
// Responsável pela inicialização da página.
// ============================================================================

import {
    
    iniciarRelogio

} from "../utils/relogio.js";

import {

    formulario,
    btnNovo

} from "../controllers/empregados.state.js";

import {

    registrarEventos

} from "../controllers/empregados.events.js";

import {

    carregarTabela

} from "../controllers/empregados.helpers.js";

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
// INICIALIZAÇÃO
// ============================================================================

document.addEventListener(

    "DOMContentLoaded",

    init

);

// ============================================================================
// INIT
// ============================================================================

async function init() {

    try {

        mostrarLoading();

        iniciarFullscreen();

        iniciarRelogio();

        registrarEventos(

            formulario,

            btnNovo

        );

        await carregarTabela();

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
