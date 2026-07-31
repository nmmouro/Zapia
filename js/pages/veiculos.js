// ============================================================================
// VEÍCULOS
// Arquivo: js/pages/veiculos.js
// ============================================================================

import {
    carregarTabela
} from "../controllers/veiculos.controller.js";


import {
    salvarFormulario,
    novoFormulario
} from "../forms/veiculos.form.js";


    document.addEventListener("DOMContentLoaded", async () => {

    const formulario = document.querySelector("#formveiculo");
    const btnNovo = document.querySelector("#btnNovo");

    formulario.addEventListener("submit", (evento) => {

    salvarFormulario(evento, formulario);

});

btnNovo.addEventListener("click", () => {

    novoFormulario(formulario);

});

    await carregarTabela();

});
