// ============================================================================
// EMPREGADOS
// Painel Frota
// Arquivo: js/pages/empregados.js
// Responsável pela inicialização da página.
// ============================================================================

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
