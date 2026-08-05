// ============================================================================
// CONFIG
// Painel Frota
// Arquivo: js/config/config.js
// Configurações gerais da aplicação.
// ============================================================================

export const CONFIG = Object.freeze({

    // ========================================================================
    // API
    // ========================================================================

    API_URL:
        "https://script.google.com/macros/s/AKfycbyYrCSly4wRdpArT3MXFVm0CYfjPuOCosyIonImyHDuubGMeHznUE8pRIeJisy6f4nIFQ/exec",

    // ========================================================================
    // APLICAÇÃO
    // ========================================================================

    APP_NAME:
        "Painel Frota",

    APP_VERSION:
        "1.0.0",

    // ========================================================================
    // TABELAS
    // ========================================================================

    PAGE_SIZE:
        20,

    // ========================================================================
    // DATAS
    // ========================================================================

    LOCALE:
        "pt-BR",

    TIMEZONE:
        "America/Sao_Paulo",

    // ========================================================================
    // MENSAGENS
    // ========================================================================

    MESSAGES: {

        SAVE_SUCCESS:
            "Registro salvo com sucesso.",

        UPDATE_SUCCESS:
            "Registro atualizado com sucesso.",

        DELETE_SUCCESS:
            "Registro excluído com sucesso.",

        CONFIRM_DELETE:
            "Deseja realmente excluir este registro?",

        LOAD_ERROR:
            "Erro ao carregar dados.",

        SAVE_ERROR:
            "Erro ao salvar registro.",

        API_ERROR:
            "Erro de comunicação com o servidor."

    }

});
