// ============================================================================
// LANÇAMENTOS
// Arquivo: js/pages/lancamentos.js
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================

import {
    COLUNAS_LANCAMENTOS
} from "../config/tabelas/lancamentos.js";


import {

    obterLancamentos,
    obterLancamento,
    salvarLancamento,
    atualizarLancamento,
    excluirLancamento

} from "../services/lancamentos.js";


import {

    obterVeiculos

} from "../services/veiculos.js";


import {

    obterEmpregados

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
    dataParaInput,
    horaInput,
    horaParaInput

} from "../utils/datas.js";

import {

    preencherSelect

} from "../utils/formulario.js";


// ============================================================================
// ELEMENTOS
// ============================================================================

const formulario =
document.querySelector("#formLancamento");

const tabela =
document.querySelector("#tabelaLancamentos");

const btnNovo =
document.querySelector("#btnNovo");

const campoData =
document.querySelector("#data");

const campoHora =
document.querySelector("#hora");

const selectVeiculo =
document.querySelector("#veiculo");

const selectEmpregado =
document.querySelector("#empregado");

const selectStatus =
document.querySelector("#status");

// ============================================================================
// CONFIGURAÇÃO DA TABELA
// ============================================================================

let registros = [];

let registroEditando = null;

// ============================================================================
// INICIALIZAÇÃO
// ============================================================================

document.addEventListener(

"DOMContentLoaded",

init

);


async function init(){

    try{

        mostrarLoading();
        preencherDataHoraAtual();
        registrarEventos();
        await carregarVeiculos();
        await carregarEmpregados();
        await carregarTabela();
        esconderLoading();

    }
    catch(erro){

        tratarErro(erro);
    }
    finally{

        esconderLoading();

    }

}

// ============================================================================
// EVENTOS
// ============================================================================

function registrarEventos(){

    formulario?.addEventListener(

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

    const resposta = await obterLancamentos();

    registros =
        resposta?.dados ??
        resposta;

    renderizarTabela();

}

// ============================================================================
// RENDER
// ============================================================================


function renderizarTabela(){

    renderTable(
       
        tabela,
        COLUNAS_LANCAMENTOS,
        registros,
        [

            {
                label:"Editar",
                className:"btn-edit",
                onClick:
                registro =>
                editarLancamento(registro.ID)
            },

            {
                label:"Excluir",
                className:"btn-delete",
                onClick:
                registro =>
                remover(registro.ID)
            }
       ]
    );
}


// ============================================================================
// EDITAR LANÇAMENTO
// ============================================================================

async function editarLancamento(id) {

    try {

        // ====================================================================
        // BUSCAR LANÇAMENTO COMPLETO NA API
        // ====================================================================

        const resposta =

            await obterLancamento(id);


        // ====================================================================
        // NORMALIZAR RESPOSTA
        // ====================================================================

        const registro =

            resposta?.dados ??

            resposta;


        // ====================================================================
        // VALIDAR REGISTRO
        // ====================================================================

        if (!registro) {

            throw new Error(

                "Lançamento não encontrado."

            );

        }


        // ====================================================================
        // DEFINIR REGISTRO EM EDIÇÃO
        // ====================================================================

        registroEditando =

            registro.ID;


        // ====================================================================
        // PREENCHER FORMULÁRIO
        // ====================================================================

        preencherFormulario(

            registro

        );


        // ====================================================================
        // ATUALIZAR INTERFACE
        // ====================================================================

        const titulo =

            document.querySelector(

                "#tituloFormulario"

            );


        if (titulo) {

            titulo.textContent =

                "Editar lançamento";

        }


        document.body.classList.add(

            "modo-edicao"

        );


    } catch (erro) {

        console.error(

            "Erro ao carregar lançamento para edição:",

            erro

        );


        alert(

            erro.message ||

            "Não foi possível carregar o lançamento."

        );

    }

}


window.editarLancamento =

    editarLancamento;


// ============================================================================
// SALVAR
// ============================================================================

async function salvar(evento){

    evento.preventDefault();

    try{

        mostrarLoading();
        const dados =
        obterDadosFormulario();

        if(registroEditando){

            await atualizarLancamento(

                registroEditando,
                dados
            );

        }
        else{

            await salvarLancamento(
                dados

            );

        }


        formulario.reset();

        preencherDataHoraAtual();

        registroEditando = null;

        await carregarTabela();

    }
    catch(erro){

        tratarErro(erro);

    }
    finally{

        esconderLoading();

    }

}


// ============================================================================
// EXCLUIR
// ============================================================================

async function remover(id){

    if(!confirm("Excluir lançamento?")) {
        return;
    }

    try{

        mostrarLoading();

       await excluirLancamento(id);

        await carregarTabela();

    }
    catch(erro){

        tratarErro(erro);

    }
    finally{

        esconderLoading();

    }

}


// ============================================================================
// NOVO
// ============================================================================

function novo(){

    registroEditando = null;

    formulario.reset();

    preencherDataHoraAtual();

}


// ============================================================================
// FORMULÁRIO
// ============================================================================

function obterDadosFormulario() {

    return {

        Data:
            campoData.value,

        Hora:
            campoHora.value,

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

// ============================================================
// PREENCHER FORMULÁRIO
// ============================================================

function preencherFormulario(registro) {

    console.log(
        "Registro recebido para edição:",
        registro
    );


    // ============================================================
    // DATA
    // ============================================================

    campoData.value =

        dataParaInput(

            registro["Data"]

        ) || "";


    // ============================================================
    // HORA
    // ============================================================

    campoHora.value =

        horaParaInput(

            registro["Hora"]

        ) || "";


    // ============================================================
    // EMPREGADO / MATRÍCULA
    // ============================================================

    selectEmpregado.value =

        registro["Empregado / Matrícula"]

        || "";


    // ============================================================
    // VEÍCULO
    // ============================================================

    selectVeiculo.value =

        registro["Veículo"]

        || "";


    // ============================================================
    // PASSAGEIRO / SETOR / MOTIVO
    // ============================================================

    const partes = String(

        registro["Passageiro / Setor / Motivo"]

        || ""

    )

    .split(" / ");


    formulario.passageiro.value =

        partes[0]

        || "";


    formulario.setor.value =

        partes[1]

        || "";


    formulario.motivo.value =

        partes[2]

        || "";


    // ============================================================
    // ITINERÁRIO
    // ============================================================

    formulario.itinerario.value =

        registro["Itinerário"]

        || "";


    // ============================================================
    // STATUS
    // ============================================================

    formulario.status.value =

        registro["Status"]

        || "";

}

// ============================================================================
// CARREGAR VEÍCULOS
// ============================================================================

async function carregarVeiculos() {

    const resposta =

        await obterVeiculos();

    const lista =

        resposta.dados ?? resposta;

    if (!Array.isArray(lista)) {

        throw new Error(

            "Resposta inválida ao carregar veículos."

        );

    }

    selectVeiculo.innerHTML = `

        <option value="">

            Selecione o veículo

        </option>

    `;

    lista.forEach(item => {

        const option =

            document.createElement(

                "option"

            );

        option.value =

            item.Placa || "";


        option.textContent =

            `${item.Placa || ""} - ${item.Modelo || ""}`;


        selectVeiculo.appendChild(

            option

        );

    });

}


// ============================================================================
// CARREGAR EMPREGADOS
// ============================================================================

async function carregarEmpregados() {

    const resposta =

        await obterEmpregados();


    const lista =

        resposta?.dados ??

        resposta;


    if (!Array.isArray(lista)) {

        throw new Error(

            "Resposta inválida ao carregar empregados."

        );

    }


    selectEmpregado.innerHTML = `

        <option value="">

            Selecione o empregado

        </option>

    `;


    lista.forEach(item => {

        const empregado =

            item["Empregado"] ?? "";


        const matricula =

            item["Matrícula"] ?? "";


        const valor =

            [

                empregado,

                matricula

            ]

            .filter(Boolean)

            .join(" / ");


        const option =

            document.createElement(

                "option"

            );


        option.value = valor;


        option.textContent = valor;


        selectEmpregado.appendChild(

            option

        );

    });

}

// ============================================================================
// DATA / HORA AUTOMÁTICA
// ============================================================================

function preencherDataHoraAtual(){

    const data =
        document.querySelector("#data");

    const hora =
        document.querySelector("#hora");


    if(data){

        data.value =

            dataInput();

    }


    if(hora){

        hora.value =

            horaInput();
    }

}


// ============================================================================
// ERROS
// ============================================================================

function tratarErro(erro){


    console.error(erro);

    alert(

        erro.message ||

        "Erro ao processar lançamento."

    );

}
