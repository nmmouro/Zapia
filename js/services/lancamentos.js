// ============================================================================
// SERVICE — LANÇAMENTOS
// Painel Frota
// Arquivo: js/services/lancamentos.js
//
// Responsável pela comunicação CRUD com a aba LANCAMENTOS do Google Sheets.
// Utiliza criarCrud() para evitar repetição de código.
// ============================================================================

import { criarCrud } from "./crudService.js";
import { ABAS }      from "../config/config.js";


// ============================================================================
// INSTÂNCIA CRUD
// ============================================================================

const _crud = criarCrud(ABAS.LANCAMENTOS);


// ============================================================================
// API PÚBLICA
// ============================================================================

export const obterLancamentos    = ()            => _crud.listar();
export const obterLancamento     = (id)          => _crud.buscar(id);
export const salvarLancamento    = (dados)       => _crud.salvar(dados);
export const atualizarLancamento = (id, dados)   => _crud.editar(id, dados);
export const excluirLancamento   = (id)          => _crud.excluir(id);
