export async function salvarFormulario(evento){

    evento.preventDefault();

    try {

        mostrarLoading();

        const dados =  obterDadosFormulario();
       
        if (registroEditando) {

            await atualizarVeiculo(registroEditando, dados);
        }
 
        else {

            await salvarVeiculo(dados);
        }

        formulario.reset();

        preencherDataAtual();

        registroEditando =  null;

        document.body.classList.remove("modo-edicao");

        await carregarTabela();
    }

    catch (erro) {

        tratarErro(erro);
    }

    finally {
      
        esconderLoading();
    }
}

  
export function novoFormulario(){

    registroEditando =  null;

    formulario.reset();

    preencherDataAtual();

    document.body.classList.remove("modo-edicao");
}


function obterDadosFormulario(){

    return {

        Data:
            formulario.elements["data"].value,

        Placa:
            formulario.elements["placa"].value.trim(),

        Modelo:
            formulario.elements["modelo"].value.trim(),

        Marca:
            formulario.elements["marca"].value.trim(),

        Ano:
            formulario.elements["ano"].value,

        Cor:
            formulario.elements["cor"].value.trim(),

        Combustível:
            formulario.elements["combustivel"].value,

        Status:
            formulario.elements["status"].value

    };

}
  

export function preencherFormulario(veiculo){

    campoData.value = dataParaInput(veiculo["Data"]) || "";

    campoPlaca.value = veiculo["Placa"]  || "";

   campoModelo.value = veiculo["Modelo"] || "";
    
    campoMarca.value = veiculo["Marca"] || "";

    campoAno.value = veiculo["Ano"] || "";

    campoCor.value = veiculo["Cor"] || "";

    campoCombustivel.value = veiculo["Combustível"] || "";

    campoStatus.value = veiculo["Status"]  || "";

}
