const analyzer = {  
  getWordCount: (cuadrodetextoinput) => { // Se nombra a la funcion get, esta acepta un parametro en este caso el cuadro de texto
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let words = 0; //Se declara la variable llmada words que inicializa en 0.
    const wordsArray = cuadrodetextoinput.split(/\s+/); //Se declara la constante array que almacena el arreglo resultante entre dividir cuadrodetextoinput y la expresion regular.
    //El texto se dividira en palabras cada vez que se encuentre uno o mas espacios en blanco.
		for (let i = 0; i < wordsArray.length; i++) {//Se inicia un bucle con for que recorrera todas las palabras en el arreglo array.
      if (wordsArray[i].trim() !== '') {//Verifica si la palabra actual no es una cadena vacia. 
        words++;//Si no es una cadena vacia se incrementa el contador words en uno, por lo que se encontro una palabra valida
      } 
    }
    return words;// Nos retorna el valor de words que es el numero total de palabras encontradas en el texto 
  },

getCharacterCount: (cuadrodetextoinput) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const numberchars = cuadrodetextoinput.length;  // La constante se utiliza para almacenar el resultado del numero de caracteres ingresados en la cadena de texto
    return numberchars;  // Regresa el valor almacenado en numberschars que son los caracteres en la cadena de texto 
  },

  getCharacterCountExcludingSpaces: (cuadrodetextoinput) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const charsEX = cuadrodetextoinput.replace(/\s+/g, '').replace(/[.,:;_?¡¿!"'()[\]{}«»]/g, '');// Elimina todos los espacios y los signos de puntuacion y los reemplaza.
    return charsEX.length;// Nos regresa la longitud de la cadena excluyendo los espacios y caracteres.
  },

  getAverageWordLength: (cuadrodetextoinput) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = cuadrodetextoinput.trim().split(/\s+/).filter(word => word !== '');//Se eliminan espacios, se divide la cadena con la expresion regular, se aplica un filtro pala eliminar palabras vacias.
    let totalLength = 0; //Variable que se inicializa en 0 y llevara el registro de la longitud total de las palabras. 
    for (let i = 0; i < words.length; i++) {// Bucle que nos ayuda a sumar todas las longitudes de las palabras.
      totalLength += words[i].length;
    }
    const prom = words.length > 0 ? totalLength / words.length : 0;// Si el numero de palabras es mayor a cero se divide la suma de las longitudes entre el numero de palabras 
    return Math.round(prom * 100) / 100;//Redondea el promedio a dos decimales y nos lo da
  },


  getNumberCount: (cuadrodetextoinput) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = cuadrodetextoinput.split(/\s+/).filter(word => /^\d+(\.\d+)?$/.test(word));//Divide la linea de texto en cada espacio, agrega una condicion con la expresio regular y corrobora que sea un numero y no na palabra.
    return numbers.length; //Nos devuelve la longitud de numbers.
  },

  getNumberSum: (cuadrodetextoinput) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = cuadrodetextoinput.match(/\d+(\.\d+)?/g) || [];//Busca y extrae los numeros en el texto, mediante la expresion regular obtiene numeros enteros y decimales y nos indica si hay o no numeros.
    const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
    return Math.round(sum * 100) / 100;
  },

};

export default analyzer;
