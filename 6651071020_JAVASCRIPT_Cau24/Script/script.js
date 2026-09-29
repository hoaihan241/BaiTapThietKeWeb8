function xuatThu() {
    // Lấy dữ liệu ngày, tháng, năm từ các ô input
    let ngay = parseInt(document.getElementById("ngay").value);
    let thang = parseInt(document.getElementById("thang").value);
    let nam = parseInt(document.getElementById("nam").value);
    let ketQua = document.getElementById("ketQua");

    // Kiểm tra tính hợp lệ của dữ liệu đầu vào
    if (isNaN(ngay) || isNaN(thang) || isNaN(nam)) {
        ketQua.innerText = "Vui lòng nhập đầy đủ ngày, tháng, năm!";
        ketQua.style.color = "red";
        return;
    }

    // Khởi tạo đối tượng Date. Lưu ý: tháng trong Date bắt đầu từ 0 (0 = Tháng 1, 11 = Tháng 12)
    let dateObj = new Date(nam, thang - 1, ngay);

    // Kiểm tra xem ngày tháng nhập vào có thực sự hợp lệ không (chống trường hợp nhập ngày 31 tháng 2)
    if (dateObj.getFullYear() !== nam || dateObj.getMonth() !== (thang - 1) || dateObj.getDate() !== ngay) {
        ketQua.innerText = "Ngày tháng năm không hợp lệ!";
        ketQua.style.color = "red";
        return;
    }

    // Sử dụng hàm getDay() để lấy thứ (trả về từ 0 đến 6)
    let dayIndex = dateObj.getDay();
    
    // Mảng chuyển đổi chỉ số thành chuỗi hiển thị
    let thuArray = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    let tenThu = thuArray[dayIndex];

    // Cập nhật chuỗi kết quả lên giao diện
    ketQua.innerText = tenThu + " Ngày " + ngay + " tháng " + thang + " năm " + nam;
    ketQua.style.color = "black";
}