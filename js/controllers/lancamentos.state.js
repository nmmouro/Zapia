// ============================================================================
// LANÇAMENTOS - ESTADO
// Painel Frota
// Arquivo: js/controllers/lancamentos.state.js
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
    document.querySelector("#formLancamento");

export const tabela =
    document.querySelector("#tabelaLancamentos");

export const btnNovo =
    document.querySelector("#btnNovo");

export const campoData =
    document.querySelector("#data");

export const campoHora =
    document.querySelector("#hora");

export const selectEmpregado =
    document.querySelector("#empregado");

export const selectVeiculo =
    document.querySelector("#veiculo");

export const selectStatus =
    document.querySelector("#status");

// ============================================================================
// GETTERS / SETTERS
// ============================================================================

export function setRegistros(lista) {

    registros = lista ?? [];

}

export function getRegistros() {

    return registros;

}

export function setRegistroEditando(id) {

    registroEditando = id;

}

export function getRegistroEditando() {

    return registroEditando;

}

// ============================================================================
// LIMPAR ESTADO
// ============================================================================

export function limparEstado() {

    registros = [];

    registroEditando = null;

}
