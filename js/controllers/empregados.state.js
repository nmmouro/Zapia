// ============================================================================
// EMPREGADOS - STATE
// Painel Frota
// Arquivo: js/controllers/empregados.state.js
//
// Responsável pelos elementos do formulário de empregados.
// ============================================================================

export let registros = [];

export let registroEditando = null;

// ============================================================================
// ELEMENTOS DO FORMULÁRIO
// ============================================================================


export const formulario =

    document.querySelector("#formEmpregado");

export const tabela =
    document.querySelector("#tabelaEmpregados");

export const btnNovo =
    document.querySelector("#btnNovo");

export const tituloFormulario =
    document.querySelector("#tituloFormulario");

// ============================================================================
// CAMPOS
// ============================================================================

export const campoData =

    document.querySelector("#data");


export const campoFoto =

    document.querySelector("#foto");



export const campoEmpregado =

    document.querySelector("#empregado");



export const campoMatricula =

    document.querySelector("#matricula");



export const campoDiretoria =

    document.querySelector("#diretoria");



export const campoSetor =

    document.querySelector("#setor");



export const campoUsuario =

    document.querySelector("#usuario");



export const campoCondicao =

    document.querySelector("#condicao");



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
