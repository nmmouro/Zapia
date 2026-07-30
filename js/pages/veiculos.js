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

    console.log(formulario);
    console.log(btnNovo);

    

    formulario.addEventListener("submit", salvarFormulario);

    btnNovo.addEventListener("click", () => {

        novoFormulario(formulario);

    });

    await carregarTabela();

});
