// ============================================================================
// VEÍCULOS - FORMULÁRIO
// Painel Frota
// Arquivo: js/controllers/veiculos.form.js
// Responsável pelas operações do formulário.
// ============================================================================

import {

    obterVeiculo,
    salvarVeiculo,
    atualizarVeiculo

} from "../services/veiculos.js";

import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";

import {

    tratarErro

} from "../utils/errors.js";

import {

    obterDadosFormulario,
    preencherFormulario,
    limparFormulario

} from "./veiculos.fields.js";

import {

    carregarTabela

} from "./veiculos.helpers.js";

import {

    getRegistroEditando,
    setRegistroEditando,
    tituloFormulario

} from "./veiculos.state.js";

// ============================================================================
// EDITAR
// ============================================================================

export async function editarVeiculo(id) {

    try {

        mostrarLoading();

        const registro =
            await obterVeiculo(id);

        if (!registro) {

            throw new Error(
                "Veículo não encontrado."
            );

        }

        preencherFormulario(registro);

        setRegistroEditando(

            registro.ID

        );

        if (tituloFormulario) {

            tituloFormulario.textContent =
                "Editar veículo";

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
// SALVAR
// ============================================================================

export async function salvarFormulario(

    evento,

    formulario

) {

    evento.preventDefault();

    try {

        mostrarLoading();

        const dados =
            obterDadosFormulario();

        const id =
            getRegistroEditando();

        if (id) {

            await atualizarVeiculo(

                id,

                dados

            );

        }

        else {

            await salvarVeiculo(

                dados

            );

        }

        novoVeiculo(

            formulario

        );

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

export function novoVeiculo(

    formulario

) {

    limparFormulario(

        formulario

    );

    setRegistroEditando(

        null

    );

    if (tituloFormulario) {

        tituloFormulario.textContent =
            "Novo veículo";

    }

    document.body.classList.remove(
        "modo-edicao"
    );

}
