import {

    obterVeiculos,
    obterVeiculo,
    excluirVeiculo

} from "../services/veiculos.js";


import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";


import {

    preencherFormulario

} from "../forms/veiculos.fields.js";


import {

    tabela,

    getRegistros,
    setRegistros,

    getRegistroEditando,
    setRegistroEditando

} from "./veiculos.state.js";


import {

    renderizarTabela

} from "./veiculos.table.js";


// ============================================================================
// CARREGAR TABELA
// ============================================================================

export async function carregarTabela() {

    const resposta = await obterVeiculos();

    setRegistros(
        resposta?.dados ?? resposta
    );

    renderizarTabela([
        {
            label: "Editar",
            className: "btn-edit",
            onClick: registro => editarVeiculo(registro.ID)
        },
        {
            label: "Excluir",
            className: "btn-delete",
            onClick: registro => removerVeiculo(registro.ID)
        }
    ]);


}


// ============================================================================
// EDITAR
// ============================================================================

export async function editarVeiculo(id) {

    try {

        const resposta =
            await obterVeiculo(id);

        const registro =
            resposta?.dados ?? resposta;

        if (!registro) {

            throw new Error("Veículo não encontrado.");

        }

        setRegistroEditando(registro.ID);

        const formulario =
            document.querySelector("#formveiculo");

        preencherFormulario(
            formulario,
            registro
        );

        const titulo =
            document.querySelector("#tituloFormulario");

        if (titulo) {

            titulo.textContent = "Editar veículo";

        }

        document.body.classList.add("modo-edicao");

    }

    catch (erro) {

        console.error(erro);

        alert(
            erro.message ||
            "Não foi possível carregar o veículo."
        );

    }

}

// ============================================================================
// EXCLUIR
// ============================================================================

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

// ============================================================================
// GLOBAL
// ============================================================================

window.editarVeiculo = editarVeiculo;
