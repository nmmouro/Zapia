// ============================================================================
// LANÇAMENTOS - ESTADO
// Arquivo: js/controllers/veiculos.state.js
// ============================================================================

// ============================================================================
// ESTADO
// ============================================================================


export let registros = [];

export let registroEditando = null;

// ============================================================================
// ELEMENTOS
// ============================================================================

export const tabela =
	 document.querySelector("#tabelaveiculos");

// ============================================================================
// GETTERS / SETTERS
// ============================================================================

export function setRegistros(lista) {

    	 registros = lista ?? [];


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
