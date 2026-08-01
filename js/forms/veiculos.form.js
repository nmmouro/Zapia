import {

    salvarVeiculo,
    atualizarVeiculo

} from "../services/veiculos.js";

import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";

import {

    tratarErro

} from "../utils/veiculos.helpers.js";

import {

    obterDadosFormulario

} from "./veiculos.fields.js";

import {

    carregarTabela

} from "../controllers/veiculos.controller.js";

import {

    preencherDataAtual

} from "../utils/datas.js";

let registroEditando = null;

export function setRegistroEditando(id) {

    registroEditando = id;

}

export async function salvarFormulario(evento, formulario) {

    evento.preventDefault();

    try {

        mostrarLoading();

        const dados =
            obterDadosFormulario(formulario);

        if (registroEditando) {

            await atualizarVeiculo(
                registroEditando,
                dados
            );

        } else {

            await salvarVeiculo(dados);

        }

        limparFormulario(formulario);

        await carregarTabela();

    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}


export function limparFormulario(formulario) {

   
    setRegistroEditando = null;

    formulario.reset();

    preencherDataAtual(formulario.elements["data"]);

    document.body.classList.remove("modo-edicao");
}


export function novoFormulario(formulario) {

    limparFormulario(formulario);

}
