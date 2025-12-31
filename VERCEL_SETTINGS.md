# ⚙️ Thông Số Build and Output Settings cho Vercel

## 📋 Cấu Hình Chính Xác

Khi deploy trên Vercel Dashboard, điền các thông số sau:

### 🔧 Build and Output Settings

| Mục | Giá Trị |
|-----|---------|
| **Framework Preset** | `Other` hoặc `Create React App` |
| **Root Directory** | `client` ⚠️ **QUAN TRỌNG!** |
| **Build Command** | `npm install && npm run build` |
| **Output Directory** | `build` |
| **Install Command** | `npm install` |
| **Development Command** | `npm start` (không bắt buộc) |

---

## 📝 Chi Tiết Từng Mục

### 1. **Framework Preset**
```
Other
```
Hoặc chọn: `Create React App` (nếu có)

### 2. **Root Directory** ⚠️ QUAN TRỌNG NHẤT
```
client
```
**Lý do:** Code React của bạn nằm trong thư mục `client/`, không phải root.

### 3. **Build Command**
```
npm install && npm run build
```
**Hoặc:**
```
cd client && npm install && npm run build
```
(Nếu Root Directory là `client` thì không cần `cd client`)

### 4. **Output Directory**
```
build
```
**Lý do:** Sau khi build, React tạo thư mục `build/` trong `client/`

### 5. **Install Command**
```
npm install
```
**Hoặc:**
```
cd client && npm install
```

### 6. **Development Command** (Tùy chọn)
```
npm start
```

---

## 🎯 Cấu Hình Đầy Đủ (Copy & Paste)

### Nếu Root Directory = `client`:
```
Framework Preset: Other
Root Directory: client
Build Command: npm install && npm run build
Output Directory: build
Install Command: npm install
```

### Nếu Root Directory = `.` (root):
```
Framework Preset: Other
Root Directory: .
Build Command: cd client && npm install && npm run build
Output Directory: client/build
Install Command: cd client && npm install
```

---

## ✅ Khuyến Nghị

**Sử dụng cấu hình này (Root Directory = `client`):**
- ✅ Đơn giản hơn
- ✅ Build command ngắn gọn
- ✅ Output directory rõ ràng

```
Root Directory: client
Build Command: npm install && npm run build
Output Directory: build
Install Command: npm install
```

---

## 🔍 Kiểm Tra Sau Khi Deploy

Sau khi deploy, kiểm tra:
1. ✅ Website load được không?
2. ✅ Tất cả assets (CSS, JS) load đúng không?
3. ✅ Routing hoạt động (nếu có React Router)
4. ✅ Console không có lỗi

---

## 🐛 Nếu Gặp Lỗi

### Lỗi: "Build Command failed"
- Kiểm tra Root Directory có đúng là `client` không
- Kiểm tra Build Command có đúng không

### Lỗi: "Output Directory not found"
- Kiểm tra Output Directory có đúng là `build` không
- Đảm bảo build command chạy thành công

### Lỗi: "Module not found"
- Kiểm tra Install Command có chạy không
- Đảm bảo `package.json` có trong `client/`

---

## 📌 Lưu Ý

1. ⚠️ **Root Directory phải là `client`** - Đây là điều quan trọng nhất!
2. ✅ Output Directory là `build` (không phải `client/build`)
3. ✅ Build Command sẽ chạy trong Root Directory (`client/`)
4. ✅ File `vercel.json` đã được cấu hình sẵn, nhưng bạn vẫn cần điền trên Dashboard

---

**Chúc bạn deploy thành công! 🚀**

