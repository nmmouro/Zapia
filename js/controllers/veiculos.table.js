import { renderTable } from "../ui/table.js";

import { COLUNAS_VEICULOS } from "../config/tabelas/veiculos.js";

import {

    tabela,

    getRegistros,
    setRegistros,

    getRegistroEditando,
    setRegistroEditando

} from "./veiculos.state.js";

import {
    editarVeiculo,
    removerVeiculo
} from "./veiculos.controller.js";


export function renderizarTabela() {

    renderTable(

        tabela,
        COLUNAS_VEICULOS,
        registros,

        [
            {
                label: "Editar",
                className: "btn-edit",
                onClick: registro => editarVeiculo(registro.ID)
            },

            {
                label: "Excluir",
                className: "btn-delete",
                onClick: registro => removerVeiculo(registro.ID)
            }
        ]

    );

}
