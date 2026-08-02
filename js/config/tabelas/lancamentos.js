// ============================================================================
// CONFIGURAÇÃO DA TABELA DE LANÇAMENTOS
// Arquivo: js/config/tabelas/lancamentos.js
// ============================================================================

export const COLUNAS_LANCAMENTOS = [

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
        label: "Hora",
        formatar: formatarHora
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

function formatarHora(valor) {

    if (!valor) return "";

    return valor
        .toString()
        .substring(0,5);

}
