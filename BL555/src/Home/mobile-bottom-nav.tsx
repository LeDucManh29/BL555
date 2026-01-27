import React, { useState } from "react";
import { Home, Gift, Download, Headphones, User } from "lucide-react";

const MobileBottomNav = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
      {/* Main Navigation Bar */}
      <div className="relative bg-gradient-to-r from-[#4a9fb8] to-[#7bc4d8] shadow-lg">
        <div className="flex items-center justify-around h-16 px-2">
          {/* Trang chủ */}
          <button 
            onClick={() => setActiveTab("home")}
            className="flex flex-col items-center justify-center flex-1 gap-1 transition-colors relative h-full"
          >
            <div className={`relative ${activeTab === "home" ? "text-[#1a3a4a]" : "text-white"} transition-colors`}>
              <Home size={24} strokeWidth={2.5} />
            </div>
            <span className={`relative text-[10px] font-semibold uppercase tracking-wide ${activeTab === "home" ? "text-[#1a3a4a]" : "text-white"} transition-colors`}>
              Trang chủ
            </span>
          </button>

          {/* Khuyến mãi */}
          <button 
            onClick={() => setActiveTab("promotion")}
            className="flex flex-col items-center justify-center flex-1 gap-1 transition-colors relative h-full"
          >
            <div className={`relative ${activeTab === "promotion" ? "text-[#1a3a4a]" : "text-white"} transition-colors`}>
              <Gift size={24} strokeWidth={2.5} />
            </div>
            <span className={`relative text-[10px] font-semibold uppercase tracking-wide ${activeTab === "promotion" ? "text-[#1a3a4a]" : "text-white"} transition-colors`}>
              Khuyến mãi
            </span>
          </button>

          {/* Tải app */}
          <button 
            onClick={() => setActiveTab("download")}
            className="flex flex-col items-center justify-center flex-1 gap-1 transition-colors relative h-full"
          >
            <div className={`relative ${activeTab === "download" ? "text-[#1a3a4a]" : "text-white"} transition-colors`}>
              <Download size={24} strokeWidth={2.5} />
              {/* Badge Image */}
              <img 
                src="https://www.36588555.com/m/down-icon-bg.c8461630.png" 
                alt="badge"
                className="absolute -top-4 -right-3 w-8 h-auto"
              />
            </div>
            <span className={`relative text-[10px] font-semibold uppercase tracking-wide ${activeTab === "download" ? "text-[#1a3a4a]" : "text-white"} transition-colors`}>
              Tải app
            </span>
          </button>

          {/* CSKH 24/7 */}
          <button 
            onClick={() => setActiveTab("support")}
            className="flex flex-col items-center justify-center flex-1 gap-1 transition-colors relative h-full"
          >
            <div className={`relative ${activeTab === "support" ? "text-[#1a3a4a]" : "text-white"} transition-colors`}>
              <Headphones size={24} strokeWidth={2.5} />
            </div>
            <span className={`relative text-[10px] font-semibold uppercase tracking-wide ${activeTab === "support" ? "text-[#1a3a4a]" : "text-white"} transition-colors`}>
              CSKH 24/7
            </span>
          </button>

          {/* Tài khoản */}
          <button 
            onClick={() => setActiveTab("account")}
            className="flex flex-col items-center justify-center flex-1 gap-1 transition-colors relative h-full"
          >
            <div className={`relative ${activeTab === "account" ? "text-[#1a3a4a]" : "text-white"} transition-colors`}>
              <User size={24} strokeWidth={2.5} />
            </div>
            <span className={`relative text-[10px] font-semibold uppercase tracking-wide ${activeTab === "account" ? "text-[#1a3a4a]" : "text-white"} transition-colors`}>
              Tài khoản
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;
