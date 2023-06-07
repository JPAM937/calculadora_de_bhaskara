"use strict";
var results = document.getElementById("delta");
var resultsBask = document.getElementById("bhaskara");
function botaoCalcular() {
    results.innerHTML = "Sem resultados";
    resultsBasl.innerHTML = "Sem resultados";
    /* Criando A, B e C */
    let value_a;
    let value_b;
    let value_c;
    /* Obtendo o Elemento "input_a" */
    let input_a = document.getElementById("input_a");
    if (input_a) {
        /* Obtendo o valor do Elemento */
        value_a = parseInt(input_a.value);
    }
    else {
        /* Evitando Bugs */
        console.error("Elemento input_a não obtivel!");
        value_a = 1;
    }
    let input_b = document.getElementById("input_b");
    if (input_b) {
        value_b = parseInt(input_b.value);
    }
    else {
        console.error("Elemento input_b não obtivel!");
        value_b = 1;
    }
    let input_c = document.getElementById("input_c");
    if (input_c) {
        value_c = parseInt(input_c.value);
    }
    else {
        console.error("Elemento input_c não obtivel!");
        value_c = 1;
    }
    /* Calculando Delta */
    let deltaResults = calcularDelta(value_a, value_b, value_c, true);
    let delta = calcularDelta(value_a, value_b, value_c, false);
    if (typeof deltaResults[0] !== "number") {
        results.innerHTML = deltaResults[0].replace(/\n/g, "<br>");
    }
    if (deltaResults[1]) {
        let bhask = calcularBhaskara(delta[0], value_a, value_b, true);
        resultsBask === null || resultsBask === void 0 ? void 0 : resultsBask.innerHTML = bhask.replace(/\n/g, "<br>");
    }
}
