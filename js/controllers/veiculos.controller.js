import {
    carregarTabela,
    editarVeiculo,
    removerVeiculo
} from "../tables/veiculos.table.js";

import {
    salvarFormulario,
    novoFormulario
} from "../forms/veiculos.form.js";

import {
    preencherDataAtual,
    tratarErro
} from "../utils/veiculos.helpers.js";

import {
    mostrarLoading,
    esconderLoading
} from "../ui/loading.js";


export async function initVeiculos(){

    try{

        mostrarLoading();
        
        preencherDataAtual();
        
        registrarEventos();
        
        await carregarTabela();
    }
        
    catch(erro){

        tratarErro(erro);

    }
    finally{

        esconderLoading();
    }
}


function registrarEventos(){

    document
        .querySelector("#formveiculo")
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

window.editarVeiculo = editarVeiculo;
window.removerVeiculo = removerVeiculo;
