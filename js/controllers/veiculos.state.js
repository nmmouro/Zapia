// ============================================================================
// VEÍCULOS - ESTADO
// Painel Frota
// Arquivo: js/controllers/veiculos.state.js
// Responsável pelo estado da página e referências aos elementos.
// ============================================================================

// ============================================================================
// ESTADO
// ============================================================================

export let registros = [];

export let registroEditando = null;

// ============================================================================
// ELEMENTOS
// ============================================================================

export const formulario =
    document.querySelector("#formVeiculo");

export const tabela =
    document.querySelector("#tabelaVeiculos");

export const btnNovo =
    document.querySelector("#btnNovo");

export const tituloFormulario =
    document.querySelector("#tituloFormulario");

// ============================================================================
// CAMPOS
// ============================================================================

export const campoData =
    document.querySelector("#data");

export const campoPlaca =
    document.querySelector("#placa");

export const campoModelo =
    document.querySelector("#modelo");

export const campoMarca =
    document.querySelector("#marca");

export const campoAno =
    document.querySelector("#ano");

export const campoCombustivel =
    document.querySelector("#combustivel");

export const campoKm =
    document.querySelector("#km");

export const campoStatus =
    document.querySelector("#status");

// ============================================================================
// GETTERS / SETTERS
// ============================================================================

export function getRegistros() {

    return registros;

}

export function setRegistros(lista) {

    registros = lista ?? [];

}

export function getRegistroEditando() {

    return registroEditando;

}

export function setRegistroEditando(id) {

    registroEditando = id;

}

// ============================================================================
// LIMPAR ESTADO
// ============================================================================

export function limparEstado() {

    registros = [];

    registroEditando = null;

}
