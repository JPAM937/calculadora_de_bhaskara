"use strict";
function calcularDelta(a, b, c, verbose) {
    let delta = b * b - 4 * a * c;
    if (!verbose) {
        if (delta < 0) {
            return [NaN, false];
        }
        else if (delta === 0) {
            return [-b / (2 * a), false];
        }
        else {
            return [delta, true];
        }
    }
    else {
        if (delta < 0) {
            return [
                `A equação não tem resultados ;-;\na = ${a}, b = ${b}, c = ${c}\nS = Φ`,
                false,
            ];
        }
        else if (delta === 0) {
            return [
                `delta é 0 logo tem um imprevisto\nentão a formula de bhaskara se resolve em\na = ${a}, b = ${b}, c = ${c}\nx = -b ÷ 2a\nx = -(${b}) ÷ 2.(${a})\nx = ${-b / (2 * a)}\nS = { ${-b / (2 * a)} }`,
                false,
            ];
        }
        return [
            `a = ${a}, b = ${b}, c = ${c}\nΔ = b² - 4ac\nΔ = (${b})² - 4.(${a}).(${c})\nΔ = (${b * b}) - (${4 * a * c})\nΔ = ${delta}`,
            true,
        ];
    }
}
function calcularBhaskara(delta, a, b, verbose) {
    let bhaskara = [
        (-b + Math.sqrt(delta)) / (2 * a),
        (-b - Math.sqrt(delta)) / (2 * a),
    ];
    if (!verbose) {
        return bhaskara;
    }
    else {
        return `x = (-b ± √Δ) ÷ 2a\nx = (-(${b}) ± √${delta}) ÷ 2.(${a})\nx = ${-b} ± ${Math.sqrt(delta)} ÷ ${2 * a}\nx₁ = -b + √Δ ÷ 2a\nx₁ = -(${b}) + √${delta} ÷ 2.(${a})\nx₁ = ${-b} + ${Math.sqrt(delta)} ÷ ${2 * a}\nx₁ = ${bhaskara[0]}\nx₂ = -b - √Δ ÷ 2a\nx₂ = -(${b}) - √${delta} ÷ 2.(${a})\nx₂ = ${-b} - ${Math.sqrt(delta)} ÷ ${2 * a}\nx₂ = ${bhaskara[1]}\nS = { x₁, x₂ }\nS = { ${bhaskara[0]} , ${bhaskara[1]} }`;
    }
}
