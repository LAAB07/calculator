//Variables declaration

let a = "";
let b = "";
let op = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let switchNumber = false;

//Getting HTML elements

let display = document.getElementById("top-calc");
const numberButton = document.querySelectorAll(".number");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const operatorButton = document.querySelectorAll(".operator");

//Click events

numberButton.forEach(button =>{
    button.addEventListener("click", setDisplay);
});

operatorButton.forEach(button =>{
    button.addEventListener("click", setOperator);
})

clearButton.addEventListener("click", clearDisplay);

equalsButton.addEventListener("click", operate);

//Functions

function setDisplay(){
    if(switchNumber === false){
        if(a.length<=8){
        a += this.textContent;
        display.textContent = a;
        console.log("The first number is: "+ a);
        console.log(switchNumber);
        firstNumber = Number(a);
        }
    } else {
        if(b.length<=8){
            b += this.textContent;
            display.textContent = b;
            console.log("The second number is: "+ b);
            console.log(switchNumber);
            secondNumber = Number(b);
        }
    }

}

function clearDisplay(){
    a = "";
    b = "";
    op = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = "0";
    switchNumber = false;
    operatorButton.forEach(button =>{
        button.style.color = "white";
    })
    console.clear();
}

function setOperator(){
    op = this.textContent;
    console.log(op);
    switchNumber = true;
    console.log(switchNumber);
    operator = op;
    this.style.color = "yellow";
}

function operate(a,b,op){
    console.log("Im listening");
    console.log("first number: " + firstNumber);
    console.log("second number: " + secondNumber);
    console.log("operator is: " + operator);
    if(operator==="+"){
        result = add(firstNumber,secondNumber);
    } else if(operator==="-"){
        result = subtract(firstNumber,secondNumber);
    } else if(operator==="*"){
        result = multiply(firstNumber,secondNumber);
    } else if(operator==="/"){
        result = divide(firstNumber,secondNumber);
    }
    display.textContent = result;
    operatorButton.forEach(button =>{
        button.style.color = "white";
    })
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

