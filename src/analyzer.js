const analyzer = {  
  getWordCount: (cuadrodetextoinput) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let words = 0;
    const wordsArray = cuadrodetextoinput.split(/\s+/);
    for (let i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i].trim() !== '') {
        words++;
      }
    }
    return words;
  },

  getCharacterCount: (cuadrodetextoinput) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  const numberchars = cuadrodetextoinput.length; 
  return numberchars;
  },

  getCharacterCountExcludingSpaces: (cuadrodetextoinput) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const charsEX = cuadrodetextoinput.replace(/\s+/g, '').replace(/[.,:;_?¡¿!"'()[\]{}«»]/g, '');
    return charsEX.length;
  },

  getAverageWordLength: (cuadrodetextoinput) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = cuadrodetextoinput.trim().split(/\s+/).filter(word => word !== '');
    let totalLength = 0;
    for (let i = 0; i < words.length; i++) {
      totalLength += words[i].length;
    }
    const average = words.length > 0 ? totalLength / words.length : 0;
    return Math.round(average * 100) / 100;
  },

  getNumberCount: (cuadrodetextoinput) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = cuadrodetextoinput.split(/\s+/).filter(word => /^\d+(\.\d+)?$/.test(word));
    return numbers.length;
  },
  
  getNumberSum: (cuadrodetextoinput) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = cuadrodetextoinput.match(/\d+(\.\d+)?/g) || [];
    const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
    return Math.round(sum * 100) / 100;
  },
};

export default analyzer;
