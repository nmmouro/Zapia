// ============================================================================
// SERVICE — EMPREGADOS
// Painel Frota
// Arquivo: js/services/empregados.js
// ============================================================================

import { criarCrud } from "./crudService.js";
import { ABAS }      from "../config/config.js";

const _crud = criarCrud(ABAS.EMPREGADOS);

export const obterEmpregados    = ()           => _crud.listar();
export const obterEmpregado     = (id)         => _crud.buscar(id);
export const salvarEmpregado    = (dados)      => _crud.salvar(dados);
export const atualizarEmpregado = (id, dados)  => _crud.editar(id, dados);
export const excluirEmpregado   = (id)         => _crud.excluir(id);
