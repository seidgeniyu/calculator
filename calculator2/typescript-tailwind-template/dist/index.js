"use strict";
var display = document.getElementById('display');
function appendNumber(number) {
    display.value += number;
}
function appendOperator(operator) {
    display.value += operator;
}
function clearDisplay() {
    display.value = '';
}
function calculate() {
    var expression = display.value;
    var result = eval(expression);
    display.value = result;
}
