import {
    carregarTabela,
    editarLancamento,
    removerLancamento
} from "../tables/lancamentos.table.js";

import {
    salvarFormulario,
    novoFormulario
} from "../forms/lancamentos.form.js";

import {
    carregarEmpregados,
    carregarVeiculos
} from "../loaders/lancamentos.selects.js";

import {
    preencherDataHoraAtual
} from "../utils/lancamentos.helpers.js";

import {
    mostrarLoading,
    esconderLoading
} from "../ui/loading.js";

export async function initLancamentos(){

    try{

        mostrarLoading();

        preencherDataHoraAtual();

        registrarEventos();

        await carregarVeiculos();

        await carregarEmpregados();

        await carregarTabela();

    }
    finally{

        esconderLoading();

    }

}

function registrarEventos(){

    document
        .querySelector("#formLancamento")
        ?.addEventListener(
            "submit",
            salvarFormulario
        );

    document
        .querySelector("#btnNovo")
        ?.addEventListener(
            "click",
            novoFormulario
        );

}

window.editarLancamento = editarLancamento;
window.removerLancamento = removerLancamento;
