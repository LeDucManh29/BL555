import React from "react";

const Features = () => {
  const featureList = [
    {
      title: "THƯƠNG HIỆU UY TÍN",
      desc: "Thương hiệu đáng tin cậy nhất Châu Á. Nhiều năm liên tục được bình chọn 5 sao",
      icon: "icon1.0790349.png",
    },
    {
      title: "SẢN PHẨM ĐA DẠNG",
      desc: "Casino, Thể Thao, Nổ hũ, Bắn cá, Xổ Số. Sản phẩm đa dạng tùy bạn chọn lựa.",
      icon: "icon2.dcd35f3.png",
    },
    {
      title: "AN NINH BẢO MẬT",
      desc: "Đa dạng trong phương thức thanh toán. An toàn và bảo mật thông tin.",
      icon: "icon3.c1201ea.png",
    },
    {
      title: "GIAO DỊCH NHANH CHÓNG",
      desc: "Hệ thống xử lý tự động tiên tiến nhất. Tốc độ nạp rút cực kỳ nhanh chóng",
      icon: "icon4.a1234ea.png",
    },
  ];

  return (
    <div className="w-ful py-12 px-4 md:px-0 features-responsive">
      <div className="max-w-[1200px] mx-auto">
        {/* Tiêu đề chính */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4 bg-gradient-to-r from-white via-[#CEF2FF] to-white border border-[#b3e5fc] px-5 py-2 rounded-full shadow-sm relative overflow-hidden">
            {/* Dấu chấm trang trí hai bên */}
            <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#9fdff6] to-[#2e8daf] shadow-inner"></div>
            <h2 className="text-[28px] font-bold text-[#337B9D] tracking-wider uppercase">
              TÍNH NĂNG VƯỢT TRỘI
            </h2>
            <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#9fdff6] to-[#2e8daf] shadow-inner"></div>
          </div>
        </div>

        {/* Danh sách tính năng */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {featureList.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-2 transition-all duration-300 hover:bg-slate-50 cursor-default
                ${
                  index !== featureList.length - 1
                    ? "lg:border-r border-[#d0f3fe]"
                    : ""
                }
              `}
            >
              {/* Icon */}
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <img
                  src={`/assets/${item.icon}`}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain drop-shadow-md"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                <h3 className="text-[#003366] font-extrabold text-[15px] leading-tight uppercase tracking-tight">
                  {item.title}
                </h3>
                <p
                  className="text-[#337B9D] text-[11px] leading-snug"
                  style={{
                    whiteSpace: "normal",
                    minHeight: "2.4em",
                    width: "210px",
                    wordBreak: "break-word",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .features-responsive {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Features;
