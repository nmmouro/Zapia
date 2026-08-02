// ============================================================================
// LANÇAMENTOS
// Painel Frota
// Arquivo: js/pages/lancamentos.js
// Responsável apenas pela inicialização da página.
// ============================================================================

import { mostrarLoading, esconderLoading } from "../ui/loading.js";

import { inicializarFormulario } from "../controllers/lancamentos.form.js";

import {
    carregarTabela,
    carregarEmpregados,
    carregarVeiculos
} from "../controllers/lancamentos.helpers.js";

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

        inicializarFormulario();

        await carregarEmpregados();

        await carregarVeiculos();

        await carregarTabela();

    }

    catch (erro) {

        console.error(erro);

        alert(

            erro.message ||

            "Erro ao inicializar lançamentos."

        );

    }

    finally {

        esconderLoading();

    }

}
