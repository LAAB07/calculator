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
let functionEnabled = false;

//Getting HTML elements

const display = document.getElementById("top-calc");
const numberButton = document.querySelectorAll(".number");
const powerButton = document.getElementById("power");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const operatorButton = document.querySelectorAll(".operator");
const allButtons = document.querySelectorAll("button");
const backspaceButton = document.getElementById("backspace");
const signButton = document.getElementById("sign");
const pointButton = document.getElementById("point");

//Click & Key events

numberButton.forEach(button =>{
    button.addEventListener("click", setDisplay);
});
operatorButton.forEach(button =>{
    button.addEventListener("click", setOperator);
})
powerButton.addEventListener("click", power);
clearButton.addEventListener("click", clearDisplay);
equalsButton.addEventListener("click", operate);
backspaceButton.addEventListener("click", undoLastInput);
signButton.addEventListener("click", changeSign);
pointButton.addEventListener("click", getDecimals);
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { operate() } 
    else if (e.code === "Backspace") { undoLastInput() }
    else if (e.code === "Delete") { clearDisplay() }
    else if (e.key === "p") { power() }
    else if (e.key === "+"||e.key === "-"||e.key === "*"||e.key === "/") { setOperator(e)}
    else { setDisplay(e) }
})
document.addEventListener('keydown', (event) => {
    console.log("event.key = " + event.key + "  " + "event.code = " + event.code);
});

//Disable buttons at the beggining

allButtons.forEach(button =>{
    button.disabled = true;
    button.style.color = "black";
})
powerButton.disabled = false;
powerButton.style.color = "rgb(102, 26, 26)";
clearButton.style.color = "white";
operatorButton.forEach(button =>{
    button.style.color = "white";
})
equalsButton.style.color = "white";

//Functions

function power(){
    if(turnOff===true){
        display.textContent = "0";
        turnOff = false;
        allButtons.forEach(button =>{
            button.disabled = false;
        })
        backspaceButton.disabled = true;
        powerButton.style.color = "red";
    } else {
        // clearDisplay();
        // display.textContent = "";
        // turnOff = true;
        // allButtons.forEach(button =>{
        //     button.disabled = true;
        // })
        // powerButton.style.color = "rgb(102, 26, 26)";
        // powerButton.disabled = false;
    }
}

function setDisplay(e){
    if(turnOff===true){
        return;
    } else {
        if(e.type === "click"){
            if(this.textContent === "0" && display.textContent === "0"){
                return;
            } else {
                functionEnabled = true;
                backspaceButton.disabled = false;
                if(switchNumber === false){
                    if(a.length<=8){
                    a += this.textContent;
                    display.textContent = a;
                    firstNumber = Number(a);
                    }
                } else {
                    if(b.length<=8){
                        b += this.textContent;
                        display.textContent = b;
                        secondNumber = Number(b);
                    }
                }
            }
        } else {
            if(e.key === "0" && display.textContent === "0"){
                return;
            } else if(e.key === "0"||e.key === "1"||e.key === "2"||
                e.key === "3"||e.key === "4"||e.key === "5"||e.key === "6"||
                e.key === "7"||e.key === "8"||e.key === "9"||e.key === "."){
                    functionEnabled = true;
                    backspaceButton.disabled = false;
                    if(switchNumber === false){
                        if(a.length<=8){
                        a += e.key;
                        display.textContent = a;
                        firstNumber = Number(a);
                        }
                    } else {
                        if(b.length<=8){
                            b += e.key;
                            display.textContent = b;
                            secondNumber = Number(b);
                        }
                    }
            }

        }
    
    }

}

function getDecimals(){
    if(this.textContent === "0" && display.textContent === "0"){

    } else {
        backspaceButton.disabled = false;
        if(switchNumber === false){
            if(a.length<=8){
                if(a.includes(".")){
                    pointButton.disabled = true;
                } else {
                    a += this.textContent;
                    display.textContent = a;
                }
            }
        } else {
            if(b.length<=8){
                if(b.includes(".")){
                    pointButton.disabled = true;
                } else {
                    b += this.textContent;
                    display.textContent = b;
                }
            }
        }
    }

}

function undoLastInput(){
    let newNumber = "";
    if(!functionEnabled){
        return;
    } else {
        if(a.length===1){
            if(result!=0){
                return;
            } else {
                display.textContent = "0";
                a = "";
                firstNumber = 0;
                backspaceButton.disabled = true;
                functionEnabled = false;
            }
        } else if(b.length===1){
                display.textContent = "0";
                b = "";
                secondNumber = 0;
                backspaceButton.disabled = true;
                functionEnabled = false;
        } else {
            if(switchNumber===false){
                if(result!=0){
                    return;
                } else {
                    console.log(a);
                    newNumber = a.slice(0, -1);
                    display.textContent = newNumber;
                    console.log(newNumber);
                    a = newNumber;
                    firstNumber = Number(a);
                }
            } else {
                    console.log(b);
                    newNumber = b.slice(0, -1);
                    display.textContent = newNumber;
                    console.log(newNumber);
                    b = newNumber;
                    secondNumber = Number(b);
            }
        }
    }
}

function changeSign(){
    console.log(switchNumber);
    if(display.textContent === "0"){
        console.log("Cannot change sign to zero")
    } else {
        if(switchNumber === false){
            if(result != 0 && result > 0){
                result = -Math.abs(result);
                display.textContent = result;
                firstNumber = result;
            } else if(result !=0 && result < 0){
                result = Math.abs(result);
                display.textContent = result;
                firstNumber = result;
            } else if(Number(a)>0){
                a = -Math.abs(a)
                display.textContent = a;
                firstNumber = Number(a);
            } else if (Number(a)<0){
                a = Math.abs(a);
                display.textContent = a;
                firstNumber = Number(a);
            } 
        } else {
            if(Number(b)>0){
                b = -Math.abs(b);
                display.textContent = b;
                secondNumber = Number(b);
            } else if(Number(b)<0){
                b = Math.abs(b);
                display.textContent = b;
                secondNumber = Number(b);
            } else if(result != 0 && result > 0){
                result = -Math.abs(result);
                display.textContent = result;
                firstNumber = result;
            } else if(result !=0 && result < 0){
                result = Math.abs(result);
                display.textContent = result;
                firstNumber = result;
            } 
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
    // console.clear();
    backspaceButton.disabled = true;
    functionEnabled = false;
}

function setOperator(e){
    if(e.type === "click"){
        if(op===""){
            op = this.textContent;
            switchNumber = true;
            pointButton.disabled = false;
            operator = op;
            this.style.color = "red";
            functionEnabled = true;
        } else {
            if(secondNumber != ""){
                operate();
                firstNumber = result;
                switchNumber = true;
                pointButton.disabled = false;
                functionEnabled = true;
                op = this.textContent;
                console.log("The first number is: " + firstNumber);
                operator = op;
                this.style.color = "red";
                b = "";
                secondNumber = "";
            } else {
                firstNumber = result;
                switchNumber = true;
                functionEnabled = true;
                op = this.textContent;
                operator = op;
                operatorButton.forEach(button =>{
                    button.style.color = "white";
                })
                this.style.color = "red";
                b = "";
                secondNumber = "";
            }
        }
    } else {
        if(op===""){
            op = e.key;
            switchNumber = true;
            pointButton.disabled = false;
            operator = op;
            functionEnabled = true;
        } else {
            if(secondNumber != ""){
                operate();
                firstNumber = result;
                switchNumber = true;
                pointButton.disabled = false;
                functionEnabled = true;
                op = e.key;
                console.log("The first number is: " + firstNumber);
                operator = op;
                b = "";
                secondNumber = "";
            } else {
                firstNumber = result;
                switchNumber = true;
                functionEnabled = true;
                op = e.key;
                operator = op;
                operatorButton.forEach(button =>{
                    button.style.color = "white";
                })
                b = "";
                secondNumber = "";
            }
        }

    }
}

function operate(a,b,op){
    console.log("first number: " + firstNumber);
    console.log("operator is: " + operator);
    console.log("second number: " + secondNumber);
    if (a === 0){
        display.textContent = "0";
        a = 0;
        firstNumber = 0;
    } else {
        if(operator==="+"){
            result = add(firstNumber,secondNumber);
        } else if(operator==="-"){
            result = subtract(firstNumber,secondNumber);
        } else if(operator==="*"){
            result = multiply(firstNumber,secondNumber);
        } else if(operator==="/"){
            if (secondNumber === 0){
                display.textContent = "Error";
                console.log("Error")
            } else {
                result = divide(firstNumber,secondNumber);
            }
        }
        if(result===""){

        } else {
            if(result.toString().length>9){
                let newResult = "";
                newResult = result.toString().substr(0,9);
                console.log("The result is: " + result);
                if(Number(newResult) % 1 != 0){
                    display.textContent = result.toFixed(8-newResult.indexOf("."));
                } else {
                    console.log("The result is: " + result);
                    display.textContent = Math.round(result);
                }
            } else {
                console.log("The result is: " + result);
                display.textContent = result;
            }
        }
        operatorButton.forEach(button =>{
            button.style.color = "white";
        })
        op = "";
        operator = "";
        switchNumber = false;
        pointButton.disabled = false;
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

