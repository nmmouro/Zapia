import { renderTable } from "../ui/table.js";

import { COLUNAS_VEICULOS } from "../config/tabelas/veiculos.js";

import {

    tabela,

    getRegistros,
    setRegistros,

    getRegistroEditando,
    setRegistroEditando

} from "./veiculos.state.js";


// ============================================================================
// RENDER
// ============================================================================

export function renderizarTabela(acoes) {

    renderTable(

        tabela,

        COLUNAS_VEICULOS,

        getRegistros(),

        acoes

    );

}
