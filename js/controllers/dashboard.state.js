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
// CONTROLE DE RENDERIZAÇÃO
// ============================================================================

let renderizado = {

    veiculos: false,

    empregados: false,

    ocorrencias: false

};

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
// DADOS
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
// CONTROLE DE RENDERIZAÇÃO
// ============================================================================

export function foiRenderizado(nome) {

    return renderizado[nome];

}

export function marcarRenderizado(nome) {

    renderizado[nome] = true;

}

// ============================================================================
// LIMPAR
// ============================================================================

export function limparEstado() {

    veiculos = [];

    empregados = [];

    ocorrencias = [];

    renderizado = {

        veiculos: false,

        empregados: false,

        ocorrencias: false

    };

}
