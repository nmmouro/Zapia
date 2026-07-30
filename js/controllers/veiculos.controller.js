import {

    obterVeiculos,
    obterVeiculo,
    excluirVeiculo

} from "../services/veiculos.js";

import {

    preencherFormulario

} from "../forms/veiculos.filders.js";

import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";

import {

    tratarErro

} from "../utils/veiculos.helpers.js";

import {

    setRegistros,
    setRegistroEditando

} from "./veiculos.state.js";

import {

    renderizarTabela

} from "./veiculos.table.js";

export async function carregarTabela() {

    const resposta = await obterVeiculos();

    setRegistros(
        resposta?.dados ?? resposta
    );

    renderizarTabela();

}

export async function editarVeiculo(id) {

    try {

        const resposta = await obterVeiculo(id);

        const registro = resposta?.dados ?? resposta;

        if (!registro)
            throw new Error("Veículo não encontrado.");

        setRegistroEditando(registro.ID);

        preencherFormulario(registro);

        const titulo =
            document.querySelector("#tituloFormulario");

        if (titulo)
            titulo.textContent = "Editar veículo";

        document.body.classList.add("modo-edicao");

    }

    catch (erro) {

        console.error(erro);

        alert(erro.message);

    }

}

export async function removerVeiculo(id) {

    if (!confirm("Excluir veículo?"))
        return;

    try {

        mostrarLoading();

        await excluirVeiculo(id);

        await carregarTabela();

    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}

window.editarVeiculo = editarVeiculo;
