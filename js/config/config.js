// ============================================================================
// CONFIG
// Painel Frota
// Arquivo: js/config/config.js
//
// Configurações globais da aplicação
// ============================================================================


// ============================================================================
// APLICAÇÃO
// ============================================================================

export const CONFIG = {

    API_URL:

        "https://script.google.com/macros/s/AKfycbxHJgtTWHi5bbzrbQfOJkLNTF-XkUqGrC0CGyG4aL177nW-p0PKwgSbaw2JkduD11Fb7A/exec",

    UPDATE_INTERVAL: 30000,

    DATE_FORMAT: "pt-BR",

    TIME_FORMAT: "pt-BR"

};



// ============================================================================
// ABAS GOOGLE SHEETS
// ============================================================================

export const ABAS = {

    LANCAMENTOS:

        "LANCAMENTOS",

    VEICULOS:

        "VEÍCULOS",

    EMPREGADOS:

        "EMPREGADOS",

    AGENDA:

        "AGENDA DO DIA",

    SOCIAL:

        "AGENDA SERVIÇO SOCIAL"

};



// ============================================================================
// STATUS DO SISTEMA
// ============================================================================

export const STATUS = {

    AGENDADO:

        "AGENDADO",

    EM_ANDAMENTO:

        "EM ANDAMENTO",

    VIAGEM:

        "VIAGEM",

    MANUTENCAO:

        "MANUTENÇÃO",

    CONCLUIDO:

        "CONCLUÍDO",

    FINALIZADO:

        "FINALIZADO",

    CANCELADO:

        "CANCELADO",

    LIVRE:

        "LIVRE",

    OCUPADO:

        "OCUPADO"

};



// ============================================================================
// CLASSES CSS STATUS
// ============================================================================

export const STATUS_CLASS = {

    AGENDADO:

        "status-agendado",

    "EM ANDAMENTO":

        "status-andamento",

    VIAGEM:

        "status-viagem",

    MANUTENCAO:

        "status-manutencao",

    FINALIZADO:

        "status-finalizado",

    CANCELADO:

        "status-cancelado"

};



// ============================================================================
// ÍCONES STATUS
// ============================================================================

export const STATUS_ICON = {

    AGENDADO:

        "🟡",

    "EM ANDAMENTO":

        "🟢",

    VIAGEM:

        "✈️",

    MANUTENCAO:

        "🔵",

    FINALIZADO:

        "✅",

    CONCLUIDO:

        "✅",

    CANCELADO:

        "🔴",

    LIVRE:

        "🟢",

    OCUPADO:

        "🔴"

};



// ============================================================================
// CAMPOS PADRÃO
// ============================================================================

export const CAMPOS = {


    // ==========================================================================
    // LANÇAMENTOS
    // ==========================================================================

    LANCAMENTOS: {

        ID:
            "ID",

        DATA:
            "Data",

        HORA:
            "Hora",

        EMPREGADO:
            "Empregado / Matrícula",

        VEICULO:
            "Veículo",

        PASSAGEIRO:
            "Passageiro / Setor / Motivo",

        ITINERARIO:
            "Itinerário",

        STATUS:
            "Status"

    },


    // ==========================================================================
    // EMPREGADOS
    // ==========================================================================

    EMPREGADOS: {

        ID:
            "ID",

        DATA:
            "Data",

        HORA:
            "Hora",

        FOTO:
            "Foto",

        EMPREGADO:
            "Empregado",

        MATRICULA:
            "Matrícula",

        DIRETORIA:
            "Diretoria",

        SETOR:
            "Setor",

        USUARIO:
            "Usuário",

        CONDICAO:
            "Condição",

        STATUS:
            "Status"

    },


    // ==========================================================================
    // VEÍCULOS
    // ==========================================================================

    VEICULOS: {

        ID:
            "ID",

        DATA:
            "Data",

        HORA:
            "Hora",

        FOTO:
            "Foto",

        PLACA:
            "Placa",

        MODELO:
            "Modelo",

        MARCA:
            "Marca",

        ANO:
            "Ano",

        COR:
            "Cor",

        COMBUSTIVEL:
            "Combustível",

        STATUS:
            "Status"

    }

};



// ============================================================================
// CORES DA INTERFACE
// ============================================================================

export const CORES = {

    VERDE:
        "#16A34A",

    AZUL:
        "#2563EB",

    VERMELHO:
        "#DC2626",

    AMARELO:
        "#FACC15",

    CINZA:
        "#6B7280"

};



// ============================================================================
// MENSAGENS PADRÃO
// ============================================================================

export const MENSAGENS = {

    SALVO:
        "Registro salvo com sucesso.",

    EXCLUIDO:
        "Registro excluído com sucesso.",

    ALTERADO:
        "Registro atualizado com sucesso.",

    ERRO:
        "Ocorreu um erro ao processar a solicitação.",

    CARREGANDO:
        "Carregando dados..."

};
