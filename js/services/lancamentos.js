// ============================================================================
// SERVICES / LANÇAMENTOS
// Arquivo: js/services/lancamentos.js
// ============================================================================

import { criarCrud } from "./crudService.js";

import {
    ABAS
} from "../config/config.js";


// ============================================================================
// CRUD DE LANÇAMENTOS
// ============================================================================

const lancamentos = criarCrud(ABAS.LANCAMENTOS);


// ============================================================================
// API PÚBLICA
// ============================================================================

export const obterLancamentos    = ()            => _crud.listar();
export const obterLancamento     = (id)          => _crud.buscar(id);
export const salvarLancamento    = (dados)       => _crud.salvar(dados);
export const atualizarLancamento = (id, dados)   => _crud.editar(id, dados);
export const excluirLancamento   = (id)          => _crud.excluir(id);
