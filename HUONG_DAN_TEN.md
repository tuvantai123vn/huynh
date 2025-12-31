# 📝 Hướng Dẫn Thêm Tên

## Cách thêm tên vào website

### Bước 1: Mở file cấu hình
Mở file: `client/src/config/personConfig.js`

### Bước 2: Thay đổi tên
Tìm dòng này và thay đổi:
```javascript
export const personConfig = {
  // Thay đổi tên ở đây
  name: 'Linh',  // ← Thay 'Linh' thành tên crush của bạn
  
  // Tên đầy đủ (tùy chọn)
  fullName: 'Nguyễn Thị Linh',  // ← Có thể để trống nếu không cần
  
  // Tên của bạn (người gửi)
  senderName: 'Minh',  // ← Thay 'Minh' thành tên của bạn
};
```

### Bước 3: Lưu và kiểm tra
Sau khi thay đổi, tên sẽ tự động xuất hiện ở:
- ✅ Hero section: "Gửi đến [Tên] - một người đặc biệt"
- ✅ Tất cả các lời chúc
- ✅ Thư tình
- ✅ Pháo hoa khi đến Tết
- ✅ iPhone special message

## Ví dụ

Nếu tên crush là **"Linh"** và tên bạn là **"Minh"**:

```javascript
export const personConfig = {
  name: 'Linh',
  fullName: 'Nguyễn Thị Linh',  // Tùy chọn
  senderName: 'Minh',
};
```

Website sẽ hiển thị:
- "Gửi đến Linh - một người đặc biệt"
- "Chúc Linh một năm mới..."
- "Minh rất vui khi được quen biết Linh!"
- v.v...

## Lưu ý

- Chỉ cần thay đổi ở **một nơi duy nhất** (file `personConfig.js`)
- Tất cả các component sẽ tự động cập nhật
- Không cần sửa code ở bất kỳ đâu khác!

