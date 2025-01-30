//Variables declaration

let a = "";
let b = "";
let op = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let switchNumber = false;
let turnOff = true;

//Getting HTML elements

const display = document.getElementById("top-calc");
const numberButton = document.querySelectorAll(".number");
const powerButton = document.getElementById("power");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const operatorButton = document.querySelectorAll(".operator");
const allButtons = document.querySelectorAll("button");

//Click events

numberButton.forEach(button =>{
    button.addEventListener("click", setDisplay);
});

operatorButton.forEach(button =>{
    button.addEventListener("click", setOperator);
})

powerButton.addEventListener("click", power);

clearButton.addEventListener("click", clearDisplay);

equalsButton.addEventListener("click", operate);

//Disable buttons at the beggining

allButtons.forEach(button =>{
    button.disabled = true;
})
powerButton.disabled = false;

//Functions

//buttons.forEach(button => button.disabled = true);

function power(){
    if(turnOff===true){
        display.textContent = "0";
        turnOff = false;
        allButtons.forEach(button =>{
            button.disabled = false;
        })
    } else {
        clearDisplay();
        display.textContent = "";
        turnOff = true;
        allButtons.forEach(button =>{
            button.disabled = true;
        })
        powerButton.disabled = false;
    }
}

function setDisplay(){
    if(switchNumber === false){
        if(a.length<=8){
        a += this.textContent;
        display.textContent = a;
        console.log("The first number is: " + a);
        console.log(switchNumber);
        firstNumber = Number(a);
        }
    } else {
        if(b.length<=8){
            b += this.textContent;
            display.textContent = b;
            console.log("The second number is: " + b);
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
    result = "";
    display.textContent = "0";
    switchNumber = false;
    operatorButton.forEach(button =>{
        button.style.color = "white";
    })
    console.clear();
}

function setOperator(){

    if(op===""){
        op = this.textContent;
        console.log("The operator is: "+ op);
        switchNumber = true;
        console.log(switchNumber);
        operator = op;
        this.style.color = "yellow";
    } else {
        if(secondNumber != ""){
            operate();
            firstNumber = result;
            op = this.textContent;
            console.log("The first number is: " + firstNumber);
            console.log("The operator is: " + op);
            console.log(switchNumber);
            operator = op;
            this.style.color = "yellow";
            b = "";
            secondNumber = "";
        } else {
            op = this.textContent;
            console.log("The operator is: " + op);
            console.log(switchNumber);
            operator = op;
            operatorButton.forEach(button =>{
                button.style.color = "white";
            })
            this.style.color = "yellow";
        }
    }
}

function operate(a,b,op){
    console.log("first number: " + firstNumber);
    console.log("second number: " + secondNumber);
    console.log("operator is: " + operator);
    if (firstNumber === ""){
        display.textContent = "0";
    } else if (secondNumber === 0){
        display.textContent = "Error";
        console.log("Error")
    } else {
        if(operator==="+"){
            result = add(firstNumber,secondNumber);
        } else if(operator==="-"){
            result = subtract(firstNumber,secondNumber);
        } else if(operator==="*"){
            result = multiply(firstNumber,secondNumber);
        } else if(operator==="/"){
            result = divide(firstNumber,secondNumber);
        }
        console.log(typeof(result));
        if(result.toString().length>9){
            let newResult = "";
            newResult = result.toString().substr(0,9);
            console.log(result);
            if(Number(newResult) % 1 != 0){
                display.textContent = result.toFixed(8-newResult.indexOf("."));
                // display.textContent = Number(newResult).toFixed(8-newResult.indexOf("."));
            } else {
                display.textContent = Math.round(result);
            }
        } else {
            display.textContent = result;
        }
        operatorButton.forEach(button =>{
            button.style.color = "white";
        })
    }
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

