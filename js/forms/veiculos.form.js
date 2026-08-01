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

import {

    getRegistroEditando,
    setRegistroEditando

} from "../controllers/lancamentos.state.js";


export async function salvarFormulario(evento, formulario) {

    evento.preventDefault();

    try {

        mostrarLoading();

        const dados =
            obterDadosFormulario(formulario);

        if (getRegistroEditando) {

            await atualizarVeiculo(
                getRegistroEditando,
                dados
            );

        } else {

            await salvarVeiculo(dados);

        }

        limparFormulario(formulario);
        setRegistroEditando(null);

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
