// ============================================================================
// LOADING
// Painel Frota
// Arquivo: js/ui/loading.js
// Responsável por exibir e ocultar o indicador de carregamento.
// ============================================================================

// ============================================================================
// ELEMENTO
// ============================================================================

const ID = "loading";

// ============================================================================
// MOSTRAR
// ============================================================================

export function mostrarLoading() {

    let loading = document.getElementById(ID);

    if (!loading) {

        loading = criarLoading();

        document.body.appendChild(loading);

    }

    loading.hidden = false;

}

// ============================================================================
// ESCONDER
// ============================================================================

export function esconderLoading() {

    const loading = document.getElementById(ID);

    if (!loading) {

        return;

    }

    loading.hidden = true;

}

// ============================================================================
// CRIAR
// ============================================================================

function criarLoading() {

    const overlay = document.createElement("div");

    overlay.id = ID;

    overlay.className = "loading";

    overlay.innerHTML = `

        <div class="loading-content">

            <div class="loading-spinner"></div>

            <div class="loading-text">

                Carregando...

            </div>

        </div>

    `;

    return overlay;

}
