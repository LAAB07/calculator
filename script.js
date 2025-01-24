let firstNumber = 0;
let secondNumber = 0;
let operator = "";

function add(a,b){
    firstNumber = a;
    secondNumber = b;
    return firstNumber+secondNumber;
}

function subtract(a,b){
    firstNumber = a;
    secondNumber = b;
    return firstNumber-secondNumber;
}

function multiply(a,b){
    firstNumber = a;
    secondNumber = b;
    return firstNumber*secondNumber;
}

function divide(a,b){
    firstNumber = a;
    secondNumber = b;
    return firstNumber/secondNumber;
}

function operate(a,b,op){
    operator = op;
    if(operator==="+"){
        return add(a,b);
    } else if(operator==="-"){
        return subtract(a,b);
    } else if(operator==="*"){
        return multiply(a,b);
    } else if(operator==="/"){
        return divide(a,b);
    }
}

// console.log(add(5,7));
// console.log(subtract(10, 5));
// console.log(multiply(8,8));
// console.log(divide(45,9));

console.log(operate(5,5,"/"));

