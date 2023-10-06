import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const boton= document.getElementById("reset-button");
const cuadrodetexto= document.querySelector("textarea");
const palabras= document.querySelector("li[data-testid='word-count']");
const caracteres= document.querySelector("li[data-testid='character-count']");
const caracteresEX= document.querySelector("li[data-testid='character-no-spaces-count']");
const numeros= document.querySelector("li[data-testid='number-count']");
const suma= document.querySelector("li[data-testid='number-sum']");
const longmedia= document.querySelector("li[data-testid='word-length-average']");

cuadrodetexto.addEventListener('input', function(){
  const cuadrodetextoinput = cuadrodetexto.value
  palabras.innerHTML="Palabras: "+analyzer.getWordCount(cuadrodetextoinput);
  caracteres.innerHTML="Caracteres: "+analyzer.getCharacterCount(cuadrodetextoinput);
  caracteresEX.innerHTML="Caracteres Excl: "+analyzer.getCharacterCountExcludingSpaces(cuadrodetextoinput); 
  numeros.innerHTML="Numeros: "+analyzer.getNumberCount(cuadrodetextoinput);
  suma.innerHTML="Suma: "+analyzer.getNumberSum(cuadrodetextoinput);
  longmedia.innerHTML="Long. Media: "+analyzer.getAverageWordLength(cuadrodetextoinput);
});

boton.addEventListener("click", function () {
  cuadrodetexto.value = "";
  palabras.innerHTML = "Palabras: 0";
  caracteres.innerHTML = "Caracteres: 0";
  caracteresEX.innerHTML = "Caracteres Excl: 0";
  numeros.innerHTML = "Numeros: 0";
  suma.innerHTML = "Suma: 0";
  longmedia.innerHTML = "Long. Media: 0";
});
