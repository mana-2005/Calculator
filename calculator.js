function add() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let secondN = Number(document.getElementById("secondNumber").value);

    alert("Addition of " + firstN + " & " + secondN + " is : " + (firstN + secondN));
}

function sub() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let secondN = Number(document.getElementById("secondNumber").value);

    alert("Subtraction of " + firstN + " & " + secondN + " is : " + (firstN - secondN));
}

function mult() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let secondN = Number(document.getElementById("secondNumber").value);

    alert("Multiplication of " + firstN + " & " + secondN + " is : " + (firstN * secondN));
}

function div() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let secondN = Number(document.getElementById("secondNumber").value);

    if (secondN === 0) {
        alert("Error: Division by zero is not allowed.");
        return;
    }
    alert("Division of " + firstN + " & " + secondN + " is : " + (firstN / secondN).toFixed(2));
}

function fact() {
    let firstN = Number(document.getElementById("firstNumber").value);
    if (firstN < 0) {
        alert("Error: Factorial is not defined for negative numbers.");
        return;
    }
    
    let fact = 1;
    for (let i = 1; i <= firstN; i++) {
        fact *= i;
    }

    alert("Factorial of " + firstN + " is : " + fact);
}

function mod() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let secondN = Number(document.getElementById("secondNumber").value);

    alert("Modulus of " + firstN + " & " + secondN + " is : " + (firstN % secondN));
}

function sin() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let result = Math.sin(firstN * Math.PI / 180);

    alert("Sin of " + firstN + " degrees is : " + result.toFixed(2));
}

function log() {
    let firstN = Number(document.getElementById("firstNumber").value);
    if (firstN <= 0) {
        alert("Error: Logarithm is only defined for positive numbers.");
        return;
    }

    let result = Math.log(firstN);
    alert("Log of " + firstN + " is : " + result.toFixed(2));
}

function expo() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let result = Math.exp(firstN);

    alert("Exponential of " + firstN + " is : " + result.toFixed(2));
}

function AC() {
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
}
