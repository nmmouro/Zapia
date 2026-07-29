// ============================================================================
// DATA AUTOMÁTICA
// ============================================================================

import { dataInput } from "../utils/datas.js";

export function preencherDataAtual(){

    const campoData = document.getElementById("data");

    if (!campoData){

        return;

    }

    campoData.value = dataInput();

}


// ============================================================================
// TRATAMENTO DE ERROS
// ============================================================================

export function tratarErro(erro){

    console.error(erro);

    alert(erro?.message ||  "Erro ao processar veículo.");

}
