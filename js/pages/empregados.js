// ============================================================================
// EMPREGAADOS
// Arquivo: js/pages/empregados.js
// ============================================================================

// ================= IMPORTS =================

import {
    COLUNAS_EMPREGADOS
} from "../config/tabelas/empregados.js";


import {

    obterempregados,
    obterempregado,
    salvarempregado,
    atualizarempregado,
    excluirempregado

} from "../services/empregados.js";

import {

    renderTable

} from "../ui/table.js";

import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";

import {

    dataInput,
    dataParaInput

} from "../utils/datas.js";


// ================= ELEMENTOS =================

const formulario =
    document.querySelector("#formEmpregados");

const tabela =
    document.querySelector("#tabelaEmpregados");

const btnNovo =
    document.querySelector("#btnNovo");

const campoEmpregado =
document.querySelector("#empregado");

const campoMatricula =
    document.querySelector("#matricula");

const campoDiretoria =
    document.querySelector("#diretoria");

const campoSetor =
    document.querySelector("#setor");

const campoUsuario =
    document.querySelector("#usuario");

const campoCondicao =
    document.querySelector("#condicao");

const campoStatus =
    document.querySelector("#status");

// ================= VARIÁVEIS =================

let empregados = [];

let registroEditando = null;

// ================= EVENTOS =================

document.addEventListener(

    "DOMContentLoaded",

    init

);

// ================= INIT =================

async function init() {

    try {

       mostrarLoading();
        registrarEventos();
        await carregarTabela();
        esconderLoading();

    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}

// ================= EVENTOS =================

function registrarEventos() {

    formulario.addEventListener(

        "submit",

        salvar

    );

    btnNovo?.addEventListener(

        "click",

        novo
    );

}

// ============================================================================
// LISTAGEM
// ============================================================================

async function carregarTabela() {

    registros =
    await obterempregados();

    if (!Array.isArray(registros)) {

        throw new Error(

            "Resposta inválida ao carregar empregados."
        );
    }

    renderizarTabela();

}

// ============================================================================
// RENDERIZAR TABELA
// ============================================================================

function renderizarTabela() {

    renderTable(

        tabela,
        COLUNAS,
        registros,

        [

            {
                label: "Editar",
                className: "btn-edit",
                onClick:
                registro =>
                editarVeiculo(registro.ID)
           
            },

            {
                label: "Excluir",
                className: "btn-delete",
                onClick:
                registro =>
                removerVeiculo(registro.ID)

            }

        ]

    );

}

// ============================================================================
// NOVO EMPREGADO
// ============================================================================

function novo() {

    registroEditando = null;

    formulario.reset();

    preencherDataAtual();

}


// ============================================================================
// SALVAR / ATUALIZAR EMPREGADOS
// ============================================================================

async function salvar(evento) {

    evento.preventDefault();

    try {

        mostrarLoading();
        
        const dados =

            obterDadosFormulario();

        if (registroEditando) {

            await atualizarempregado(

                registroEditando,

                dados

            );

        }

        else {

            await salvarempregado(

                dados

            );

        }

        formulario.reset();

        preencherDataAtual();

        registroEditando = null;

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
// EDITAR EMPREGADO
// ============================================================================

async function editarempregado(id) {

    try {

        mostrarLoading();

        const resposta =

            await obterempregado(id);

        const registro =

            resposta?.dados ??

            resposta;

        if (!registro) {

            throw new Error(

                "empregado não encontrado."

            );

        }

        registroEditando =

            registro.ID;

        preencherFormulario(

            registro

        );

       const titulo =

            document.querySelector(

                "#tituloFormulario"

            );

        if (titulo) {

            titulo.textContent =

                "Editar empregado";

        }

        document.body.classList.add(

            "modo-edicao"

        );

    }

    catch (erro) {

        console.error(

            "Erro ao carregar veículo para edição:",

            erro

        );

alert(

            erro.message ||

            "Não foi possível carregar o empregado."

        );

    }

}

// ============================================================================
// DISPONIBILIZAR PARA A INTERFACE
// ============================================================================

window.editarEmpregado =

    editarempregado;

// ============================================================================
// EXCLUIR EMPREGADO
// ============================================================================

async function remover(id) {

    if (

        !confirm(

            "Excluir empregado?"

        )

    ) {

        return;

    }

    try {

        mostrarLoading();
        await removerempregado(id);
        await carregarTabela();

    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}



// ================= HELPERS =================

function obterDadosFormulario() {

    return {

        Empregado:

            campoEmpregado?.value,

        Matricula:

            campomatricula?.value,

        Diretoria:

            campodiretoria?.value,

       Setor:

            camposetor?.value,

        Usuario:

            campousuario?.value,

        Condicao:

            campocondicao?.value,

        Status:

            campostatus?.value

    };

}

// ============================================================================
// PREENCHER FORMULÁRIO
// ============================================================================

function preencherFormulario(registro) {

    console.log(

        "Registro recebido para edição:",

        registro

    );

    campoEmpregado.value =

        registro["Empregado"]

        || "";
   

    campoMatricula.value =

        registro["Matricula"]

        || "";

  

    campoDiretoria.value =

        registro["Diretoria"]

        || "";

   

    campoSetor.value =

        registro["Setor"]

        || "";

   

    campoCondicao.value =

        registro["COndicao"]

        || "";

   

    campoStatus.value =

        registro["Status"]

        || "";

}


// ============================================================================
// ATUALIZAR TÍTULO
// ============================================================================

function atualizarTitulo(

    texto

) {

    const titulo =

        document.querySelector(

            "#tituloFormulario"

        );


    if (titulo) {

        titulo.textContent =

            texto;

    }

}


// ================= ERROS =================

function tratarErro(erro) {

   console.error(

        erro

    );


    alert(

        "Erro ao processar empregado."

    );

}
}
}
