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


// ============================================================================
// RENDER
// ============================================================================

export function renderizarTabela(acoes) {

    renderTable(

        tabela,

        COLUNAS_LANCAMENTOS,

        getRegistros(),

        acoes

    );

}
