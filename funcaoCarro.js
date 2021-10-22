var statusCarro = "desligado";
var aceleracao = 0;
var rotacaoDoVolante = 0;
var statusFarol = "desligado";
var statusSeta = "desligado";
var statusRe = "desligado";

function ligarDesligar() {
 if (statusCarro === "desligado") {
        statusCarro = "ligado";
    } else {
        statusCarro = "desligado";
    }

    return "Carro " + statusCarro;
}

function acelerar(incremento) {
    aceleracao = aceleracao + incremento;

    return "Acelerando a " + aceleracao + "m/s²";
}

function frear(decremento) {
    aceleracao = aceleracao - decremento;

    return "Desacelerando para " + aceleracao + "m/s²";
}

function girarVolante(anguloRotacao) {
    rotacaoDoVolante = anguloRotacao;

    return "Giro do volante a " + rotacaoDoVolante + "º";
}

function ligarDesligarFarois() {
    if (statusFarol === "desligado") {
        statusFarol = "ligado";
    } else {
        statusFarol = "desligado";
    }

    return "Farois " + statusFarol;
}

function ligarDeslitarSeta() {
    if (statusSeta === "desligado") {
        statusSeta = "ligado";
    } else {
        statusSeta = "desligado";
    }

    return "Seta " + statusSeta;
}

function darRe() {
    if (statusRe === "desligado") {
        statusRe = "ligado";
    } else {
        statusRe = "desligado";
    }

    return "Ré " + statusRe;
}