// ============================================================================
// TABLE COMPONENT
// Painel Frota
// Arquivo: js/components/table.js
// ============================================================================

import { renderStatus } from "../ui/status.js";

// ============================================================================
// COMPONENTE
// ============================================================================

export function createTable({

    columns = [],

    data = [],

    actions = []

} = {}) {

    const table = document.createElement("table");

    table.className = "table";

    table.appendChild(

        createHeader(columns, actions)

    );

    table.appendChild(

        createBody(columns, data, actions)

    );

    return table;

}

// ============================================================================
// CABEÇALHO
// ============================================================================

function createHeader(

    columns,

    actions

) {

    const thead = document.createElement("thead");

    const tr = document.createElement("tr");

    columns.forEach(col => {

        const th = document.createElement("th");

        th.textContent =

            col.label || col.field;

        tr.appendChild(th);

    });

    if (actions.length) {

        const th = document.createElement("th");

        th.textContent = "Ações";

        tr.appendChild(th);

    }

    thead.appendChild(tr);

    return thead;

}

// ============================================================================
// CORPO
// ============================================================================

function createBody(

    columns,

    data,

    actions

) {

    const tbody = document.createElement("tbody");

    if (!data.length) {

        tbody.appendChild(

            createEmptyRow(

                columns.length +

                (actions.length ? 1 : 0)

            )

        );

        return tbody;

    }

    data.forEach(item => {

        tbody.appendChild(

            createRow(

                item,

                columns,

                actions

            )

        );

    });

    return tbody;

}

// ============================================================================
// LINHA
// ============================================================================

function createRow(

    item,

    columns,

    actions

) {

    const tr = document.createElement("tr");

    columns.forEach(col => {

        const td = document.createElement("td");

        const value =

            item[col.field];

        if (col.type === "status") {

            td.innerHTML =

                renderStatus(value);

        }

        else if (typeof col.render === "function") {

            td.innerHTML =

                col.render(value, item);

        }

        else {

            td.textContent =

                value ?? "";

        }

        tr.appendChild(td);

    });

    if (actions.length) {

        tr.appendChild(

            createActions(

                item,

                actions

            )

        );

    }

    return tr;

}

// ============================================================================
// AÇÕES
// ============================================================================

function createActions(

    item,

    actions

) {

    const td = document.createElement("td");

    td.className = "table-actions";

    actions.forEach(action => {

        const button =

            document.createElement("button");

        button.type = "button";

        button.className =

            action.className || "";

        button.textContent =

            action.label;

        button.addEventListener(

            "click",

            () => action.onClick(item)

        );

        td.appendChild(button);

    });

    return td;

}

// ============================================================================
// SEM DADOS
// ============================================================================

function createEmptyRow(

    colspan

) {

    const tr =

        document.createElement("tr");

    const td =

        document.createElement("td");

    td.colSpan = colspan;

    td.className = "table-empty";

    td.textContent =

        "Nenhum registro encontrado.";

    tr.appendChild(td);

    return tr;

}

// ============================================================================
// RENDER
// ============================================================================

export function renderTable(

    container,

    options

) {

    if (!container) return;

    container.replaceChildren(

        createTable(options)

    );

}
