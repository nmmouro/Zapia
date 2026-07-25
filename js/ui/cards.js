// ============================================================================
// CARDS UI
// Painel Frota
// Arquivo: js/ui/cards.js
//
// Gerenciamento de renderização de cards
// ============================================================================



// ============================================================================
// IMPORTS
// ============================================================================


import {

    createCard

} from "../components/card.js";




// ============================================================================
// RENDERIZAR CARDS
// ============================================================================


export function renderCards(

    container,

    cards = []

){


    if(!container) {


        console.warn(

            "Container de cards não encontrado."

        );


        return;


    }



    limparCards(

        container

    );



    cards.forEach(card=>{


        container.appendChild(

            createCard(card)

        );


    });


}




// ============================================================================
// LIMPAR CARDS
// ============================================================================


export function limparCards(

    container

){


    if(!container) return;



    container.innerHTML = "";


}




// ============================================================================
// ATUALIZAR CARDS
// ============================================================================


export function atualizarCards(

    container,

    cards = []

){


    renderCards(

        container,

        cards

    );


}
