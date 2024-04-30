var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var addBtn = document.getElementById("add");
var subtractBtn = document.getElementById("subtract");
var multiplyBtn = document.getElementById("multiply");
var divideBtn = document.getElementById("divide");
var squareBtn = document.getElementById("square");
var squareRootBtn = document.getElementById("squareRoot");
var resetBtn = document.getElementById("reset");
var printResult = document.getElementById("result");
function Addnumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    printResult.textContent = result.toString();
}
addBtn.addEventListener("click", Addnumbers);
function Subtractnumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    printResult.textContent = result.toString();
}
subtractBtn.addEventListener("click", Subtractnumbers);
function Multiplnumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    printResult.textContent = result.toString();
}
multiplyBtn.addEventListener("click", Multiplnumbers);
function Dividnumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    if (b !== 0) {
        var result = a / b;
        printResult.textContent = result.toString();
    }
    else {
        printResult.textContent = "Cannot divide by zero";
    }
}
divideBtn.addEventListener("click", Dividnumbers);
function Square() {
    var a = parseFloat(number1.value);
    var result = a * a;
    printResult.textContent = result.toString();
}
squareBtn.addEventListener("click", Square);
function SquareRoot() {
    var a = parseFloat(number1.value);
    if (a >= 0) {
        var result = Math.sqrt(a);
        printResult.textContent = result.toString();
    }
    else {
        printResult.textContent = "Sorry this number have not saqure Root.";
    }
}
squareRootBtn.addEventListener("click", SquareRoot);
function reset() {
    number1.value = '';
    number2.value = '';
    printResult.textContent = '';
}
resetBtn.addEventListener("click", reset);
