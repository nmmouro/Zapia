// ============================================================================
// STATUS UI
// Painel Frota
// Arquivo: js/ui/status.js
// Responsável pela renderização visual dos status.
// ============================================================================

// ============================================================================
// RENDERIZAR STATUS
// ============================================================================

export function renderStatus(status = "") {

    const texto =

        String(status)
            .trim()
            .toUpperCase();

    const classe =

        obterClasse(texto);

    return `

        <span class="status ${classe}">

            ${texto || "-"}

        </span>

    `;

}

// ============================================================================
// CLASSE CSS
// ============================================================================

function obterClasse(status) {

    switch (status) {

        case "ATIVO":
            return "status-success";

        case "EM USO":
            return "status-success";

        case "DISPONÍVEL":
            return "status-success";

        case "CONCLUÍDO":
            return "status-success";

        case "PENDENTE":
            return "status-warning";

        case "AGENDADO":
            return "status-warning";

        case "EM MANUTENÇÃO":
            return "status-warning";

        case "FÉRIAS":
            return "status-info";

        case "AFASTADO":
            return "status-info";

        case "INATIVO":
            return "status-danger";

        case "CANCELADO":
            return "status-danger";

        default:
            return "status-default";

    }

}
