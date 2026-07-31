import { dataParaInput } from "../utils/datas.js";


export function obterDadosFormulario(formulario) {

    return {

        Data: formulario.elements["data"].value,

        Placa: formulario.elements["placa"].value.trim(),

        Modelo: formulario.elements["modelo"].value.trim(),

        Marca: formulario.elements["marca"].value.trim(),

        Ano: formulario.elements["ano"].value,

        Cor: formulario.elements["cor"].value.trim(),

        Combustível: formulario.elements["combustivel"].value,

        Status: formulario.elements["status"].value

    };

}

export function preencherFormulario(formulario, veiculo) {

    formulario.elements["data"].value =
        dataParaInput(veiculo.Data) || "";

    formulario.elements["placa"].value =
        veiculo.Placa || "";

    formulario.elements["modelo"].value =
        veiculo.Modelo || "";

    formulario.elements["marca"].value =
        veiculo.Marca || "";

    formulario.elements["ano"].value =
        veiculo.Ano || "";

    formulario.elements["cor"].value =
        veiculo.Cor || "";

    formulario.elements["combustivel"].value =
        veiculo["Combustível"] || "";

    formulario.elements["status"].value =
        veiculo.Status || "";

}
