// ============================================================================
// SERVICES / EMPREGADOS
// Arquivo: js/services/empregados.js
//
// Responsável exclusivamente pela comunicação CRUD
// com a aba EMPREGADOS do Google Sheets
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================

import {

    listar,
    buscar,
    salvar,
    editar,
    excluir

} from "../api/api.js";


import {

    ABAS

} from "../config/config.js";


// ============================================================================
// CONFIGURAÇÃO DA ABA
// ============================================================================

const ABA = ABAS.EMPREGADOS;


export function obterEmpregados() {

    return listar(ABA);
}

export function obterEmpregado(id) {
    return buscar(ABA, id);
}

export function salvarEmpregado(dados) {
    return salvar(ABA, dados);
}

export function atualizarEmpregado(id, dados) {
    return editar(ABA, id, dados);
}

export function excluirEmpregado(id) {

    return excluir(ABA, id);
}
