// Invertendo os caracteres de uma String

function inverteString (str) {
    // primeiro, vamos usar o método split(), que divide a string em um array
    var splitString = str.split("");

    // agora, vamos inverter o array com método reverse()
    var reverseArray = splitString.reverse();

    // por último, vamos unir o array em uma string com o método join()
    var joinArray = reverseArray.join("");

    // retornamos a última variável
    return joinArray;
}

console.log(inverteString('Target'))

