import { dataParaInput } from "../utils/datas.js";


export function obterDadosFormulario(formulario) {

    return {

        Data:  campoData.value,

        Hora:  campoHora.value,

        "Empregado / Matrícula":
            selectEmpregado.value,

        Veículo:
            selectVeiculo.value,

        "Passageiro / Setor / Motivo":
            [
                formulario.passageiro?.value,
                formulario.setor?.value,
                formulario.motivo?.value
            ]
            .filter(Boolean)
            .join(" / "),

        Itinerário:
            formulario.itinerario?.value || "",

        Status:
            formulario.status.value
        
    };

}


import { dataParaInput } from "../utils/datas.js";

export function preencherFormulario(formulario, lancamento) {

    formulario.elements["data"].value =
        dataParaInput(lancamento.Data) || "";

    formulario.elements["hora"].value =
        lancamento.Hora || "";

    formulario.elements["empregado"].value =
        lancamento["Empregado / Matrícula"] || "";

    formulario.elements["veiculo"].value =
        lancamento["Veículo"] || "";

    formulario.elements["passageiro"].value =
        lancamento["Passageiro"] || "";

    formulario.elements["setor"].value =
        lancamento["Setor"] || "";

    formulario.elements["motivo"].value =
        lancamento["Motivo"] || "";

    formulario.elements["itinerario"].value =
        lancamento["Itinerário"] || "";

    formulario.elements["status"].value =
        lancamento.Status || "";

}
