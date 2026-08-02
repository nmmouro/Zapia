// ============================================================================
// LANÇAMENTOS - EVENTOS
// Painel Frota
// Arquivo: js/controllers/lancamentos.events.js
// ============================================================================

import {
    formulario,
    btnNovo
} from "./lancamentos.state.js";

import {
    salvarFormulario,
    novoLancamento
} from "./lancamentos.form.js";

// ============================================================================
// REGISTRAR EVENTOS
// ============================================================================

export function registrarEventos() {

    registrarEventoFormulario();

    registrarEventoNovo();

}

// ============================================================================
// FORMULÁRIO
// ============================================================================

function registrarEventoFormulario() {

    if (!formulario) return;

    formulario.addEventListener(

        "submit",

        evento =>

            salvarFormulario(

                evento,

                formulario

            )

    );

}

// ============================================================================
// BOTÃO NOVO
// ============================================================================

function registrarEventoNovo() {

    if (!btnNovo) return;

    btnNovo.addEventListener(

        "click",

        novoLancamento

    );

}
