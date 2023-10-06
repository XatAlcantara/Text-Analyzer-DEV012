import analyzer from './analyzer.js';

const boton= document.getElementById("reset-button");
const cuadrodetexto= document.querySelector("textarea");
const palabras= document.querySelector("li[data-testid='word-count']");
const caracteres= document.querySelector("li[data-testid='character-count']");
const caracteresEX= document.querySelector("li[data-testid='character-no-spaces-count']");
const numeros= document.querySelector("li[data-testid='number-count']");
const suma= document.querySelector("li[data-testid='number-sum']");
const longmedia= document.querySelector("li[data-testid='word-length-average']");

// Selecciona elemntos de DOM por su id o el atributo data-testid y almacena referencias en variables.

cuadrodetexto.addEventListener('input', function(){ // Agrega un evento de escucha al cuadro de texto para el evento input 
  const cuadrodetextoinput = cuadrodetexto.value // Valor del cuadro de texto
  palabras.innerHTML="Palabras: "+analyzer.getWordCount(cuadrodetextoinput);
  caracteres.innerHTML="Caracteres: "+analyzer.getCharacterCount(cuadrodetextoinput);
  caracteresEX.innerHTML="Caracteres Excl: "+analyzer.getCharacterCountExcludingSpaces(cuadrodetextoinput); 
  numeros.innerHTML="Numeros: "+analyzer.getNumberCount(cuadrodetextoinput);
  suma.innerHTML="Suma: "+analyzer.getNumberSum(cuadrodetextoinput);
  longmedia.innerHTML="Long. Media: "+analyzer.getAverageWordLength(cuadrodetextoinput);
});
// Calcula y muestra la metrica en el cuadro de texto usando los metodos get.


boton.addEventListener("click", function () { //Agrega un evento de escucha al boton cuando den click.
  cuadrodetexto.value = ""; //Borra e contenido del cuadro de texto
  palabras.innerHTML = "Palabras: 0";
  caracteres.innerHTML = "Caracteres: 0";
  caracteresEX.innerHTML = "Caracteres Excl: 0";
  numeros.innerHTML = "Numeros: 0";
  suma.innerHTML = "Suma: 0";
  longmedia.innerHTML = "Long. Media: 0";
});
// Restablece las caracteristicas a cero en la interfaz
