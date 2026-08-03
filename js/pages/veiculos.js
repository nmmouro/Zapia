// ============================================================================
// VEÍCULOS
// Painel Frota
// Arquivo: js/pages/veiculos.js
// Responsável pela inicialização da página.
// ============================================================================

import {

    preencherDataHoraAtual

} from "../utils/datas.js";

import {

    formulario,
    btnNovo

} from "../controllers/veiculos.state.js";

import {

    registrarEventos

} from "../controllers/veiculos.events.js";

import {

    carregarTabela

} from "../controllers/veiculos.helpers.js";

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

        preencherDataHoraAtual(

            campoData,

            campoHora

        );

        registrarEventos(

            formulario,

            btnNovo

        );

        await carregarTabela();

    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}
