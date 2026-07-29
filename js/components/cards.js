// ============================================================================
// CARD COMPONENT
// Painel Frota
// Arquivo: js/components/card.js
// ============================================================================

// ============================================================================
// CRIAR CARD
// ============================================================================

export function createCard({

    titulo = "",

    valor = "",

    subtitulo = "",

    icone = "",

    classe = "",

    footer = "",

    onClick = null

} = {}) {

    const card =

        document.createElement("article");

    card.className =

        `card ${classe}`.trim();

    card.innerHTML = `

        <header class="card-header">

            <span class="card-icon">

                ${icone}

            </span>

            <h3 class="card-title">

                ${titulo}

            </h3>

        </header>

        <section class="card-body">

            <div class="card-value">

                ${valor}

            </div>

            <small class="card-subtitle">

                ${subtitulo}

            </small>

        </section>

        <footer class="card-footer">

            ${footer}

        </footer>

    `;

    if (typeof onClick === "function") {

        card.classList.add("clickable");

        card.addEventListener(

            "click",

            () => onClick(card)

        );

    }

    return card;

}
