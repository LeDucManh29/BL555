# BL555 - Cấu hình Router

## Tổng quan

Ứng dụng đã được cấu hình với **React Router v6** để điều hướng giữa các trang.

## Cấu trúc Routes

### Routes chính:

| Path | Component | Mô tả |
|------|-----------|-------|
| `/` | `Home` | Trang chủ với đầy đủ sections (Header, Banner, Features, Footer, etc.) |
| `/login` | `Login` | Trang đăng nhập |
| `/register` | `Register` | Trang đăng ký |

## Cách sử dụng

### 1. Điều hướng từ Header

Trong component `Header`, các nút đã được cập nhật:
- **Nút "Đăng ký"** → Chuyển đến `/register`
- **Nút "Đăng nhập"** → Chuyển đến `/login`
- **Link "TRANG CHỦ"** → Chuyển về `/`

### 2. Điều hướng từ Login

- **Nút "X" (đóng)** → Quay về trang chủ `/`
- **Link "Đăng ký"** → Chuyển đến `/register`

### 3. Điều hướng từ Register

- **Nút "X" (đóng)** → Quay về trang chủ `/`
- **Link "Đăng nhập"** → Chuyển đến `/login`

## Code chính

### App.jsx

```javascript
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
```

## Chạy ứng dụng

```bash
npm run dev
```

Sau đó mở trình duyệt tại: `http://localhost:5173`

## Thêm routes mới

Để thêm route mới, cập nhật file `App.jsx`:

```javascript
<Route path="/new-page" element={<NewPage />} />
```

## Dependencies

- `react-router-dom`: ^6.x.x (đã cài đặt)
