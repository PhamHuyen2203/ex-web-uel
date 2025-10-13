// === Cho phép nhập dữ liệu trực tiếp ===
function enter_data() {
    const input = document.getElementById("input_data");
    input.readOnly = false; // bật cho phép nhập
    input.focus();          // đưa con trỏ vào ô input
    document.getElementById("result").value = ""; // xóa kết quả cũ
}

// === Đếm ký tự viết hoa ===
function count_uppercase() {
    const data = document.getElementById("input_data").value;
    let count = 0;
    for (let ch of data) {
        if (ch >= 'A' && ch <= 'Z') count++;
    }
    document.getElementById("result").value = "Số ký tự viết hoa: " + count;
}

// === Đếm ký tự viết thường ===
function count_lowercase() {
    const data = document.getElementById("input_data").value;
    let count = 0;
    for (let ch of data) {
        if (ch >= 'a' && ch <= 'z') count++;
    }
    document.getElementById("result").value = "Số ký tự viết thường: " + count;
}

// === Chuyển toàn bộ chuỗi thành chữ in hoa ===
function uppercase() {
    const data = document.getElementById("input_data").value;
    document.getElementById("result").value = data.toUpperCase();
}

// === Chuyển toàn bộ chuỗi thành chữ thường ===
function lowercase() {
    const data = document.getElementById("input_data").value;
    document.getElementById("result").value = data.toLowerCase();
}

// === Xuất từng từ trên một dòng ===
function one_word_perline() {
    const data = document.getElementById("input_data").value.trim();
    if (data === "") {
        document.getElementById("result").value = "";
        return;
    }
    const words = data.split(/\s+/);
    document.getElementById("result").value = words.join("\n");
}

// === Đếm số từ ===
function count_word() {
    const data = document.getElementById("input_data").value.trim();
    if (data === "") {
        document.getElementById("result").value = "Số từ: 0";
        return;
    }
    const words = data.split(/\s+/);
    document.getElementById("result").value = "Số từ: " + words.length;
}

// === In nguyên âm và phụ âm, mỗi loại một dòng ===
function print_vowels_consonants() {
    const data = document.getElementById("input_data").value.toLowerCase();
    let vowels = [];
    let consonants = [];

    for (let ch of data) {
        if (/[a-z]/.test(ch)) {
            if ("aeiou".includes(ch)) vowels.push(ch);
            else consonants.push(ch);
        }
    }
    // Mỗi loại hiển thị trên một dòng, mỗi chữ cách nhau bằng khoảng trắng
    document.getElementById("result").value =
        "Nguyên âm:\n" + vowels.join(" ") +
        "\n\nPhụ âm:\n" + consonants.join(" ");
}

// === Mở trang W3C ===
function w3c() {
    window.open("https://www.w3schools.com/", "_blank");
}
