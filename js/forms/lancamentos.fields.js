import { dataParaInput } from "../utils/datas.js";


export function obterDadosFormulario(formulario) {

    return {

        Data: formulario.elements["data"].value,

        Hora: formulario.elements["hora"].value,

        "Empregado / Matrícula": formulario.elements["empregado"].value,

        Veículo:  formulario.elements["veiculo"].value,

        "Passageiro / Setor / Motivo":
            [
                formulario.elements["passageiro"].value,
                formulario.elements["setor"].value,
                formulario.elements["motivo"].value
            ]
            .filter(Boolean)
            .join(" / "),

        Itinerário: formulario.elements["itinerario"].value,

        Status: formulario.elements["status"].value

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
