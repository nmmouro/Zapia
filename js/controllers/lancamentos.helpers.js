// ============================================================================
// LANÇAMENTOS - HELPERS
// Painel Frota
// Arquivo: js/controllers/lancamentos.helpers.js
// ============================================================================

import { obterLancamentos } from "../services/lancamentos.js";
import { obterEmpregados } from "../services/empregados.js";
import { obterVeiculos } from "../services/veiculos.js";

import { renderTable } from "../components/table.js";

import { COLUNAS_LANCAMENTOS } from "../config/tabelas/lancamentos.js";

import {
    tabela,
    setRegistros
} from "./lancamentos.state.js";

import {
    editarLancamento,
    excluirLancamento
} from "./lancamentos.form.js";

// ============================================================================
// TABELA
// ============================================================================

export async function carregarTabela() {

    const resposta = await obterLancamentos();

    const lista =
        resposta?.data ??
        resposta?.dados ??
        resposta;

    if (!Array.isArray(lista)) {

        throw new Error(
            "Resposta inválida ao carregar lançamentos."
        );

    }

    setRegistros(lista);

    renderTable(
        tabela,
        {
            columns: COLUNAS_LANCAMENTOS,
            data: lista,
            actions: [
                {
                    label: "Editar",
                    className: "btn-edit",
                    onClick: item => editarLancamento(item.ID)
                },
                {
                    label: "Excluir",
                    className: "btn-delete",
                    onClick: item => excluirLancamento(item.ID)
                }
            ]
        }
    );

}

// ============================================================================
// EMPREGADOS
// ============================================================================

export async function carregarEmpregados() {

    const resposta = await obterEmpregados();

    const lista =
        resposta?.data ??
        resposta?.dados ??
        resposta;

    if (!Array.isArray(lista)) {

        throw new Error(
            "Resposta inválida ao carregar empregados."
        );

    }

    const select =
        document.querySelector("#empregado");

    select.innerHTML = `
        <option value="">
            Selecione o empregado
        </option>
    `;

    lista.forEach(item => {

        const empregado =
            item["Empregado"] ?? "";

        const matricula =
            item["Matrícula"] ?? "";

        const valor = [
            empregado,
            matricula
        ]
        .filter(Boolean)
        .join(" / ");

        const option =
            document.createElement("option");

        option.value = item.ID;

        //option.dataset.id = item.ID;
        
        option.textContent = valor;

        select.appendChild(option);

    });

}

// ============================================================================
// VEÍCULOS
// ============================================================================

export async function carregarVeiculos() {

    const resposta = await obterVeiculos();

    const lista =
        resposta?.data ??
        resposta?.dados ??
        resposta;

    if (!Array.isArray(lista)) {

        throw new Error(
            "Resposta inválida ao carregar veículos."
        );

    }

    const select =
        document.querySelector("#veiculo");

    select.innerHTML = `
        <option value="">
            Selecione o veículo
        </option>
    `;

    lista.forEach(item => {

        const placa =
            item["Placa"] ?? "";

        const modelo =
            item["Modelo"] ?? "";

        const valor =
        `${placa} - ${modelo}`;

        const option =
            document.createElement("option");

        option.value = item.ID;

        //option.dataset.id = item.ID;
        
        option.textContent = valor;

        select.appendChild(option);

    });

}
