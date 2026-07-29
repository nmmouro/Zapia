// ============================================================================
// VEÍCULOS
// Arquivo: js/pages/veiculos.js
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================

import {

    COLUNAS_VEICULOS

} from "../config/tabelas/veiculos.js";


import {

    obterVeiculos,
    obterVeiculo,
    salvarVeiculo,
    atualizarVeiculo,
    excluirVeiculo

} from "../services/veiculos.js";


import {

    renderTable

} from "../ui/table.js";


import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";


import {

    dataInput,
    dataParaInput

} from "../utils/datas.js";


// ============================================================================
// ELEMENTOS
// ============================================================================

const formulario =

    document.querySelector(

        "#formveiculo"

    );


const tabela =

    document.querySelector(

        "#tabelaveiculos"

    );


const btnNovo =

    document.querySelector(

        "#btnNovo"

    );


const campoData =

    document.querySelector(

        "#data"

    );


const campoPlaca =

    document.querySelector(

        "#placa"

    );

const campoModelo =
    
    document.querySelector(
        "#modelo"
    );

const campoMarca =
    document.querySelector(
        "#marca"
    );

const campoAno =
    document.querySelector(
        "#ano"
    );

const campoCor =
    document.querySelector(
        "#cor"
    );

const campoCombustivel =
    document.querySelector(
        "#combustivel"
    );


const campoStatus =

    document.querySelector(

        "#status"

    );


// ============================================================================
// CONFIGURAÇÃO DA TABELA
// ============================================================================

let registros = [];

let registroEditando = null;


// ============================================================================
// INICIALIZAÇÃO
// ============================================================================

document.addEventListener(

    "DOMContentLoaded",

    init

);


async function init() {

    try {

        mostrarLoading();

        preencherDataAtual();

        registrarEventos();

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
// EVENTOS
// ============================================================================

function registrarEventos() {

    formulario?.addEventListener(

        "submit",

        salvar

    );


    btnNovo?.addEventListener(

        "click",

        novo

    );

}


// ============================================================================
// LISTAGEM
// ============================================================================

async function carregarTabela() {

    const resposta =

        await obterVeiculos();


    registros =

        resposta?.dados ??

        resposta;


    renderizarTabela();

}


// ============================================================================
// RENDER
// ============================================================================

function renderizarTabela() {

    renderTable(

        tabela,

        COLUNAS_VEICULOS,

        registros,

        [

            {

                label: "Editar",

                className: "btn-edit",

                onClick:

                    registro =>

                        editarVeiculo(

                            registro.ID

                        )

            },


            {

                label: "Excluir",

                className: "btn-delete",

                onClick:

                    registro =>

                        remover(

                            registro.ID

                        )

            }

        ]

    );

}


// ============================================================================
// EDITAR VEÍCULO
// ============================================================================

async function editarVeiculo(id) {

    try {

        const resposta =

            await obterVeiculo(id);


        const registro =

            resposta?.dados ??

            resposta;


        if (!registro) {

            throw new Error(

                "Veículo não encontrado."

            );

        }


        // ====================================================================
        // DEFINIR REGISTRO EM EDIÇÃO
        // ====================================================================

        registroEditando =

            registro.ID;


        // ====================================================================
        // PREENCHER FORMULÁRIO
        // ====================================================================

        preencherFormulario(

            registro

        );


        // ====================================================================
        // ATUALIZAR TÍTULO
        // ====================================================================

        const titulo =

            document.querySelector(

                "#tituloFormulario"

            );


        if (titulo) {

            titulo.textContent =

                "Editar veículo";

        }


        // ====================================================================
        // ATIVAR MODO EDIÇÃO
        // ====================================================================

        document.body.classList.add(

            "modo-edicao"

        );

    }

    catch (erro) {

        console.error(

            "Erro ao carregar veículo para edição:",

            erro

        );


        alert(

            erro.message ||

            "Não foi possível carregar o veículo."

        );

    }

}


window.editarVeiculo =

    editarVeiculo;


// ============================================================================
// SALVAR / ATUALIZAR VEÍCULO
// ============================================================================

async function salvar(evento) {

    evento.preventDefault();


    try {

        mostrarLoading();


        const dados =

            obterDadosFormulario();


        // ====================================================================
        // ATUALIZAR
        // ====================================================================

        if (registroEditando) {

            await atualizarVeiculo(

                registroEditando,

                dados

            );

        }


        // ====================================================================
        // NOVO
        // ====================================================================

        else {

            await salvarVeiculo(

                dados

            );

        }


        // ====================================================================
        // LIMPAR FORMULÁRIO
        // ====================================================================

        formulario.reset();


        preencherDataAtual();


        registroEditando =

            null;


        document.body.classList.remove(

            "modo-edicao"

        );


        // ====================================================================
        // RECARREGAR TABELA
        // ====================================================================

        await carregarTabela();

    }

    catch (erro) {

        tratarErro(

            erro

        );

    }

    finally {

        esconderLoading();

    }

}


// ============================================================================
// EXCLUIR VEÍCULO
// ============================================================================

async function remover(id) {

    if (

        !confirm(

            "Excluir veículo?"

        )

    ) {

        return;

    }


    try {

        mostrarLoading();


        await excluirVeiculo(

            id

        );


        await carregarTabela();

    }

    catch (erro) {

        tratarErro(

            erro

        );

    }

    finally {

        esconderLoading();

    }

}


// ============================================================================
// NOVO VEÍCULO
// ============================================================================

function novo() {

    registroEditando =

        null;


    formulario.reset();


    preencherDataAtual();


    document.body.classList.remove(

        "modo-edicao"

    );

}


// ============================================================================
// FORMULÁRIO
// ============================================================================

function obterDadosFormulario() {

    return {

        Data:
            formulario.elements["data"].value,

        Placa:
            formulario.elements["placa"].value.trim(),

        Modelo:
            formulario.elements["modelo"].value.trim(),

        Marca:
            formulario.elements["marca"].value.trim(),

        Ano:
            formulario.elements["ano"].value,

        Cor:
            formulario.elements["cor"].value.trim(),

        Combustível:
            formulario.elements["combustivel"].value,

        Status:
            formulario.elements["status"].value

    };

}

// ============================================================================
// PREENCHER FORMULÁRIO
// ============================================================================

function preencherFormulario(

    veiculo

) {

    // ========================================================================
    // DATA
    // ========================================================================

    campoData.value =

        dataParaInput(

            veiculo["Data"]

        ) || "";


    // ========================================================================
    // PLACA
    // ========================================================================

    campoPlaca.value =

        veiculo["Placa"]

        || "";

   campoModelo.value = veiculo["Modelo"] || "";
    
    campoMarca.value = veiculo["Marca"] || "";

    campoAno.value = veiculo["Ano"] || "";

    campoCor.value = veiculo["Cor"] || "";

    campoCombustivel.value = veiculo["Combustível"] || "";


    // ========================================================================
    // STATUS
    // ========================================================================

    campoStatus.value =

        veiculo["Status"]

        || "";

}


// ============================================================================
// DATA AUTOMÁTICA
// ============================================================================

function preencherDataAtual() {

    if (!campoData) {

        return;

    }


    campoData.value =

        dataInput();

}


// ============================================================================
// TRATAMENTO DE ERROS
// ============================================================================

function tratarErro(

    erro

) {

    console.error(

        erro

    );


    alert(

        erro?.message ||

        "Erro ao processar veículo."

    );

}
