// ============================================================================
// LANÇAMENTOS - CAMPOS
// Painel Frota
// Arquivo: js/controllers/lancamentos.fields.js
// Responsável pela leitura, preenchimento e limpeza do formulário.
// ============================================================================

import {

    campoData,
    campoHora,
    selectEmpregado,
    selectVeiculo,
    selectStatus

} from "./lancamentos.state.js";

import {

    dataParaInput,

    horaParaInput

} from "../utils/datas.js";

// ============================================================================
// OBTER DADOS DO FORMULÁRIO
// ============================================================================

export function obterDadosFormulario(formulario) {

const empregadoOption =
        selectEmpregado.selectedOptions[0];

    const veiculoOption =
        selectVeiculo.selectedOptions[0];

   // const idEmpregado =
   //     empregadoOption?.dataset.id ?? "";

    const idempregado =
        empregadoOption?.value ?? "";

    const empregado =
        empregadoOption?.textContent ?? "";

    //const idVeiculo =
    //    veiculoOption?.dataset.id ?? "";

    const idveiculo =
        veiculoOption?.value ?? "";

    const veiculo =
        veiculoOption?.textContent ?? "";

    //const empregadoSelecionado =
        //selectEmpregado.selectedOptions[0];

    //const veiculoSelecionado =
        //selectVeiculo.selectedOptions[0];

    return {

        "ID Empregado":
        idempregado,

    "ID Veículo":
        idveiculo,

    
        Data:

            campoData.value,

        Hora:

            campoHora.value,

        "Empregado / Matrícula":
        empregado,

    "Veículo":
        veiculo,

        //"ID Empregado":
        //empregadoSelecionado?.dataset.id ?? "",

    //"Empregado / Matrícula":
        //selectEmpregado.value,

    //"ID Veículo":
        //veiculoSelecionado?.dataset.id ?? "",

    //"Veículo":
        //selectVeiculo.value,

        "Passageiro / Setor / Motivo":

            [

                formulario.passageiro?.value,

                formulario.setor?.value,

                formulario.motivo?.value

            ]

            .filter(Boolean)

            .join(" / "),

        Itinerário:

            formulario.itinerario?.value ?? "",

        Status:

            selectStatus.value

    };

}

// ============================================================================
// PREENCHER FORMULÁRIO
// ============================================================================

export function preencherFormulario(

    formulario,

    registro

) {

    if (!registro) return;

    campoData.value =

        dataParaInput(

        registro.Data

    );

    campoHora.value =

        horaParaInput(

        registro.Hora

    );

    selectEmpregado.value =

        registro["ID Empregado"] ?? "";//registro["Empregado / Matrícula"] ?? "";

    selectVeiculo.value =

        registro["ID Veículo"] ?? "";//registro["Veículo"] ?? "";

    selectStatus.value =

        registro.Status ?? "";

    const partes =

        String(

            registro["Passageiro / Setor / Motivo"] ?? ""

        ).split(" / ");

    if (formulario.passageiro) {

        formulario.passageiro.value =

            partes[0] ?? "";

    }

    if (formulario.setor) {

        formulario.setor.value =

            partes[1] ?? "";

    }

    if (formulario.motivo) {

        formulario.motivo.value =

            partes[2] ?? "";

    }

    if (formulario.itinerario) {

        formulario.itinerario.value =

            registro["Itinerário"] ?? "";

    }

}

// ============================================================================
// LIMPAR FORMULÁRIO
// ============================================================================

export function limparFormulario(formulario) {

    formulario.reset();

    campoData.focus();

}
