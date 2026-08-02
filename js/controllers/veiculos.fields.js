// ============================================================================
// VEÍCULOS - CAMPOS
// Painel Frota
// Arquivo: js/controllers/veiculos.fields.js
// Responsável pela leitura, preenchimento e limpeza do formulário.
// ============================================================================

import {

    campoData,
    campoPlaca,
    campoModelo,
    campoMarca,
    campoAno,
    campoCombustivel,
    campoKm,
    campoStatus

} from "./veiculos.state.js";

import {

    dataParaInput,

    horaParaInput

} from "../utils/datas.js";

// ============================================================================
// OBTER DADOS DO FORMULÁRIO
// ============================================================================

export function obterDadosFormulario() {

    return {

        Data:

            campoData.value,

        Placa:

            campoPlaca.value
                .trim()
                .toUpperCase(),

        Modelo:

            campoModelo.value
                .trim()
                .toUpperCase(),

        Marca:

            campoMarca.value
                .trim()
                .toUpperCase(),

        Ano:

            campoAno.value,

        Combustível:

            campoCombustivel.value,

        KM:

            campoKm.value,

        Status:

            campoStatus.value

    };

}

// ============================================================================
// PREENCHER FORMULÁRIO
// ============================================================================

export function preencherFormulario(registro) {

    if (!registro) return;

    campoData.value =

        dataParaInput(

        registro.Data

    );

    campoPlaca.value =

        registro.Placa ?? "";

    campoModelo.value =

        registro.Modelo ?? "";

    campoMarca.value =

        registro.Marca ?? "";

    campoAno.value =

        registro.Ano ?? "";

    campoCombustivel.value =

        registro["Combustível"] ??
        registro.Combustivel ??
        "";

    campoKm.value =

        registro.KM ??
        registro.Km ??
        "";

    campoStatus.value =

        registro.Status ?? "";

}

// ============================================================================
// LIMPAR FORMULÁRIO
// ============================================================================

export function limparFormulario(formulario) {

    formulario.reset();

    campoData.focus();

}
