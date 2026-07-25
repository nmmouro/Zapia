// ============================================================================
// SERVICE — VEÍCULOS
// Painel Frota
// Arquivo: js/services/veiculos.js
// ============================================================================

import { criarCrud } from "./crudService.js";
import { ABAS }      from "../config/config.js";

const _crud = criarCrud(ABAS.VEICULOS);

export const obterVeiculos    = ()             => _crud.listar();
export const obterVeiculo     = (id)           => _crud.buscar(id);
export const salvarVeiculo    = (dados)        => _crud.salvar(dados);
export const atualizarVeiculo = (id, dados)    => _crud.editar(id, dados);
export const excluirVeiculo   = (id)           => _crud.excluir(id);
