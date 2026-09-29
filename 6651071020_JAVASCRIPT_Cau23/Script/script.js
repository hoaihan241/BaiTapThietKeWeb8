function tinhLuong() {
    // Lấy giá trị từ 2 ô input và ép kiểu sang số thực (parseFloat để hỗ trợ hệ số thập phân)
    let luong = parseFloat(document.getElementById("luong").value);
    let heSo = parseFloat(document.getElementById("heSo").value);
    let ketQua = document.getElementById("ketQua");

    // Kiểm tra xem người dùng đã nhập số hợp lệ chưa
    if (isNaN(luong) || isNaN(heSo)) {
        ketQua.innerText = "Vui lòng nhập đủ số liệu!";
        ketQua.style.color = "red"; // Đổi màu đỏ nếu báo lỗi
        return;
    }

    // Thực hiện phép tính: Lương * Hệ số lương
    let luongThang = luong * heSo;

    // Xuất kết quả ra màn hình
    ketQua.innerText = luongThang;
    ketQua.style.color = "black"; // Đảm bảo màu chữ kết quả là màu đen
}