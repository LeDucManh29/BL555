import { Crown, Smartphone } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Dices,
  Sparkles,
  Fish,
  Activity,
  Gamepad2,
  Settings,
  Gamepad,
  Gift,
  Users,
  Video,
} from "lucide-react";

interface HeaderProps {
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <header className="relative z-[800] w-full select-none font-sans">
      {/* 1. Header Top: Chứa Khu vực Đăng nhập/Đăng ký */}
      <div
        className="flex justify-center h-[90px] border-b border-[#337b9d] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.36588555.com/res/img/header-bg.5235096.gif')`,
        }}
      >
        <div className="flex items-center justify-between w-[1200px] px-4">
          {/* Khu vực bên phải: Login/Register & Sub-menu */}
          <div className="flex flex-col items-end gap-[10px] ml-auto">
            {/* Hàng trên: Buttons & Language */}
            <div className="flex items-center gap-4">
              {/* Nút Đăng ký (Register) với Badge +58K */}
              <div className="relative group">
                <button 
                  onClick={onRegisterClick}
                  className="flex items-center justify-center whitespace-nowrap transition-all duration-200 px-[10px] py-[8.5px] min-w-[157px] h-[36px] text-[16px] font-bold text-[#337b9d] bg-gradient-to-r from-[#fff] via-[#cbf1ff] to-[#fff] border border-[#9fdff6] rounded-full hover:brightness-110"
                >
                  Đăng ký
                </button>
                {/* Bonus Tip Badge */}
                <div className="absolute -top-[5px] -right-[18px] flex items-center justify-center h-[22px] px-2 bg-gradient-to-b from-red-600 to-[#900] border border-[#ffdfdf] rounded-full shadow-lg">
                  <span className="text-[14px] font-black text-white shadow-sm">
                    +58K
                  </span>
                </div>
              </div>

              {/* Nút Đăng nhập (Login) */}
              <button 
                onClick={onLoginClick}
                className="flex items-center justify-center whitespace-nowrap transition-all duration-200 px-[10px] py-[8.5px] min-w-[157px] h-[36px] text-[16px] font-bold text-white bg-gradient-to-b from-[#9fdff6] to-[#2e8daf] rounded-full hover:brightness-110 shadow-md"
              >
                Đăng nhập
              </button>

              {/* Bộ chọn ngôn ngữ */}
              <div
                className="relative"
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <img
                    src="src/assets/VN.svg"
                    alt="VN"
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <svg
                    className={`w-4 h-4 text-white transition-transform ${
                      isLangOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Khoảng cách invisible để nối trigger với popup */}
                {isLangOpen && (
                  <div className="absolute top-full right-0 w-[220px] h-[5px]" />
                )}

                {/* Dropdown Ngôn ngữ (Dựa trên class .option_list) */}
                {isLangOpen && (
                  <ul className="absolute top-[calc(100%+5px)] right-0 z-[1000] flex flex-col w-[220px] bg-white rounded-[10px] shadow-[inset_0_-3.55px_4.733px_0_rgba(0,0,0,0.25)] overflow-hidden">
                    <li className="flex items-center gap-4 h-[60px] px-4 text-[#337b9d] font-bold hover:bg-gray-100 cursor-pointer">
                      <img
                        src="src/assets/VN.svg"
                        className="w-8 h-8 rounded-full object-cover"
                        alt="VN"
                      />
                      Tiếng Việt
                    </li>
                    <li className="flex items-center gap-4 h-[60px] px-4 text-[#337b9d] font-bold hover:bg-gray-100 cursor-pointer">
                      <img
                        src="src/assets/US.svg"
                        className="w-8 h-8 rounded-full object-cover"
                        alt="EN"
                      />
                      English
                    </li>
                  </ul>
                )}
              </div>
            </div>

            {/* Hàng dưới: Links phụ */}
            <div className="flex gap-4 text-[17px] font-normal text-[#d1b441]">
              <span className="hover:text-white cursor-pointer transition-colors">
                Giới thiệu bạn nhận thưởng
              </span>
              <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                <Crown className="w-4 h-4" /> VIP
              </div>
              <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                <Smartphone className="w-4 h-4" /> Tải app
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Header Bottom: Thanh điều hướng Trò chơi (Dựa trên class .header_bottom) */}
      <nav className="h-[56px] bg-gradient-to-r from-white via-[#4b9bb6] to-white flex justify-center">
        <div className="w-[1200px] h-full mr-28">
          <ul className="flex justify-between items-center h-full text-white font-normal text-[16px]">
            <li className="px-3 py-2 hover:bg-sky-200/50 hover:text-[#113565] transition-all cursor-pointer border-b-4 border-transparent hover:border-[#113565] h-full flex items-center gap-2 whitespace-nowrap">
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                TRANG CHỦ
              </Link>
            </li>
            <li className="px-3 py-2 hover:bg-sky-200/50 hover:text-[#113565] transition-all cursor-pointer border-b-4 border-transparent hover:border-[#113565] h-full flex items-center gap-2 whitespace-nowrap">
              <Dices className="w-5 h-5" />
              CASINO
            </li>
            <li className="px-3 py-2 hover:bg-sky-200/50 hover:text-[#113565] transition-all cursor-pointer border-b-4 border-transparent hover:border-[#113565] h-full flex items-center gap-2 whitespace-nowrap">
              <Sparkles className="w-5 h-5" />
              NỔ HŨ
            </li>
            <li className="px-3 py-2 hover:bg-sky-200/50 hover:text-[#113565] transition-all cursor-pointer border-b-4 border-transparent hover:border-[#113565] h-full flex items-center gap-2 whitespace-nowrap">
              <Fish className="w-5 h-5" />
              BẮN CÁ
            </li>
            <li className="px-3 py-2 hover:bg-sky-200/50 hover:text-[#113565] transition-all cursor-pointer border-b-4 border-transparent hover:border-[#113565] h-full flex items-center gap-2 whitespace-nowrap">
              <Activity className="w-5 h-5" />
              THỂ THAO
            </li>
            <li className="px-3 py-2 hover:bg-sky-200/50 hover:text-[#113565] transition-all cursor-pointer border-b-4 border-transparent hover:border-[#113565] h-full flex items-center gap-2 whitespace-nowrap">
              <Gamepad2 className="w-5 h-5" />
              GAME BÀI
            </li>
            <li className="px-3 py-2 hover:bg-sky-200/50 hover:text-[#113565] transition-all cursor-pointer border-b-4 border-transparent hover:border-[#113565] h-full flex items-center gap-2 whitespace-nowrap">
              <Settings className="w-5 h-5" />
              XỔ SỐ
            </li>
            <li className="px-3 py-2 hover:bg-sky-200/50 hover:text-[#113565] transition-all cursor-pointer border-b-4 border-transparent hover:border-[#113565] h-full flex items-center gap-2 whitespace-nowrap">
              <Gamepad className="w-5 h-5" />
              ĐÁ GÀ
            </li>
            <li className="px-3 py-2 hover:bg-sky-200/50 hover:text-[#113565] transition-all cursor-pointer border-b-4 border-transparent hover:border-[#113565] h-full flex items-center gap-2 whitespace-nowrap">
              <Gift className="w-5 h-5" />
              KHUYẾN MÃI
            </li>
            <li className="px-3 py-2 hover:bg-sky-200/50 hover:text-[#113565] transition-all cursor-pointer border-b-4 border-transparent hover:border-[#113565] h-full flex items-center gap-2 whitespace-nowrap">
              <Users className="w-5 h-5" />
              ĐẠI LÝ
            </li>
            <li className="h-full flex items-center">
              <button className="bg-gradient-to-r from-[#d95aa9] to-[#8d47de] text-white text-[14px] font-normal px-4 py-2 rounded-full flex items-center gap-2 hover:brightness-110 transition-all uppercase whitespace-nowrap shadow-lg">
                <Video className="w-5 h-5" />
                Xem Live
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
