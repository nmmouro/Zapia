export async function salvarFormulario(evento){

    evento.preventDefault();

    try{

        mostrarLoading();
        
        const dados = obterDadosFormulario();

        if(registroEditando){

            await atualizarLancamento(registroEditando, dados);
        }
            
        else{

            await salvarLancamento(dados);

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


export function novoFormulario(){

    registroEditando = null;

    formulario.reset();

    preencherDataHoraAtual();

}
  

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


export function preencherFormulario(registro){


    campoData.value = dataParaInput(registro["Data"]) || "";


  
    campoHora.value = horaParaInput(registro["Hora"]) || "";


  selectEmpregado.value = registro["Empregado / Matrícula"] || "";
    

  selectVeiculo.value = registro["Veículo"] || "";

   
    const partes = String(registro["Passageiro / Setor / Motivo"]  || "").split(" / ");


    formulario.passageiro.value = partes[0] || "";


    formulario.setor.value = partes[1] || "";


    formulario.motivo.value = partes[2] || "";

   
    formulario.itinerario.value = registro["Itinerário"] || "";

   
    formulario.status.value = registro["Status"] || "";

}
