// ============================================================================
// ERRORS
// Painel Frota
// Arquivo: js/utils/errors.js
// Responsável pelo tratamento de erros da aplicação.
// ============================================================================

// ============================================================================
// TRATAR ERRO
// ============================================================================

export function tratarErro(erro) {

    console.error(erro);

    const mensagem = obterMensagem(erro);

    alert(mensagem);

}

// ============================================================================
// OBTER MENSAGEM
// ============================================================================

export function obterMensagem(erro) {

    if (!erro) {

        return "Ocorreu um erro inesperado.";

    }

    if (typeof erro === "string") {

        return erro;

    }

    if (erro instanceof Error) {

        return erro.message;

    }

    return (

        erro.message ||

        erro.erro ||

        erro.detail ||

        "Ocorreu um erro inesperado."

    );

}

// ============================================================================
// LANÇAR ERRO
// ============================================================================

export function lançarErro(mensagem) {

    throw new Error(mensagem);

}
