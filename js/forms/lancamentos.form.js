import {

    salvarLancamento,
    atualizarLancamento

} from "../services/lancamentos.js";


import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";


import {

    tratarErro

} from "../utils/lancamentos.helpers.js";


import {

    obterDadosFormulario

} from "./lancamentos.fields.js";


import {

    carregarTabela

} from "../controllers/lancamentos.controller.js";


import {

    preencherDataHoraAtual

} from "../utils/datas.js";


import {

    getRegistroEditando,
    setRegistroEditando

} from "../controllers/lancamentos.state.js";


export async function salvarFormulario(evento, formulario) {

    evento.preventDefault();

    try {

        mostrarLoading();

        const dados =
            obterDadosFormulario(formulario);

        if (getRegistroEditando()) {

            await atualizarLancamento(

                getRegistroEditando(),

                dados

            );

        }

        else {

            await salvarLancamento(dados);

        }

        limparFormulario(formulario);

        setRegistroEditando(null);

        await carregarTabela();

    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}


export function novoFormulario(formulario) {

    setRegistroEditando(null);

    formulario.reset();

    preencherDataHoraAtual(

    formulario.elements["data"],

    formulario.elements["hora"]

);

    document.body.classList.remove("modo-edicao");

}

