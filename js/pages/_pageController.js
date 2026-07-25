// ============================================================================
// PAGE CONTROLLER GENÉRICO
// Painel Frota
// Arquivo: js/pages/_pageController.js
//
// Classe base para todas as páginas.
// Herdar e implementar os métodos marcados como obrigatórios.
//
// Uso:
//
//   class MinhaPagina extends PageController {
//
//       getTabela()                  { return document.querySelector("#tabelaX"); }
//       getColunas()                 { return COLUNAS_X; }
//       carregarRegistros()          { return obterTodos(); }
//       salvarRegistro(dados)        { return salvarNovo(dados); }
//       editarRegistro(id, dados)    { return atualizar(id, dados); }
//       excluirRegistro(id)          { return remover(id); }
//       coletarDados()               { return obterDadosFormulario(...); }
//       preencherCampos(registro)    { preencherFormulario(...); }
//   }
//
//   new MinhaPagina().init();
// ============================================================================


// ============================================================================
// IMPORTS
// ============================================================================

import { renderTable }           from "../ui/table.js";

import {
    mostrarLoading,
    esconderLoading
} from "../ui/loading.js";

import {
    limparFormulario,
    focarPrimeiroCampo
} from "../utils/formulario.js";

import {
    preencherDataHoraAtual
} from "../utils/datas.js";


// ============================================================================
// CLASSE BASE
// ============================================================================

export class PageController {


    // =========================================================================
    // INICIALIZAÇÃO
    // =========================================================================

    async init() {

        try {

            mostrarLoading();

            this._formulario = document.querySelector("form");
            this._btnNovo    = document.querySelector("#btnNovo");

            this._registrarEventos();

            await this.carregarDependencias();

            this._novo();

            await this._carregarTabela();

        } catch (erro) {

            this._tratarErro(erro);

        } finally {

            esconderLoading();

        }
    }


    // =========================================================================
    // EVENTOS
    // =========================================================================

    _registrarEventos() {

        this._formulario?.addEventListener(
            "submit",
            (e) => {
                e.preventDefault();
                this._salvar();
            }
        );

        this._btnNovo?.addEventListener(
            "click",
            () => this._novo()
        );
    }


    // =========================================================================
    // CARREGAR TABELA
    // =========================================================================

    async _carregarTabela() {

        const registros = await this.carregarRegistros();

        renderTable(
            this.getTabela(),
            this.getColunas(),
            registros,
            this._acoesDefault()
        );
    }


    // =========================================================================
    // AÇÕES PADRÃO DA TABELA (Editar + Excluir)
    // =========================================================================

    _acoesDefault() {

        return [

            {
                label:     "Editar",
                className: "btn-edit",
                onClick:   (registro) => this._editar(registro)
            },

            {
                label:     "Excluir",
                className: "btn-delete",
                onClick:   (registro) => this._remover(registro.ID)
            }

        ];
    }


    // =========================================================================
    // SALVAR (novo ou edição)
    // =========================================================================

    async _salvar() {

        try {

            mostrarLoading();

            const dados = this.coletarDados();

            if (this._registroEditando) {
                await this.editarRegistro(this._registroEditando, dados);
            } else {
                await this.salvarRegistro(dados);
            }

            this._novo();

            await this._carregarTabela();

        } catch (erro) {

            this._tratarErro(erro);

        } finally {

            esconderLoading();

        }
    }


    // =========================================================================
    // EDITAR — preenche o formulário com os dados do registro
    // =========================================================================

    _editar(registro) {

        this._registroEditando = registro.ID;

        this.preencherCampos(registro);

        this._formulario?.scrollIntoView({
            behavior: "smooth",
            block:    "start"
        });

        focarPrimeiroCampo(this._formulario);
    }


    // =========================================================================
    // EXCLUIR
    // =========================================================================

    async _remover(id) {

        if (!confirm("Confirma a exclusão?")) return;

        try {

            mostrarLoading();

            await this.excluirRegistro(id);

            await this._carregarTabela();

        } catch (erro) {

            this._tratarErro(erro);

        } finally {

            esconderLoading();

        }
    }


    // =========================================================================
    // NOVO — limpa o formulário e reseta o estado
    // =========================================================================

    _novo() {

        this._registroEditando = null;

        limparFormulario(this._formulario);

        preencherDataHoraAtual(
            this._formulario?.elements["data"],
            this._formulario?.elements["hora"]
        );

        focarPrimeiroCampo(this._formulario);
    }


    // =========================================================================
    // ERRO
    // =========================================================================

    _tratarErro(erro) {

        console.error(erro);

        alert(erro.message || "Erro inesperado.");

        esconderLoading();
    }


    // =========================================================================
    // MÉTODOS OBRIGATÓRIOS NA SUBCLASSE
    // =========================================================================

    // Retorna o elemento container da tabela
    getTabela()                 { throw new Error("getTabela() não implementado."); }

    // Retorna o array de colunas
    getColunas()                { throw new Error("getColunas() não implementado."); }

    // Retorna Promise com a lista de registros
    carregarRegistros()         { throw new Error("carregarRegistros() não implementado."); }

    // Salva um novo registro
    salvarRegistro(_dados)      { throw new Error("salvarRegistro() não implementado."); }

    // Edita um registro existente
    editarRegistro(_id, _dados) { throw new Error("editarRegistro() não implementado."); }

    // Exclui um registro
    excluirRegistro(_id)        { throw new Error("excluirRegistro() não implementado."); }

    // Coleta os dados do formulário e retorna objeto para a API
    coletarDados()              { throw new Error("coletarDados() não implementado."); }

    // Preenche o formulário com os dados de um registro
    preencherCampos(_registro)  { throw new Error("preencherCampos() não implementado."); }


    // =========================================================================
    // MÉTODO OPCIONAL NA SUBCLASSE
    // =========================================================================

    // Carrega dependências externas (selects dinâmicos, etc.)
    // Sobrescrever apenas se o módulo precisar
    async carregarDependencias() {}

}
