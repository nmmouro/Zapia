// ============================================================================
// DATA AUTOMÁTICA
// ============================================================================

export function preencherDataHoraAtual(){

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
// TRATAMENTO DE ERROS
// ============================================================================

export function tratarErro(erro){

    console.error(erro);

    alert(

        erro.message ||

        "Erro ao processar lançamento."

    );

}
