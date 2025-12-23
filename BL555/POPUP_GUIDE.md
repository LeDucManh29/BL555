# BL555 - Hướng dẫn Popup Login/Register

## Tổng quan

Ứng dụng đã được cập nhật để hiển thị **popup Login và Register** trực tiếp trên trang Home thay vì chuyển hướng sang trang riêng.

## Cách hoạt động

### 1. **Trên trang Home**

Khi người dùng click vào:
- **Nút "Đăng ký"** → Hiển thị popup Register
- **Nút "Đăng nhập"** → Hiển thị popup Login

### 2. **Trong popup Login**

- **Nút "X" (đóng)** → Đóng popup, quay về trang Home
- **Nút "Đăng ký"** → Đóng popup Login, mở popup Register

### 3. **Trong popup Register**

- **Nút "X" (đóng)** → Đóng popup, quay về trang Home
- **Link "Đăng nhập"** → Đóng popup Register, mở popup Login

## Cấu trúc Code

### Home Component (src/Home/index.tsx)

```typescript
const Home = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  return (
    <div>
      <Header 
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />
      
      {/* Các component khác */}
      
      {/* Popup Login */}
      {showLogin && <Login 
        onClose={() => setShowLogin(false)} 
        onSwitchToRegister={() => {
          setShowLogin(false)
          setShowRegister(true)
        }} 
      />}
      
      {/* Popup Register */}
      {showRegister && <Register 
        onClose={() => setShowRegister(false)} 
        onSwitchToLogin={() => {
          setShowRegister(false)
          setShowLogin(true)
        }} 
      />}
    </div>
  )
}
```

### Header Component (src/Home/header.tsx)

```typescript
interface HeaderProps {
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick }) => {
  return (
    <header>
      <button onClick={onRegisterClick}>Đăng ký</button>
      <button onClick={onLoginClick}>Đăng nhập</button>
    </header>
  )
}
```

### Login Component (src/login/index.tsx)

```typescript
interface LoginProps {
  onClose?: () => void;
  onSwitchToRegister?: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose, onSwitchToRegister }) => {
  const handleClose = () => {
    if (onClose) {
      onClose(); // Đóng popup
    } else {
      navigate("/"); // Fallback: chuyển về trang chủ
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50">
      <button onClick={handleClose}>X</button>
      <button onClick={onSwitchToRegister}>Đăng ký</button>
    </div>
  )
}
```

### Register Component (src/register/index.tsx)

```typescript
interface RegisterProps {
  onClose?: () => void;
  onSwitchToLogin?: () => void;
}

export default function Register({ onClose, onSwitchToLogin }: RegisterProps) {
  const handleClose = () => {
    if (onClose) {
      onClose(); // Đóng popup
    } else {
      navigate("/"); // Fallback: chuyển về trang chủ
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60">
      <button onClick={handleClose}>X</button>
      <button onClick={onSwitchToLogin}>Đăng nhập</button>
    </div>
  )
}
```

## Ưu điểm của cách làm này

1. **Trải nghiệm người dùng tốt hơn**: Không cần chuyển trang, popup hiển thị ngay lập tức
2. **Linh hoạt**: Có thể dễ dàng chuyển đổi giữa Login và Register
3. **Tương thích ngược**: Vẫn có thể truy cập trực tiếp `/login` và `/register` qua URL
4. **Dễ bảo trì**: Props rõ ràng, logic tách biệt

## Chạy ứng dụng

```bash
npm run dev
```

Mở trình duyệt tại: `http://localhost:5173`

## Lưu ý

- Popup có background overlay (màu đen mờ) để tập trung vào form
- Có animation fade-in/zoom-in khi popup xuất hiện
- Click nút "X" hoặc ESC (có thể thêm) để đóng popup
- Popup được hiển thị với `z-index` cao để nằm trên tất cả các element khác
