import {
    carregarTabela
} from "../controllers/veiculos.controller.js";

import {
    salvarFormulario,
    novoFormulario
} from "../forms/veiculos.form.js";

document.addEventListener("DOMContentLoaded", async () => {

    const formulario = document.querySelector("#formVeiculo");
    const btnNovo = document.querySelector("#btnNovo");

    formulario.addEventListener("submit", salvarFormulario);

    btnNovo.addEventListener("click", () => {

        novoFormulario(formulario);

    });

    await carregarTabela();

});
