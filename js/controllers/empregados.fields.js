// ============================================================================
// EMPREGADOS - CAMPOS
// Painel Frota
// Arquivo: js/controllers/empregados.fields.js
// Responsável pela leitura, preenchimento e limpeza do formulário.
// ============================================================================

import {

    campoData,
    campoFoto,
    campoEmpregado,
    campoMatricula,
    campoDiretoria,
    campoSetor,
    campoUsuario,
    campoCondicao,
    campoStatus

} from "./empregados.state.js";

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

        Foto:

            campoFoto.value
                .trim(),

        Empregado:

            campoEmpregado.value
                .trim()
                .toUpperCase(),

        Matrícula:

            campoMatricula.value
                .trim()
                .toUpperCase(),

        Diretoria:

            campoDiretoria.value
                .trim()
                .toUpperCase(),

        Setor:

            campoSetor.value
                .trim()
                .toUpperCase(),

        Usuário:

            campoUsuario.value
                .trim()
                .toUpperCase(),

        Condição:

            campoCondicao.value,

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
    
    campoFoto.value =

        registro.Foto ?? "";

    campoEmpregado.value =

        registro.Empregado ?? "";

    campoMatricula.value =

        registro["Matrícula"] ??
        registro.Matricula ??
        "";

    campoDiretoria.value =

        registro.Diretoria ?? "";

    campoSetor.value =

        registro.Setor ?? "";

    campoUsuario.value =

        registro["Usuário"] ??
        registro.Usuario ??
        "";

    campoCondicao.value =

        registro["Condição"] ??
        registro.Condicao ??
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
