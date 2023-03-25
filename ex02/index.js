// Sequência de Fibonacci

// Váriavel com valor pré-definido
let num = 8

// Função para calcular os número da sequência de Fibonacci até que seja igual ou maior que o número inserido
function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let num3 = 1;

    while (num3 < num) {
        num1 = num2;
        num2 = num3;
        num3 = num1 + num2;
    }

    if (num3 === num) {
        return true;
    } else {
        return false;
    }    
}

if (fibonacci(num)) {
    console.log(num + " pertence à sequência de Fibonacci")
} else {
    console.log(num + " não pertence à sequência de Fibonacci")
}