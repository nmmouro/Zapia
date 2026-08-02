// ============================================================================
// VEÍCULOS - EVENTOS
// Painel Frota
// Arquivo: js/controllers/veiculos.events.js
// Responsável pelo registro dos eventos da página.
// ============================================================================

import {

    novoVeiculo,

    salvarFormulario

} from "./veiculos.form.js";

// ============================================================================
// REGISTRAR EVENTOS
// ============================================================================

export function registrarEventos(

    formulario,

    btnNovo

) {

    if (formulario) {

        formulario.addEventListener(

            "submit",

            evento =>

                salvarFormulario(

                    evento,

                    formulario

                )

        );

    }

    if (btnNovo) {

        btnNovo.addEventListener(

            "click",

            () =>

                novoVeiculo(

                    formulario

                )

        );

    }

}
