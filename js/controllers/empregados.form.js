// ============================================================================
// EMPREGADOS - FORMULÁRIO
// Painel Frota
// Arquivo: js/controllers/empregados.form.js
// Responsável pelas ações do formulário.
// ============================================================================

import {

    obterEmpregado,
    salvarEmpregado,
    atualizarEmpregado

} from "../services/empregados.js";

import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";

import {

    tratarErro

} from "../utils/errors.js";

import {

    obterDadosFormulario,
    preencherFormulario,
    limparFormulario

} from "./empregados.fields.js";

import {

    carregarTabela

} from "./empregados.helpers.js";

import {

    getRegistroEditando,
    setRegistroEditando,
    tituloFormulario

} from "./empregados.state.js";


// ============================================================================
// EDITAR EMPREGADO
// ============================================================================

export async function editarEmpregado(id) {

    try {

        mostrarLoading();

        const registro =

            await obterEmpregado(id);

      if (!registro) {

            throw new Error(
                "Empregado não encontrado."
            );

      }

        preencherFormulario(registro);

        setRegistroEditando(

            registro.ID

        );


        if (tituloFormulario) {

            tituloFormulario.textContent =
                "Editar empregado";

        }

        document.body.classList.add(
            "modo-edicao"
        );

    }


    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}



// ============================================================================
// SALVAR FORMULÁRIO
// ============================================================================

export async function salvarFormulario(

    evento,

    formulario

) {

    evento.preventDefault();

    try {

        mostrarLoading();

        const dados =
            obterDadosFormulario();

        const id =
            getRegistroEditando();

        if (id) {

            await atualizarEmpregado(

                id,

                dados

            );

        }

        else {

            await salvarEmpregado(

                dados

            );

        }

            novoEmpregado(

              formulario

        );
      await carregarTabela();

    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}




// ============================================================================
// NOVO EMPREGADO
// ============================================================================

export function novoEmpregado(

    formulario

) {

    limparFormulario(

        formulario

    );

    setRegistroEditando(

        null

    );

    if (tituloFormulario) {

        tituloFormulario.textContent =

            "Novo empregado";

    }

    document.body.classList.remove(

        "modo-edicao"

    );

}
