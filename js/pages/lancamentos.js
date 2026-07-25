// ============================================================================
// PAGE — LANÇAMENTOS
// Painel Frota
// Arquivo: js/pages/lancamentos.js
//
// Estende PageController.
// Aqui ficam apenas as decisões específicas deste módulo:
//   - Colunas da tabela
//   - Mapeamento formulário ↔ API
//   - Chamadas CRUD do service correto
//   - Carregamento de selects dinâmicos (veículos, empregados, status)
// ============================================================================


// ============================================================================
// IMPORTS
// ============================================================================

import { PageController }       from "/_pageController.js";

import { COLUNAS_LANCAMENTOS }  from "/config/tabelas/lancamentos.js";

import { STATUS }               from "/config/config.js";

import {
    obterLancamentos,
    salvarLancamento,
    atualizarLancamento,
    excluirLancamento
} from "../services/lancamentos.js";

import { obterVeiculos }        from "/services/veiculos.js";

import { obterEmpregados }      from "/services/empregados.js";

import {
    obterDadosFormulario,
    preencherFormulario,
    preencherSelect
} from "../utils/formulario.js";


// ============================================================================
// MAPEAMENTO FORMULÁRIO ↔ API
// chave  = atributo name do <input> / <select> no HTML
// valor  = nome do campo retornado / esperado pela API
// ============================================================================

const MAPA_CAMPOS = {
    data:        "Data",
    hora:        "Hora",
    empregado:   "Empregado / Matrícula",
    veiculo:     "Veículo",
    passageiro:  "Passageiro / Setor / Motivo",
    itinerario:  "Itinerário",
    status:      "Status"
};


// ============================================================================
// STATUS DISPONÍVEIS PARA LANÇAMENTOS
// ============================================================================

const STATUS_LANCAMENTOS = [
    STATUS.AGENDADO,
    STATUS.EM_ANDAMENTO,
    STATUS.VIAGEM,
    STATUS.MANUTENCAO,
    STATUS.FINALIZADO,
    STATUS.CANCELADO
];


// ============================================================================
// CLASSE DA PÁGINA
// ============================================================================

class LancamentosPage extends PageController {


    // =========================================================================
    // TABELA
    // =========================================================================

    getTabela() {
        return document.querySelector("#tabelaLancamentos");
    }

    getColunas() {
        return COLUNAS_LANCAMENTOS;
    }


    // =========================================================================
    // CRUD
    // =========================================================================

    carregarRegistros() {
        return obterLancamentos();
    }

    salvarRegistro(dados) {
        return salvarLancamento(dados);
    }

    editarRegistro(id, dados) {
        return atualizarLancamento(id, dados);
    }

    excluirRegistro(id) {
        return excluirLancamento(id);
    }


    // =========================================================================
    // FORMULÁRIO
    // =========================================================================

    coletarDados() {
        return obterDadosFormulario(
            this._formulario,
            MAPA_CAMPOS
        );
    }

    preencherCampos(registro) {
        preencherFormulario(
            this._formulario,
            registro,
            MAPA_CAMPOS
        );
    }


    // =========================================================================
    // DEPENDÊNCIAS — selects dinâmicos
    // =========================================================================

    async carregarDependencias() {

        const [veiculos, empregados] = await Promise.all([
            obterVeiculos(),
            obterEmpregados()
        ]);

        preencherSelect(
            this._formulario?.elements["veiculo"],
            veiculos,
            "ID",
            "Modelo",
            "Selecione o veículo"
        );

        preencherSelect(
            this._formulario?.elements["empregado"],
            empregados,
            "ID",
            "Empregado",
            "Selecione o empregado"
        );

        this._preencherStatus();
    }


    // =========================================================================
    // PREENCHER SELECT DE STATUS
    // =========================================================================

    _preencherStatus() {

        const select = this._formulario?.elements["status"];

        if (!select) return;

        select.innerHTML = "";

        STATUS_LANCAMENTOS.forEach(valor => {

            const opt = document.createElement("option");
            opt.value       = valor;
            opt.textContent = valor;
            select.appendChild(opt);

        });
    }

}


// ============================================================================
// INICIALIZAR
// ============================================================================

new LancamentosPage().init();
