// Hàm thực hiện phép nhân
function multiply() {
    // Lấy giá trị từ các ô input và ép kiểu sang số
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultDisplay = document.getElementById('resultDisplay');

    // Kiểm tra xem người dùng có nhập đúng số không
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.innerText = "Vui lòng nhập số hợp lệ!";
        return;
    }

    // Thực hiện phép tính nhân và cập nhật lên giao diện
    let result = num1 * num2;
    resultDisplay.innerText = result;
}

// Hàm thực hiện phép chia
function divide() {
    // Lấy giá trị từ các ô input và ép kiểu sang số
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultDisplay = document.getElementById('resultDisplay');

    // Kiểm tra xem người dùng có nhập đúng số không
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.innerText = "Vui lòng nhập số hợp lệ!";
        return;
    }

    // Bắt lỗi trường hợp chia cho 0
    if (num2 === 0) {
        resultDisplay.innerText = "Không thể chia cho 0!";
        return;
    }

    // Thực hiện phép tính chia và cập nhật lên giao diện
    let result = num1 / num2;
    resultDisplay.innerText = result;
}