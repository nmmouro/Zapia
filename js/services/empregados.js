// ============================================================================
// SERVICES / EMPREGADOS
// Arquivo: js/services/empregados.js
// ============================================================================

import { criarCrud } from "./crudService.js";

import {
    ABAS
} from "../config/config.js";


// ============================================================================
// CRUD DE EMPREGADOS
// ============================================================================

const empregados = criarCrud(ABAS.EMPREGADOS);


// ============================================================================
// API PÚBLICA
// ============================================================================

const ABA = ABAS.EMPREGADOS;


export function obterEmpregados() {
    return empregados.listar();
}

export function obterEmpregado(id) {
    return empregados.buscar(id);
}

export function salvarEmpregado(dados) {
    return empregados.salvar(dados);
}

export function atualizarEmpregado(id, dados) {
    return empregados.editar(id, dados);
}

export function excluirEmpregado(id) {

    return empregados.excluir(id);
}
