/*

IMC abaixo de 17 Muito abaixo do peso
entre 17 e 18,49 abaixo do peso
entre 18,5 e 24.99 Peso normal
a partir de 25 acima do peso
pso/(altura*altura)
*/

var area = document.getElementById("area");

function imc_func(event) {
  event.preventDefault();

  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;
  var imc = calculo(peso, altura);

  resposta(imc);
}

function calculo(peso, altura) {
  return peso / Math.pow(altura / 100, 2);
}

function resposta(imc) {
  var area = document.getElementById("area");
  var resultado = document.getElementById("resultado");
  if (imc < 17) {
    resultado.innerHTML = "<br/> Muito abaixo do peso Imc: " + imc.toFixed(2);
  } else if (imc >= 17 && imc < 18.49) {
    resultado.innerHTML = "<br/> Abaixo do peso Imc: " + imc.toFixed(2);
  } else if (imc >= 18.5 && imc < 24.99) {
    resultado.innerHTML = "<br/> Peso normal: " + imc.toFixed(2);
  } else {
    resultado.innerHTML = "<br/> acima do peso do peso Imc: " + imc.toFixed(2);
  }
}
