// ============================================================================
// CADASTRO
// Arquivo: js/pages/cadastro.js
// ============================================================================

// ================= IMPORTS =================

import {

    salvarLancamento

} from "../services/lancamentos.js";

import {

    obterMotoristas

} from "../services/motoristas.js";

import {

    obterVeiculos

} from "../services/veiculos.js";

import {

    preencherSelect

} from "../utils/formulario.js";

// ================= ELEMENTOS =================

const formulario =
    document.querySelector("#formCadastro");

const motorista =
    document.querySelector("#motorista");

const veiculo =
    document.querySelector("#veiculo");

const btnSalvar =
    document.querySelector("#btnSalvar");

// ================= VARIÁVEIS =================

let listaMotoristas = [];

let listaVeiculos = [];

// ================= EVENTOS =================

document.addEventListener(

    "DOMContentLoaded",

    init

);

// ================= INIT =================

async function init() {

    try {

        await carregarDados();

        registrarEventos();

    }

    catch (erro) {

        tratarErro(erro);

    }

}

// ================= DADOS =================

async function carregarDados() {

    [

        listaMotoristas,

        listaVeiculos

    ] = await Promise.all([

        obterMotoristas(),

        obterVeiculos()

    ]);

    preencherCampos();

}

// ================= FORMULÁRIO =================

function preencherCampos() {

    preencherSelect(

        motorista,

        listaMotoristas,

        "nome",

        "nome"

    );

    preencherSelect(

        veiculo,

        listaVeiculos,

        "placa",

        "placa"

    );

}

// ================= EVENTOS =================

function registrarEventos() {

    formulario.addEventListener(

        "submit",

        salvar

    );

}

// ================= AÇÕES =================

async function salvar(evento) {

    evento.preventDefault();

    try {

        const dados = obterDadosFormulario();

        await salvarLancamento(dados);

        formulario.reset();

        alert("Cadastro realizado com sucesso.");

    }

    catch (erro) {

        tratarErro(erro);

    }

}

// ================= HELPERS =================

function obterDadosFormulario() {

    return {

        data:

            formulario.data.value,

        hora:

            formulario.hora.value,

        motorista:

            formulario.motorista.value,

        veiculo:

            formulario.veiculo.value,

        passageiro:

            formulario.passageiro.value,

        setor:

            formulario.setor.value,

        motivo:

            formulario.motivo.value,

        itinerario:

            formulario.itinerario.value,

        status:

            formulario.status.value

    };

}

// ================= ERROS =================

function tratarErro(erro) {

    console.error(erro);

    alert("Erro ao processar a solicitação.");

}
