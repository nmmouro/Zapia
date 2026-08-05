// ============================================================================
// LANÇAMENTOS - FORMULÁRIO
// Painel Frota
// Arquivo: js/controllers/lancamentos.form.js
// ============================================================================

import {
    salvarLancamento,
    atualizarLancamento,
    excluirLancamento as removerLancamento,
    obterLancamento
} from "../services/lancamentos.js";

import {
    getRegistroEditando,
    setRegistroEditando
} from "./lancamentos.state.js";

import {
    carregarTabela
} from "./lancamentos.helpers.js";

import {
    obterDadosFormulario,
    preencherFormulario,
    limparFormulario
} from "./lancamentos.fields.js";

import {
    mostrarLoading,
    esconderLoading
} from "../ui/loading.js";

import {
    tratarErro
} from "../utils/errors.js";

// ============================================================================
// SALVAR
// ============================================================================

export async function salvarFormulario(evento, formulario) {

    evento.preventDefault();

    try {

        mostrarLoading();

        const dados =
            obterDadosFormulario(formulario);

        const id =
            getRegistroEditando();

        if (id) {

            await atualizarLancamento(
                id,
                dados
            );

        } else {

            await salvarLancamento(
                dados
            );

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

// ============================================================================
// EDITAR
// ============================================================================

export async function editarLancamento(id) {

    try {

        mostrarLoading();

        const resposta =
            await obterLancamento(id);

        const registro =
            resposta?.data ??
            resposta?.dados ??
            resposta;

        if (!registro) {

            throw new Error(
                "Lançamento não encontrado."
            );

        }

        setRegistroEditando(
            registro.ID
        );

        const formulario =
            document.querySelector(
                "#formLancamento"
            );

        preencherFormulario(
            formulario,
            registro
        );

        const titulo =
            document.querySelector(
                "#tituloFormulario"
            );

        if (titulo) {

            titulo.textContent =
                "Editar lançamento";

        }

        document.body.classList.add(
            "modo-edicao"
        );

    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}

// ============================================================================
// EXCLUIR
// ============================================================================

export async function excluirLancamento(id) {

    if (!confirm("Excluir lançamento?")) {

        return;

    }

    try {

        mostrarLoading();

        await removerLancamento(id);

        await carregarTabela();

    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}

// ============================================================================
// NOVO
// ============================================================================

export function novoLancamento() {

    const formulario =
        document.querySelector(
            "#formLancamento"
        );

    limparFormulario(
        formulario
    );

    setRegistroEditando(null);

    const titulo =
        document.querySelector(
            "#tituloFormulario"
        );

    if (titulo) {

        titulo.textContent =
            "Novo lançamento";

    }

    document.body.classList.remove(
        "modo-edicao"
    );

}
