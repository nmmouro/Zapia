// ============================================================================
// DASHBOARD
// Arquivo: js/pages/dashboard.js
// ============================================================================

// ================= IMPORTS =================

import {

    carregarDashboard

} from "../services/dashboard.js";

import {

    renderCards

} from "../ui/cards.js";

import {

    renderTable

} from "../ui/table.js";

import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";

import {

    REFRESH

} from "../config/config.js";

// ================= ELEMENTOS =================

const cardVeiculos =
    document.querySelector("#veiculosData");

const cardMotoristas =
    document.querySelector("#motoristasData");

const tabelaPainel =
    document.querySelector("#painelData");

const tabelaAgenda =
    document.querySelector("#agendaData");

const tabelaSocial =
    document.querySelector("#socialData");

// ================= VARIÁVEIS =================

let timer = null;

// ================= EVENTOS =================

document.addEventListener(

    "DOMContentLoaded",

    init

);

// ================= INIT =================

async function init() {

    try {

        mostrarLoading();

        await atualizarDashboard();

        iniciarAtualizacaoAutomatica();

    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}

// ================= DADOS =================

async function atualizarDashboard() {

    const dados = await carregarDashboard();

    renderizarDashboard(dados);

}

// ================= RENDER =================

function renderizarDashboard(dados) {

    renderCards(

        cardVeiculos,

        dados.veiculos

    );

    renderCards(

        cardMotoristas,

        dados.motoristas

    );

    renderTable(

        tabelaPainel,

        dados.painel

    );

    renderTable(

        tabelaAgenda,

        dados.agenda

    );

    renderTable(

        tabelaSocial,

        dados.social

    );

}

// ================= ATUALIZAÇÃO =================

function iniciarAtualizacaoAutomatica() {

    timer = setInterval(

        atualizarDashboard,

        REFRESH.DASHBOARD

    );

}

// ================= ERROS =================

function tratarErro(erro) {

    console.error(erro);

}
