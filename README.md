# Text-Analyzer-DEV012
Analizador de texto que recopila datos como palabras, caracteres, cantidad de números, etc. 

![Vista Text Analyzer](https://github.com/XatAlcantara/Text-Analyzer-DEV012/blob/02685e87e3bad85df50c66ac24c157409cefeea9/Disen%CC%83o.png)

## Indice

* [Descripción del proyecto](#descripción-del-proyecto)
* [Diseño](#Diseño)
* [Características tecnicas](#características-tecnicas)
* [Tecnologías utilizadas](#Tecnologías-utilizadas)
* [Desarrolladora del proyecto](#Desarrolladora-del-proyecto)

## Diseño

Se realizaron diferentes bocetos a mano, diseñando al final un prototipo en la aplicación de Figma, de la cual se obtuvieron los colores y las referencias para poder llevar a acabo el correcto desarrollo de y diseño con CSS, tomando en consideracion los contrates y un diseño minimalista amable con el usuario explicandole las funcionalidades del programa.

![Prototipo figma](https://github.com/XatAlcantara/Text-Analyzer-DEV012/blob/9e71baa4ababcb1068f39925cb6b39ced370aa8e/Captura%20de%20pantalla%202023-10-06%20a%20la(s)%200.55.07.png)

## Descripción del proyecto
Proyecto realizado para: Bootcamp Laboratoria - Desarrollo Web.
* La aplicación permite a los usuarios ingresar texto en un cuadro de texto.
* Calcula y muestra en tiempo real métricas como el recuento de palabras, caracteres, números, suma de números y longitud media de palabras.
* Proporciona una función para borrar el contenido del cuadro de texto y a si a su vez de las metricas calculadas anteriormente.
* Facilita el análisis rápido de texto sin necesidad de herramientas externas.

![demo text analyzer](https://github.com/XatAlcantara/Text-Analyzer-DEV012/blob/370e64e3420897d2ef3b32802f13220c3991a78a/Funcionalidad.gif "Demo Text Analyzer")

## Características Tecnicas
* El código está organizado en funciones reutilizables que facilitan el cálculo de métricas.
* Se utilizan expresiones regulares y métodos de cadenas para procesar y analizar el texto de manera efectiva.
* El código utiliza eventos DOM para actualizar las métricas en tiempo real mientras el usuario escribe.
* Proporciona una forma limpia y eficiente de calcular métricas específicas de texto.

Lo conforman 4 archivos principales ubicados en la carpeta src, los cuales son:
* [1. index.html](#1-index.html)
* [2. style.css](#2-style.css)
* [3. index.js](#3-index.js)
* [4. analyzer.js](#4-analyzer.js)

### Archivos Javascript
* 1. index.js
  * Este archivo index.js es la pieza principal de JavaScript en tu proyecto.
  * Su función principal es gestionar la interacción del usuario en la página web y actualizar en tiempo real las métricas basadas en el texto ingresado por el usuario.
  * index.js utiliza las funciones definidas en analyzer.js para realizar los cálculos de las métricas.
  * Escucha el evento input en el cuadro de texto para detectar cambios en el texto ingresado por el usuario.
  * Permite al usuario borrar el contenido del cuadro de texto haciendo clic en el botón "Reset".

* 2. analyzer.js
  * Contiene un módulo con varias funciones específicas para realizar cálculos relacionados con las métricas del texto ingresado.
    * Funciones Detalladas
      * getWordCount(text): Calcula el recuento de palabras en el texto.
      * getCharacterCount(text): Calcula el recuento de caracteres en el texto, incluyendo espacios y signos de puntuación.
      * getCharacterCountExcludingSpaces(text): Calcula el recuento de caracteres en el texto, excluyendo espacios y signos de puntuación.
      * getAverageWordLength(text): Calcula la longitud media de las palabras en el texto.
      * getNumberCount(text): Cuenta cuántos números hay en el texto.
      * getNumberSum(text): Calcula la suma de todos los números en el texto.


## Tecnologías utilizadas
* HTML
* CSS
* JS

##  Desarrolladora del proyecto 

Xatzibe Alejandra Alcántara Rodríguez
05-Octubre-2023
