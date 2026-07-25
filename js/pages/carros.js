// ============================================================================
// VEÍCULOS
// Arquivo: js/pages/veiculos.js
// ============================================================================


// ============================================================================
// IMPORTS
// ============================================================================

import {

    obterVeiculos,

    salvarVeiculo,

    atualizarVeiculo,

    excluirVeiculo

} from "../services/carros.js";


// ============================================================================
// ELEMENTOS
// ============================================================================

const grid =

    document.querySelector(

        "#gridVeiculos"

    );


const modal =

    document.querySelector(

        "#modalVeiculo"

    );


const form =

    document.querySelector(

        "#formVeiculo"

    );


const busca =

    document.querySelector(

        "#buscarVeiculo"

    );


const filtroStatus =

    document.querySelector(

        "#filtroStatus"

    );


const btnNovo =

    document.querySelector(

        "#btnNovoVeiculo"

    );


const btnFechar =

    document.querySelector(

        "#btnFecharModal"

    );


const btnCancelar =

    document.querySelector(

        "#btnCancelar"

    );


// ============================================================================
// ESTADO
// ============================================================================

let veiculos = [];

let veiculoEditando = null;


// ============================================================================
// CARREGAR
// ============================================================================

async function carregarDados() {

    try {

        const resposta =

            await obterVeiculos();


        veiculos =

            resposta.dados ?? resposta;


        renderizar();

        atualizarResumo();


    } catch (erro) {

        console.error(

            "Erro ao carregar veículos:",

            erro

        );

    }

}


// ============================================================================
// RENDERIZAR
// ============================================================================

function renderizar() {

    const termo =

        busca.value

            .trim()

            .toLowerCase();


    const status =

        filtroStatus.value;


    const filtrados =

        veiculos.filter(

            veiculo => {


                const texto =

                    [

                        veiculo.Placa,

                        veiculo.Modelo,

                        veiculo.Marca

                    ]

                    .join(" ")

                    .toLowerCase();


                const correspondeBusca =

                    !termo ||

                    texto.includes(termo);


                const correspondeStatus =

                    !status ||

                    veiculo.Status === status;


                return (

                    correspondeBusca &&

                    correspondeStatus

                );

            }

        );


    grid.innerHTML = "";


    document

        .querySelector(

            "#veiculosVazio"

        )

        .hidden =

            filtrados.length > 0;


    filtrados.forEach(

        veiculo => {

            grid.appendChild(

                criarCard(

                    veiculo

                )

            );

        }

    );

}


// ============================================================================
// CRIAR CARD
// ============================================================================

function criarCard(veiculo) {

    const card =

        document.createElement(

            "article"

        );


    card.className =

        "veiculo-card";


    const foto =

        veiculo.Foto || "";


    card.innerHTML = `

        <div class="veiculo-foto">

            ${
                foto

                ? `

                    <img
                        src="${foto}"
                        alt="${veiculo.Modelo || "Veículo"}"
                        loading="lazy"
                    >

                `

                : `

                    <div class="veiculo-foto-placeholder">

                        🚙

                    </div>

                `
            }


            <span class="veiculo-status">

                ${veiculo.Status || "SEM STATUS"}

            </span>

        </div>


        <div class="veiculo-conteudo">


            <div class="veiculo-placa">

                ${veiculo.Placa || "-"}

            </div>


            <h2 class="veiculo-nome">

                ${veiculo.Marca || ""}

                ${veiculo.Modelo || ""}

            </h2>


            <div class="veiculo-info">


                <div class="veiculo-info-item">

                    <span>Ano</span>

                    <strong>

                        ${veiculo.Ano || "-"}

                    </strong>

                </div>


                <div class="veiculo-info-item">

                    <span>Cor</span>

                    <strong>

                        ${veiculo.Cor || "-"}

                    </strong>

                </div>


                <div class="veiculo-info-item">

                    <span>Combustível</span>

                    <strong>

                        ${veiculo.Combustivel || "-"}

                    </strong>

                </div>


                <div class="veiculo-info-item">

                    <span>ID</span>

                    <strong>

                        ${veiculo.ID || "-"}

                    </strong>

                </div>


            </div>


            <div class="veiculo-acoes">


                <button
                    class="btn btn-secondary"
                    data-acao="editar"
                    data-id="${veiculo.ID}"
                >

                    Editar

                </button>


                <button
                    class="btn btn-danger"
                    data-acao="excluir"
                    data-id="${veiculo.ID}"
                >

                    Excluir

                </button>


            </div>

        </div>

    `;


    return card;

}


// ============================================================================
// RESUMO
// ============================================================================

function atualizarResumo() {

    document.querySelector(

        "#totalVeiculos"

    ).textContent =

        veiculos.length;


    document.querySelector(

        "#veiculosAtivos"

    ).textContent =

        veiculos.filter(

            item =>

                item.Status === "ATIVO"

        ).length;


    document.querySelector(

        "#veiculosManutencao"

    ).textContent =

        veiculos.filter(

            item =>

                item.Status === "MANUTENÇÃO"

        ).length;


    document.querySelector(

        "#veiculosInativos"

    ).textContent =

        veiculos.filter(

            item =>

                item.Status === "INATIVO"

        ).length;

}


// ============================================================================
// ABRIR NOVO
// ============================================================================

function novoVeiculo() {

    veiculoEditando = null;


    form.reset();


    document.querySelector(

        "#veiculoId"

    ).value = "";


    document.querySelector(

        "#tituloModal"

    ).textContent =

        "Novo veículo";


    modal.showModal();

}


// ============================================================================
// EDITAR
// ============================================================================

function editarVeiculo(id) {

    const veiculo =

        veiculos.find(

            item =>

                String(item.ID) ===

                String(id)

        );


    if (!veiculo) {

        return;

    }


    veiculoEditando = veiculo;


    document.querySelector(

        "#veiculoId"

    ).value =

        veiculo.ID || "";


    document.querySelector(

        "#placa"

    ).value =

        veiculo.Placa || "";


    document.querySelector(

        "#modelo"

    ).value =

        veiculo.Modelo || "";


    document.querySelector(

        "#marca"

    ).value =

        veiculo.Marca || "";


    document.querySelector(

        "#ano"

    ).value =

        veiculo.Ano || "";


    document.querySelector(

        "#cor"

    ).value =

        veiculo.Cor || "";


    document.querySelector(

        "#combustivel"

    ).value =

        veiculo.Combustivel || "";


    document.querySelector(

        "#status"

    ).value =

        veiculo.Status || "ATIVO";


    document.querySelector(

        "#tituloModal"

    ).textContent =

        "Editar veículo";


    modal.showModal();

}


// ============================================================================
// SALVAR
// ============================================================================

async function salvar() {

    const dados = {

        Placa:

            document.querySelector(

                "#placa"

            ).value.trim(),


        Modelo:

            document.querySelector(

                "#modelo"

            ).value.trim(),


        Marca:

            document.querySelector(

                "#marca"

            ).value.trim(),


        Ano:

            document.querySelector(

                "#ano"

            ).value.trim(),


        Cor:

            document.querySelector(

                "#cor"

            ).value.trim(),


        Combustivel:

            document.querySelector(

                "#combustivel"

            ).value,


        Status:

            document.querySelector(

                "#status"

            ).value

    };


    try {


        if (veiculoEditando) {

            await atualizarVeiculo(

                veiculoEditando.ID,

                dados

            );

        } else {

            await salvarVeiculo(

                dados

            );

        }


        modal.close();


        await carregarDados();


    } catch (erro) {

        console.error(

            "Erro ao salvar veículo:",

            erro

        );

        alert(

            erro.message

        );

    }

}


// ============================================================================
// EXCLUIR
// ============================================================================

async function excluir(id) {

    const confirmar =

        confirm(

            "Deseja realmente excluir este veículo?"

        );


    if (!confirmar) {

        return;

    }


    try {

        await excluirVeiculo(

            id

        );


        await carregarDados();


    } catch (erro) {

        console.error(

            "Erro ao excluir veículo:",

            erro

        );

        alert(

            erro.message

        );

    }

}


// ============================================================================
// EVENTOS
// ============================================================================

btnNovo.addEventListener(

    "click",

    novoVeiculo

);


btnFechar.addEventListener(

    "click",

    () => modal.close()

);


btnCancelar.addEventListener(

    "click",

    () => modal.close()

);


form.addEventListener(

    "submit",

    event => {

        event.preventDefault();

        salvar();

    }

);


busca.addEventListener(

    "input",

    renderizar

);


filtroStatus.addEventListener(

    "change",

    renderizar

);


grid.addEventListener(

    "click",

    event => {


        const botao =

            event.target.closest(

                "button[data-acao]"

            );


        if (!botao) {

            return;

        }


        const acao =

            botao.dataset.acao;


        const id =

            botao.dataset.id;


        if (

            acao ===

            "editar"

        ) {

            editarVeiculo(id);

        }


        if (

            acao ===

            "excluir"

        ) {

            excluir(id);

        }

    }

);


// ============================================================================
// INIT
// ============================================================================

document.addEventListener(

    "DOMContentLoaded",

    carregarDados

);
