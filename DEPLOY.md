# 🚀 Hướng Dẫn Deploy Website Trực Tuyến

Có 2 cách chính để deploy website này:

## Cách 1: Deploy lên Vercel (Đơn giản nhất - Khuyến nghị) ⭐

### Bước 1: Build React App
```bash
cd client
npm run build
```

### Bước 2: Deploy lên Vercel
1. Truy cập: https://vercel.com
2. Đăng nhập bằng GitHub/GitLab/Bitbucket
3. Click "New Project"
4. Import repository của bạn
5. Cấu hình:
   - **Framework Preset**: Other
   - **Root Directory**: `client`
   - **Build Command**: `cd client && npm install && npm run build`
   - **Output Directory**: `client/build`
   - **Install Command**: `cd client && npm install`

6. Click "Deploy"
7. Sau vài phút, bạn sẽ có link trực tuyến!

### Hoặc dùng Vercel CLI:
```bash
npm i -g vercel
cd client
vercel
```

---

---

## Cách 3: Deploy lên Netlify (Chỉ Frontend)

### Bước 1: Build
```bash
cd client
npm run build
```

### Bước 2: Deploy
1. Truy cập: https://netlify.com
2. Đăng nhập
3. Kéo thả thư mục `client/build` vào Netlify
4. Hoặc connect GitHub và chọn:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/build`

---

## Cách 4: Deploy lên GitHub Pages (Miễn phí)

### Bước 1: Cài đặt gh-pages
```bash
cd client
npm install --save-dev gh-pages
```

### Bước 2: Thêm vào `client/package.json`:
```json
"homepage": "https://yourusername.github.io/tet-2026-love-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### Bước 3: Deploy
```bash
npm run deploy
```

---

## ⚡ Cách Nhanh Nhất (Vercel - 5 phút)

1. **Build app:**
```bash
cd client
npm run build
```

2. **Cài Vercel CLI:**
```bash
npm i -g vercel
```

3. **Deploy:**
```bash
cd client
vercel
```

4. **Làm theo hướng dẫn trên terminal**
5. **Xong!** Bạn sẽ có link như: `https://tet-2026-love.vercel.app`

---

## 📝 Lưu ý

- **Vercel/Netlify**: Chỉ deploy frontend (React), không cần backend
- **Render/Railway**: Deploy full stack (cả frontend + backend)
- Website sẽ tự động update khi bạn push code lên GitHub
- Miễn phí cho các project nhỏ

---

## 🔗 Sau khi deploy

Bạn sẽ có link như:
- Vercel: `https://your-project.vercel.app`
- Netlify: `https://your-project.netlify.app`
- Render: `https://your-project.onrender.com`

Chia sẻ link này cho crush của bạn! 💕

