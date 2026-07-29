// ============================================================================
// SERVICES / VEICULOS
// Arquivo: js/services/veiculos.js
// ============================================================================

import { criarCrud } from "./crudService.js";

import {
    ABAS
} from "../config/config.js";


// ============================================================================
// CRUD DE LANÇAMENTOS
// ============================================================================

const veiculos = criarCrud(ABAS.VEICULOS);


// ============================================================================


export async function obterVeiculos() {
    return veiculos.listar();
}

export async function obterVeiculo(id) {
    return veiculos.buscar(id);
}

export async function salvarVeiculo(dados) {
    return veiculos.salvar(dados);
}

export async function atualizarVeiculo(id, dados) {
    return veiculos.editar(id, dados);
}

export async function excluirVeiculo(id) {
    return veiculos.excluir(id);
}
