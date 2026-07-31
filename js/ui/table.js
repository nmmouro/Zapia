// ============================================================================
// TABLE UI
// Painel Frota
// Arquivo: js/ui/table.js
//
// Camada de interface para tabelas
// Responsável por controlar renderização,
// atualização e limpeza de tabelas.
// ============================================================================


// ============================================================================
// IMPORTS
// ============================================================================

import {

    renderTable as renderComponentTable

} from "../components/table.js";

// ============================================================================
// RENDERIZAR TABELA
// ============================================================================

export function renderTable(
    tabela,
    colunas,
    registros,
    acoes
) {

    if (!tabela) {
        
        return;
    }

    renderComponentTable(tabela,

        {
            columns: colunas, 
            data: registros,
            actions: acoes
        }
    );

}

// ============================================================================
// LIMPAR TABELA
// ============================================================================

export function limparTabela(tabela) {
    
    if (!tabela) {
        
        return;
    }
    tabela.innerHTML = "";
}

// ============================================================================
// ATUALIZAR TABELA
// ============================================================================

export function atualizarTabela(

    tabela,
    colunas,
    registros,
    acoes
) {

   if (!tabela) {
       
       return;
   }

    // ------------------------------------------------------------------------
    // LIMPAR TABELA
    // ------------------------------------------------------------------------
    
    limparTabela( tabela );

// ------------------------------------------------------------------------
// RENDERIZAR NOVAMENTE
// ------------------------------------------------------------------------
    renderTable(
        tabela,
        colunas,
        registros,
        acoes
    );
}
