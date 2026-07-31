// ============================================================================
// LANÇAMENTOS CONTROLLER
// Arquivo: js/controllers/lancamentos.controller.js
// ============================================================================

import {
    obterLancamentos,
    obterLancamento,
    excluirLancamento
} from "../services/lancamentos.js";

import {
    mostrarLoading,
    esconderLoading
} from "../ui/loading.js";

import {
    preencherFormulario
} from "../forms/lancamentos.fields.js";

import {
    setRegistros,
    setRegistroEditando
} from "./lancamentos.state.js";

import {
    renderizarTabela
} from "./lancamentos.table.js";

import { obterVeiculos } from "../services/veiculos.js";
import { preencherSelect } from "../utils/formulario.js";
import { obterEmpregados } from "../services/empregados.js";

// ============================================================================
// CARREGAR TABELA
// ============================================================================

export async function carregarTabela() {

    const resposta = await obterLancamentos();

    setRegistros(
        resposta?.dados ?? resposta
    );

    renderizarTabela([
        {
            label: "Editar",
            className: "btn-edit",
            onClick: registro => editarLancamento(registro.ID)
        },
        {
            label: "Excluir",
            className: "btn-delete",
            onClick: registro => removerLancamento(registro.ID)
        }
    ]);

}


// ============================================================================
// EDITAR
// ============================================================================

export async function editarLancamento(id) {

    try {

        const resposta =
            await obterLancamento(id);

        const registro =
            resposta?.dados ?? resposta;

        if (!registro) {

            throw new Error("Lançamento não encontrado.");

        }

        setRegistroEditando(registro.ID);

        const formulario =
            document.querySelector("#formlancamento");

        preencherFormulario(
            formulario,
            registro
        );

        const titulo =
            document.querySelector("#tituloFormulario");

        if (titulo) {

            titulo.textContent = "Editar lançamento";

        }

        document.body.classList.add("modo-edicao");

    }

    catch (erro) {

        console.error(erro);

        alert(
            erro.message ||
            "Não foi possível carregar o lançamento."
        );

    }

}


// ============================================================================
// EXCLUIR
// ============================================================================

export async function removerLancamento(id) {

    if (!confirm("Excluir lançamento?")) {

        return;

    }

    try {

        mostrarLoading();

        await excluirLancamento(id);

        await carregarTabela();

    }

    catch (erro) {

        console.error(erro);

        alert(
            erro.message ||
            "Erro ao excluir lançamento."
        );

    }

    finally {

        esconderLoading();

    }

}

// ============================================================================
// CARREGAR VEÍCULOS
// ============================================================================

export async function carregarVeiculos() {

    const resposta = await obterVeiculos();

    const lista = resposta?.dados ?? resposta;

    const select =
        document.querySelector("#veiculo");

    preencherSelect(

        select,

        lista,

        item => item.Placa,

        item => `${item.Placa} - ${item.Modelo}`

    );

}

// ============================================================================
// CARREGAR EMPREGADOS
// ============================================================================

export async function carregarEmpregados() {

    const resposta = await obterEmpregados();

    const lista = resposta?.dados ?? resposta;

    const select =
        document.querySelector("#empregado");

    preencherSelect(

        select,

        lista,

        item => item["Empregado / Matrícula"],

        item => item["Empregado / Matrícula"]

    );

}


// ============================================================================
// GLOBAL
// ============================================================================

window.editarLancamento = editarLancamento;
