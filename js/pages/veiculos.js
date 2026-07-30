import {

    carregarTabela

} from "../controllers/veiculos.controller.js";

document.addEventListener(

    "DOMContentLoaded",

    async () => {

        await carregarTabela();

    }

);
