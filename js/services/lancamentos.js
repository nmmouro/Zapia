// ============================================================================
// SERVICES / LANÇAMENTOS
// Arquivo: js/services/lancamentos.js
// ============================================================================

import { criarCrud } from "./crudService.js";

import { ABAS } from "../config/config.js";


// ============================================================================
// CRUD DE LANÇAMENTOS
// ============================================================================

const lancamentos = criarCrud(ABAS.LANCAMENTOS);


// ============================================================================
// API PÚBLICA
// ============================================================================

export function obterLancamentos() {

    return lancamentos.listar();
}

export function obterLancamento(id) {

    return lancamentos.buscar(id);
}

export function salvarLancamento(dados) {

    return lancamentos.salvar(dados);

}

export function atualizarLancamento(id, dados) {

    return lancamentos.editar(id, dados);

}

export function excluirLancamento(id) {

    return lancamentos.excluir(id);

}
