function xoaDong(nutXoa) {
    // nutXoa chính là phần tử <button> được truyền qua từ khóa 'this'
    
    // Sử dụng phương thức closest() để tìm thẻ <tr> (dòng) gần nhất chứa nút bấm này
    let dongCanXoa = nutXoa.closest("tr");
    
    // Kiểm tra xem có tìm thấy thẻ <tr> hay không rồi thực hiện xóa nó khỏi DOM
    if (dongCanXoa) {
        dongCanXoa.remove();
    }
}