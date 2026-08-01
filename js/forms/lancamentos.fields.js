import { dataParaInput } from "../utils/datas.js";

export function obterDadosFormulario(formulario) {

    const empregado =
        formulario.elements["empregado"]
            .selectedOptions[0]?.textContent || "";

    const veiculo =
        formulario.elements["veiculo"]
            .selectedOptions[0]?.textContent || "";

    return {

        Data:
            formulario.elements["data"].value,

        Hora:
            formulario.elements["hora"].value,

        "Empregado / Matrícula":
            empregado,

        Veículo:
            veiculo,

        "Passageiro / Setor / Motivo":
            [
                formulario.elements["passageiro"].value,
                formulario.elements["setor"].value,
                formulario.elements["motivo"].value
            ]
            .filter(Boolean)
            .join(" / "),

        Itinerário:
            formulario.elements["itinerario"].value,

        Status:
            formulario.elements["status"].value

    };

}

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
