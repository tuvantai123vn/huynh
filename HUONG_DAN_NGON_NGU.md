# 🌐 Hướng Dẫn Sử Dụng Đa Ngôn Ngữ

## ✅ Đã hoàn thành

Website đã được tích hợp hệ thống đa ngôn ngữ (Tiếng Việt và Tiếng Trung) với:

### Tên đã cấu hình:
- **Tiếng Việt**: "Huỳnh"
- **Tiếng Trung**: "小黄"

### Tính năng:
- ✅ Nút chuyển ngôn ngữ ở góc trên bên phải
- ✅ Tự động lưu lựa chọn ngôn ngữ
- ✅ Tất cả nội dung tự động chuyển đổi
- ✅ Tên hiển thị đúng theo ngôn ngữ đã chọn

## 📝 Cách sử dụng

### 1. Thay đổi tên
Mở file: `client/src/config/personConfig.js`

```javascript
export const personConfig = {
  nameVI: 'Huỳnh',      // Tên tiếng Việt
  nameZH: '小黄',        // Tên tiếng Trung
  senderNameVI: 'Anh',  // Tên người gửi (tiếng Việt)
  senderNameZH: '我',    // Tên người gửi (tiếng Trung)
};
```

### 2. Chuyển ngôn ngữ
- Click vào nút ngôn ngữ ở góc trên bên phải
- Chọn 🇻🇳 Tiếng Việt hoặc 🇨🇳 中文
- Website sẽ tự động cập nhật

## 🎯 Các phần đã hỗ trợ đa ngôn ngữ

- ✅ Hero section
- ✅ Countdown
- ✅ Interactive Wishes
- ✅ Love Message
- ✅ Wish
- ✅ Fireworks
- ✅ iPhone Special

## 💡 Lưu ý

- Ngôn ngữ được lưu tự động trong localStorage
- Khi quay lại website, ngôn ngữ sẽ được giữ nguyên
- Tên sẽ tự động thay đổi theo ngôn ngữ đã chọn

