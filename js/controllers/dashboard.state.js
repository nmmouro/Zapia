// ============================================================================
// DASHBOARD - ESTADO
// Painel Frota
// Arquivo: js/controllers/dashboard.state.js
// ============================================================================

// ============================================================================
// ESTADO
// ============================================================================

export let veiculos = [];

export let empregados = [];

export let ocorrencias = [];

// ============================================================================
// ELEMENTOS
// ============================================================================

export const tabelaVeiculos =
    document.querySelector("#tabelaVeiculos");

export const tabelaEmpregados =
    document.querySelector("#tabelaEmpregados");

export const tabelaOcorrencias =
    document.querySelector("#tabelaOcorrencias");

// ============================================================================
// GETTERS / SETTERS
// ============================================================================

export function setVeiculos(lista) {

    veiculos = lista ?? [];

}

export function getVeiculos() {

    return veiculos;

}

export function setEmpregados(lista) {

    empregados = lista ?? [];

}

export function getEmpregados() {

    return empregados;

}

export function setOcorrencias(lista) {

    ocorrencias = lista ?? [];

}

export function getOcorrencias() {

    return ocorrencias;

}

// ============================================================================
// LIMPAR ESTADO
// ============================================================================

export function limparEstado() {

    veiculos = [];

    empregados = [];

    ocorrencias = [];

}
