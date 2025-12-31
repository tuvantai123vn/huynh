# 🚀 Hướng Dẫn Deploy Lên Vercel

## Cách 1: Deploy bằng Vercel CLI (Nhanh nhất - 5 phút) ⭐

### Bước 1: Cài đặt Vercel CLI
```bash
npm i -g vercel
```

### Bước 2: Đăng nhập Vercel
```bash
vercel login
```

### Bước 3: Deploy
```bash
cd /Volumes/document/Huynh
vercel
```

### Bước 4: Làm theo hướng dẫn
- Chọn scope (personal hoặc team)
- Link với project hiện có? → **N** (No)
- Project name? → Nhấn Enter (hoặc đặt tên)
- Directory? → **client** (quan trọng!)
- Override settings? → **N** (No)

### Bước 5: Xong!
Bạn sẽ nhận được link như: `https://your-project.vercel.app`

---

## Cách 2: Deploy qua Vercel Dashboard (Qua GitHub)

### Bước 1: Push code lên GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Bước 2: Đăng nhập Vercel
1. Truy cập: https://vercel.com
2. Đăng nhập bằng GitHub

### Bước 3: Import Project
1. Click **"Add New..."** → **"Project"**
2. Chọn repository của bạn
3. Click **"Import"**

### Bước 4: Cấu hình
- **Framework Preset**: Other
- **Root Directory**: `client` ⚠️ Quan trọng!
- **Build Command**: `npm install && npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

### Bước 5: Deploy
1. Click **"Deploy"**
2. Đợi vài phút
3. Xong! Bạn sẽ có link trực tuyến

---

## ⚙️ Cấu hình đã sẵn sàng

File `vercel.json` đã được cấu hình sẵn với:
- Build command: `cd client && npm install && npm run build`
- Output directory: `client/build`
- Rewrites cho React Router (nếu có)

---

## 🔄 Deploy lại sau khi sửa code

### Nếu dùng Vercel CLI:
```bash
vercel --prod
```

### Nếu dùng GitHub:
- Chỉ cần push code lên GitHub
- Vercel sẽ tự động deploy lại

---

## 📝 Lưu ý

1. ✅ **Root Directory**: Phải là `client` (không phải root)
2. ✅ **Build đã thành công**: File build đã sẵn sàng trong `client/build`
3. ✅ **Miễn phí**: Vercel miễn phí cho project cá nhân
4. ✅ **Tự động deploy**: Mỗi lần push code sẽ tự động deploy

---

## 🎉 Sau khi deploy

Bạn sẽ có link như:
- `https://your-project.vercel.app`
- Hoặc custom domain nếu bạn setup

**Chia sẻ link này cho crush của bạn! 💕**

