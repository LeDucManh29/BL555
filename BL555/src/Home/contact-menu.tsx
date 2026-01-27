import React from "react";
import { Send } from "lucide-react";

const ContactMenu = () => {
  const LiveIcon = () => (
    <img src="https://www.36588555.com/m/main-nav-live.551bfc47.png" alt="" className="w-full h-full object-contain"/>
  );

  const AgentIcon = () => (
   <img src="https://www.36588555.com/m/main-nav-agent.55e6d007.png" alt="" className="w-full h-full object-contain"/>
  );

  const TelegramIcon = () => (
   <img src="https://www.36588555.com/m/main-nav-telegram.41173114.png" alt="" className="w-full h-full object-contain"/>
  );

  const InfoIcon = () => (
   <img src="https://www.36588555.com/m/invite.fec9c53c.gif" alt="" className="w-full h-full object-contain"/>
  );

  const VipIcon = () => (
  <img src="https://www.36588555.com/m/main-nav-vip.0e170058.png" alt="" className="w-full h-full object-contain"/>
  );

  const WalletIcon = () => (
  <img src="https://www.36588555.com/m/main-nav-deposit.984a2564.png" alt="" className="w-full h-full object-contain"/>
  );

  const WithdrawIcon = () => (
  <img src="https://www.36588555.com/m/main-nav-withdraw.e0f9c7f6.png" alt="" className="w-full h-full object-contain"/>
  );

  const desktopMenuItems = [
    {
      Icon: () => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-full h-full"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <circle cx="9" cy="11.5" r="1" fill="currentColor" />
          <circle cx="12" cy="11.5" r="1" fill="currentColor" />
          <circle cx="15" cy="11.5" r="1" fill="currentColor" />
        </svg>
      ),
      text: "LIVE CHAT",
      iconColor: "text-[#337B9D]",
    },
    {
      Icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      text: "FACEBOOK",
      iconColor: "text-[#337B9D]",
    },
    {
      Icon: () => <Send size={32} strokeWidth={1.5} />,
      text: "TELEGRAM",
      iconColor: "text-[#337B9D]",
    },
    {
      Icon: () => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-full h-full"
        >
          <rect x="3" y="8" width="18" height="12" rx="2" />
          <path d="M12 8V4M8 8L6 4M16 8l2-4" />
          <path d="M3 12h18" />
        </svg>
      ),
      text: "KHUYẾN MÃI",
      iconColor: "text-[#337B9D]",
    },
    {
      Icon: () => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-full h-full"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      text: "GÓP Ý NHẬN QUÀ",
      iconColor: "text-[#337B9D]",
      fontSize: "text-xs",
    },
  ];

  const mobileMenuItems = [
    { Icon: TelegramIcon, text: "Telegram" },
    { Icon: LiveIcon, text: "XEM LIVE" },
    { Icon: AgentIcon, text: "ĐẠI LÝ" },
    { Icon: InfoIcon, text: "GIỚI THIỆU" },
    { Icon: VipIcon, text: "VIP" },
    { Icon: WalletIcon, text: "Nạp Tiền" },
    { Icon: WithdrawIcon, text: "Rút Tiền" },
  ];

  return (
    <>
      {/* Desktop Menu - Right Side */}
      <div className="fixed right-2 top-4/9 -translate-y-1/2 flex-col gap-1 p-4 z-1000 hidden lg:flex">
        {desktopMenuItems.map((item, index) => {
          const { Icon, text, iconColor, fontSize } = item;
          return (
            <button
              key={index}
              className="group relative bg-gradient-to-r from-white via-[#CEF2FF] to-white rounded-2xl flex flex-col items-center justify-center gap-1 border-2 border-[#337B9D] w-[80px] h-[80px] transition-colors duration-200 overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-b from-[#9fdff6] to-[#2e8daf] z-0"></span>
              <div
                className={`${iconColor} w-[32px] h-[34px] flex items-center justify-center group-hover:text-white transition-colors duration-200 relative z-10`}
              >
                <Icon />
              </div>
              <span
                className={`${iconColor} font-semibold ${
                  fontSize || "text-xs"
                } text-center leading-tight group-hover:text-white transition-colors duration-200 relative z-10`}
              >
                {text}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile Menu - Grid Layout */}
      <div className="lg:hidden bg-gradient-to-r from-white via-[#E8F8FF] to-white py-4 px-4">
        <div className="grid grid-cols-7 gap-2">
          {mobileMenuItems.map((item, index) => {
            const { Icon, text } = item;
            return (
              <button
                key={index}
                className="flex flex-col items-center gap-1.5 cursor-pointer group"
              >
                <div className="w-[30px] h-[30px] transition-transform duration-200 group-active:scale-95">
                  <Icon />
                </div>
                <span className="text-[8px] font-semibold text-[#2C3E50] text-center leading-tight">
                  {text}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ContactMenu;