export async function carregarTabela(){

    const resposta = await obterLancamentos();

    registros =
        resposta?.dados ??
        resposta;

    renderizarTabela();

}
  

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


export async function editarLancamento(id){

    try {

        const resposta = await obterLancamento(id);

      const registro = resposta?.dados ?? resposta;

        if (!registro) {

            throw new Error("Lançamento não encontrado.");
        }

        registroEditando = registro.ID;
      
        preencherFormulario(registro);

        const titulo = document.querySelector("#tituloFormulario");

        if (titulo) {

            titulo.textContent = "Editar lançamento";
        }

        document.body.classList.add("modo-edicao");

    } catch (erro) {

        console.error("Erro ao carregar lançamento para edição:", erro);

        alert(erro.message ||  "Não foi possível carregar o lançamento.");
    }

}

window.editarLancamento =

    editarLancamento;


export async function removerLancamento(id){

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
