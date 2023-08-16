'use strict'

function calcularMedia(){
var n1 = parseFloat(document.getElementById("n1").value)
var n2 = parseFloat(document.getElementById("n2").value)
var n3 = parseFloat(document.getElementById("n3").value)
var n4 = parseFloat(document.getElementById("n4").value)

var md1 = (numero1 + numero2 + numero3 + numero4) / 4

var resultado = document.getElementById("resultado")

if (md11 >= 7){
    resultado.innerHTML = "APROVADO!"
} else{
    var ne = parseFloat(prompt("Digite a nota do Exame: "))
    var md2 = (md1 + ne) / 2

    if (md2 >= 5){
        resultado.innerHTML = "Aprovado em exame"
    } else {
        resultado.innerHTML = "REPROVADO!"
    }
}
var spanMedia = document.getElementById("mediaSpan")
spanMedia.innerHTML = "Média Obtida: " + md1.toFixed(2)
}