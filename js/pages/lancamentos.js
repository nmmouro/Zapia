// ============================================================================
// LANÇAMENTOS
// Arquivo: js/pages/lancamentos.js
// ============================================================================

import {
    carregarTabela,
    carregarVeiculos,
    carregarEmpregados
} from "../controllers/lancamentos.controller.js";


import {
    salvarFormulario,
    novoFormulario
} from "../forms/lancamentos.form.js";


    document.addEventListener("DOMContentLoaded", async () => {

    const formulario = document.querySelector("#formlancamento");
    const btnNovo = document.querySelector("#btnNovo");

    formulario.addEventListener("submit", (evento) => {

    salvarFormulario(evento, formulario);

});

btnNovo.addEventListener("click", () => {

    novoFormulario(formulario);

});

    await carregarTabela();
    await carregarVeiculos();
    await carregarEmpregados();

});
