// ============================================================================
// STATUS UI
// Painel Frota
// Arquivo: js/ui/status.js
//
// Responsável pela padronização visual dos status
// ============================================================================



// ============================================================================
// CONFIGURAÇÃO DOS STATUS
// ============================================================================


const STATUS = {


    AGENDADO: {

        classe: "status-agendado",

        icone: "📅"

    },


    "EM ANDAMENTO": {

        classe: "status-andamento",

        icone: "🚗"

    },


    CONCLUIDO: {

        classe: "status-concluido",

        icone: "✅"

    },


    CANCELADO: {

        classe: "status-cancelado",

        icone: "❌"

    },


    MANUTENCAO: {

        classe: "status-manutencao",

        icone: "🔧"

    },


    LIVRE: {

        classe: "status-livre",

        icone: "🟢"

    },


    OCUPADO: {

        classe: "status-ocupado",

        icone: "🔴"

    },


    VIAGEM: {

        classe: "status-viagem",

        icone: "✈️"

    },


    DEFAULT: {

        classe: "status-default",

        icone: "⚪"

    }


};




// ============================================================================
// NORMALIZAÇÃO
// ============================================================================


function normalizar(status = "") {


    return String(status)

        .normalize("NFD")

        .replace(

            /[\u0300-\u036f]/g,

            ""

        )

        .trim()

        .toUpperCase();


}




// ============================================================================
// BUSCAR STATUS
// ============================================================================


export function getStatus(status){


    const chave =
    normalizar(status);



    return STATUS[chave]

        ||

    STATUS.DEFAULT;


}




// ============================================================================
// CLASSE CSS
// ============================================================================


export function getStatusClass(status){


    return getStatus(status)

        .classe;


}




// ============================================================================
// ÍCONE
// ============================================================================


export function getStatusIcon(status){


    return getStatus(status)

        .icone;


}




// ============================================================================
// COMPONENTE BADGE
// ============================================================================


export function renderStatus(status){


    const item =
    getStatus(status);



    return `


        <span class="status ${item.classe}">


            <span class="status-icon">

                ${item.icone}

            </span>


            <span class="status-text">

                ${status}

            </span>


        </span>


    `;


}
