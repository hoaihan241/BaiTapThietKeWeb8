function tinhCanChi() {
    let namInput = document.getElementById("namDuong").value;
    let ketQua = document.getElementById("canChi");

    // 1. Kiểm tra Validate (Tính hợp lệ)
    if (namInput.trim() === "") {
        alert("Vui lòng nhập năm dương lịch!");
        ketQua.value = "";
        return;
    }

    let nam = parseInt(namInput);

    // Kiểm tra xem dữ liệu nhập vào có phải là số nguyên dương hay không
    if (isNaN(nam) || nam <= 0) {
        alert("Lỗi: Năm dương lịch phải là một số nguyên lớn hơn 0!");
        ketQua.value = "";
        return;
    }

    // 2. Xử lý thuật toán tìm Can Chi bằng phép chia lấy phần dư (Modulo)
    // Mảng 10 Can
    const mangCan = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
    // Mảng 12 Chi
    const mangChi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];

    // Công thức tiêu chuẩn: Can = năm % 10, Chi = năm % 12
    let can = mangCan[nam % 10];
    let chi = mangChi[nam % 12];
    
    // Viết thường chữ cái đầu của Chi (ví dụ: chuyển "Mùi" thành "mùi") để giống với ảnh mẫu "Ất mùi"
    let chiLower = chi.toLowerCase();

    // 3. Xuất kết quả
    ketQua.value = can + " " + chiLower;
}