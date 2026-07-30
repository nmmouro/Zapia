

// ============================================================================
// RENDER
// ============================================================================

export function renderizarTabela() {

    renderTable(

        tabela,

        COLUNAS_LANCAMENTOS,

        registros,

        [

            {

                label: "Editar",

                className: "btn-edit",

                onClick:

                    registro => editarLancamento(registro.ID)

            },

            {

                label: "Excluir",

                className: "btn-delete",

                onClick:

                    registro => removerLancamento(registro.ID)

            }

        ]

    );

}
