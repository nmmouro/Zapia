// ============================================================================
// LOADING UI
// Painel Frota
// Arquivo: js/ui/loading.js
//
// Controle global do indicador de carregamento
// ============================================================================



// ============================================================================
// ELEMENTO
// ============================================================================


function getLoadingElement(){


    return document.querySelector(

        "#loading"

    );


}




// ============================================================================
// MOSTRAR LOADING
// ============================================================================


export function mostrarLoading(){


    const loading =
    getLoadingElement();



    if(!loading) return;



    loading.hidden = false;



}




// ============================================================================
// ESCONDER LOADING
// ============================================================================


export function esconderLoading(){


    const loading =
    getLoadingElement();



    if(!loading) return;



    loading.hidden = true;



}




// ============================================================================
// ALTERAR ESTADO
// ============================================================================


export function toggleLoading(ativo){


    if(ativo){


        mostrarLoading();


    }
    else{


        esconderLoading();


    }


}




// ============================================================================
// EXECUTAR COM LOADING AUTOMÁTICO
// ============================================================================


export async function executarComLoading(

    callback

){


    try{


        mostrarLoading();



        return await callback();



    }
    catch(erro){


        throw erro;


    }
    finally{


        esconderLoading();


    }


}
