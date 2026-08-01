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
                                                                        console.log("ID edição:", id);
        mostrarLoading();

        const dados =
            obterDadosFormulario(formulario);
                                                    console.log("Dados:", dados);
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
                                            console.log("Resposta salvar:", resposta);
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
