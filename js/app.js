// ============================================================================
// APP
// Arquivo: js/app.js
// Funções globais da aplicação
// ============================================================================


// ================= IMPORTS =================

import {

    preencherDataHoraAtual

} from "./utils/datas.js";

import {

    iniciarFullscreen

} from "./utils/fullscreen.js";


// ================= INIT =================

document.addEventListener(

    "DOMContentLoaded",

    iniciarAplicacao

);


// ================= APLICAÇÃO =================

function iniciarAplicacao(){


    iniciarRelogio();


    iniciarFullscreen();


    console.log(

        "Painel Frota iniciado."

    );


}
