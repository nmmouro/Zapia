// ============================================================================
// DASHBOARD SERVICE
// Painel Frota
// Arquivo: js/services/dashboard.js
// Responsável pela comunicação com a API do Dashboard.
// ============================================================================

import {

    get

} from "../api/api.js";

// ============================================================================
// DASHBOARD
// ============================================================================

export function obterDashboard() {

    return get({

        acao:

            "dashboard"

    });

}
