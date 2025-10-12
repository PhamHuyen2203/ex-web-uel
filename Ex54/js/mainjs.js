function getValues() {
    let a = parseFloat(document.getElementById("a_coeff").value);
    let b = parseFloat(document.getElementById("b_coeff").value);
    let c = parseFloat(document.getElementById("c_coeff").value);
    return { a, b, c };
}

function calculateMax() {
    let { a, b, c } = getValues();
    let maxVal = Math.max(a, b, c);
    document.getElementById("result").value = maxVal;
}

function calculateMin() {
    let { a, b, c } = getValues();
    let minVal = Math.min(a, b, c);
    document.getElementById("result").value = minVal;
}

function calculateSin() {
    let { a } = getValues();
    let result = Math.sin(a * Math.PI / 180); // chuyển độ sang radian
    document.getElementById("result").value = result;
}

function calculateCos() {
    let { a } = getValues();
    let result = Math.cos(a * Math.PI / 180);
    document.getElementById("result").value = result;
}

function calculatePower() {
    let { a, b } = getValues();
    let result = Math.pow(a, b);
    document.getElementById("result").value = result;
}
