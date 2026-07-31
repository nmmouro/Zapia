import {
    renderTable
} from "../ui/table.js";

import {
    COLUNAS_LANCAMENTOS
} from "../config/tabelas/lancamentos.js";

import {

    tabela,

    getRegistros,
    setRegistros,

    getRegistroEditando,
    setRegistroEditando

} from "./lancamentos.state.js";

import {
    editarlancamentos,
    removerlancamentos
} from "./lancamentos.controller.js";


// ============================================================================
// RENDER
// ============================================================================

export function renderizarTabela() {

    const acoes = [

        {
            label: "Editar",
            className: "btn-edit",
            onClick: registro => editarLancamento(registro.ID)
        },

        {
            label: "Excluir",
            className: "btn-delete",
            onClick: registro => removerLancamento(registro.ID)
        }

    ];

    renderTable(

        tabela,

        COLUNAS_LANCAMENTOS,

        getRegistros(),

        acoes

    );

}
