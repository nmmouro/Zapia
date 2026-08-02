// ============================================================================
// EMPREGADOS - EVENTOS
// Painel Frota
// Arquivo: js/controllers/empregados.events.js
// Responsável pelo registro dos eventos da página.
// ============================================================================

import {

    novoEmpregado,

    salvarFormulario

} from "./empregados.form.js";

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

                novoEmpregado(

                    formulario

                )

        );

    }

}
