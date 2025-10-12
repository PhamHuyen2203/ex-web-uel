function calculate() {
    let a = parseFloat(document.getElementById("a_coeff").value);
    let b = parseFloat(document.getElementById("b_coeff").value);
    let c = parseFloat(document.getElementById("c_coeff").value);
    let result = document.getElementById("result");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.value = "Vui lòng nhập đủ 3 hệ số!";
        return;
    }

    let delta = b*b - 4*a*c;
    if (delta < 0) {
        result.value = "Phương trình vô nghiệm";
    } else if (delta === 0) {
        let x = -b / (2*a);
        result.value = "Nghiệm kép: x = " + x.toFixed(2);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2*a);
        let x2 = (-b - Math.sqrt(delta)) / (2*a);
        result.value = "x₁ = " + x1.toFixed(2) + ", x₂ = " + x2.toFixed(2);
    }
}
