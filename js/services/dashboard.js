// ============================================================================
// SERVICES / DASHBOARD
// Arquivo: js/services/dashboard.js
// ============================================================================


// ================= IMPORTS =================

import {

    listar

} from "../api/api.js";

import {

    ABAS

} from "../config/config.js";


// ================= CONSULTAS =================

export async function obterPainel() {

    return await listar(

        ABAS.LANCAMENTOS

    );

}


export async function obterVeiculos() {

    return await listar(

        ABAS.VEICULOS

    );

}


export async function obterMotoristas() {

    return await listar(

        ABAS.MOTORISTAS

    );

}


export async function obterAgenda() {

    return await listar(

        ABAS.AGENDA

    );

}


export async function obterAgendaSocial() {

    return await listar(

        ABAS.SOCIAL

    );

}


// ================= DASHBOARD =================

export async function carregarDashboard() {

    const [

        painel,
        veiculos,
        motoristas,
        agenda,
        social

    ] = await Promise.all([

        obterPainel(),
        obterVeiculos(),
        obterMotoristas(),
        obterAgenda(),
        obterAgendaSocial()

    ]);

    return {

        painel,
        veiculos,
        motoristas,
        agenda,
        social

    };

}
