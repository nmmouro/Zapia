// ============================================================================
// CONFIGURAÇÃO DE COLUNAS — LANÇAMENTOS
// Painel Frota
// Arquivo: js/config/tabelas/lancamentos.js
//
// Estende COLUNAS_BASE (ID, Data, Hora, Status) com os campos
// específicos do módulo de lançamentos.
// ============================================================================

import { COLUNAS_BASE } from "../config.js";


// ============================================================================
// COLUNAS
// ============================================================================

export const COLUNAS_LANCAMENTOS = [

    ...COLUNAS_BASE,

    {
        field: "ID",
        label: "ID"
    },

    {
        field: "Data",
        label: "Data"
    },

    {
        field: "Hora",
        label: "Hora"
    },

    {
        field: "Empregado / Matrícula",
        label: "Empregado"
    },

    {
        field: "Veículo",
        label: "Veículo"
    },

    {
        field: "Passageiro / Setor / Motivo",
        label: "Passageiro"
    },

    {
        field: "Itinerário",
        label: "Itinerário"
    },

    {
        field: "Status",
        label: "Status",
        type: "status"
    }

];
