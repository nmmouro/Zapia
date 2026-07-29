// ====================================================================
// RECARREGAR TABELA
// ====================================================================

export async function carregarTabela(){

    const resposta = await obterVeiculos();

    registros =  resposta?.dados ?? resposta;

    renderizarTabela();
}
  

// ============================================================================
// RENDERIZAR TABELA
// ============================================================================

function renderizarTabela(){

    renderTable(

        tabela,
        COLUNAS_VEICULOS,
        registros,
        [
            {
                label: "Editar",
                className: "btn-edit",
                onClick:

                    registro => editarVeiculo(registro.ID)

            },

            {
                label: "Excluir",
                className: "btn-delete",
                onClick:

                    registro => remover(registro.ID)
            }
        ]
    );
}


// ============================================================================
// EDITAR VEÍCULO
// ============================================================================

export async function editarVeiculo(id){

    try {

        const resposta =

            await obterVeiculo(id);

        const registro = resposta?.dados ?? resposta;

        if (!registro) {

            throw new Error("Veículo não encontrado.");
        }

        registroEditando = registro.ID;

        preencherFormulario( registro);

        const titulo = document.querySelector("#tituloFormulario");

        if (titulo) {

            titulo.textContent = "Editar veículo";
        }

      document.body.classList.add("modo-edicao");
    }

    catch (erro) {

        console.error("Erro ao carregar veículo para edição:", erro);

        alert(erro.message || "Não foi possível carregar o veículo.");
    }
}

window.editarVeiculo =

    editarVeiculo;


// ============================================================================
// EXCLUIR VEÍCULO
// ============================================================================

export async function removerVeiculo(id){

    if (

        !confirm("Excluir veículo?")

    ) {
        return;
    }

    try {
 
        mostrarLoading();
        await excluirVeiculo(id);
        await carregarTabela();
    }

    catch (erro) {

        tratarErro(erro);
    }

    finally {

        esconderLoading();
    }
}
