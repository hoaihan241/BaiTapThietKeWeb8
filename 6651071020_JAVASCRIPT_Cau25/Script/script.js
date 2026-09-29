// Bảng giá chi tiết lấy từ dữ liệu hình ảnh
const bangGia = {
    "Bún bò": 20000,
    "Hủ tiếu": 18000,
    "Bánh canh": 17000,
    "Phở bò": 19000,
    "Nuôi": 15000,
    "Bánh mì thịt": 12000,
    "Bánh cuốn": 15000,
    "Cà phê đá": 12000,
    "Cà phê sữa": 15000,
    "Chanh dây": 13000,
    "Chanh muối": 12000,
    "Xí muội": 14000,
    "Sữa tươi": 13000,
    "Cam vắt": 17000
};

function tinhTien() {
    let thucAnSelect = document.getElementById("thucAn");
    let nuocUongSelect = document.getElementById("nuocUong");
    
    // Mảng chứa tên các món khách đã chọn
    let danhSachDaChon = [];
    
    // Quét các món ăn được bôi đen (selected)
    for (let option of thucAnSelect.selectedOptions) {
        danhSachDaChon.push(option.value);
    }
    
    // Quét các nước uống được bôi đen (selected)
    for (let option of nuocUongSelect.selectedOptions) {
        danhSachDaChon.push(option.value);
    }
    
    // Nếu chưa chọn món nào thì báo lỗi và dừng lại
    if (danhSachDaChon.length === 0) {
        alert("Vui lòng chọn ít nhất một món ăn hoặc thức uống!");
        return;
    }
    
    // Lấy trạng thái thời điểm (Ngày hay Đêm)
    let isBanDem = document.querySelector('input[name="thoiDiem"][value="dem"]').checked;
    
    // Khởi tạo khung HTML cho bảng kết quả
    let ketQuaHTML = `
        <tr>
            <th>Các món đã dùng</th>
            <th>Tiền</th>
        </tr>
    `;
    
    let tongTienGoc = 0;
    
    // Duyệt qua từng món đã chọn, lấy giá tiền, cộng dồn và tạo dòng HTML
    for (let tenMon of danhSachDaChon) {
        let giaTien = bangGia[tenMon];
        tongTienGoc += giaTien;
        
        ketQuaHTML += `
            <tr>
                <td>${tenMon}</td>
                <td>${giaTien}</td>
            </tr>
        `;
    }
    
    // Áp dụng phụ phí nếu là ban đêm (+10% tổng tiền)
    let tongTienPhaiTra = tongTienGoc;
    if (isBanDem) {
        tongTienPhaiTra = tongTienGoc + (tongTienGoc * 0.10);
    }
    
    // Thêm dòng Tổng tiền vào cuối bảng
    ketQuaHTML += `
        <tr>
            <td>Tổng tiền</td>
            <td>${tongTienPhaiTra} đồng</td>
        </tr>
    `;
    
    // Gắn đoạn HTML vừa tạo vào bảng trống trên giao diện
    document.getElementById("resultTable").innerHTML = ketQuaHTML;
}