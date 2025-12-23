import React from "react";

const DownloadApp = () => {
  return (
    <section className="home-entry w-full py-16 overflow-hidden">
       <div className="max-w-[1200px] mx-auto px-4">
        {/* Button Tiêu đề: Sản phẩm nổi bật */}
        <div className="flex justify-center mb-3">
          <div className="flex items-center gap-4 bg-gradient-to-r from-white via-[#CEF2FF] to-white border border-[#b3e5fc] px-5 py-2 rounded-full shadow-sm relative overflow-hidden">
            {/* Dấu chấm trang trí hai bên */}
            <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#9fdff6] to-[#2e8daf] shadow-inner"></div>
            <h2 className="text-[28px] font-bold text-[#337B9D] tracking-wider uppercase">
              TẢI APP
            </h2>
            <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#9fdff6] to-[#2e8daf] shadow-inner"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Bên trái: Ảnh Điện thoại (down-img) */}
          <div className="w-full lg:w-[530px] flex-shrink-0 animate-fade-in-left">
            <img
              src="/src/assets/down-img.3ee350d.png"
              alt="Download App Mobile"
              className="w-full h-auto drop-shadow-2xl object-contain"
            />
          </div>

          {/* Bên phải: Khu vực mã QR và Nút bấm (qr-right) */}
          <div className="flex flex-row gap-8 items-end justify-center w-full">
            {/* Nhóm mã QR Android */}
            <div className="flex flex-col items-center gap-5 group">
              <div className="transition-transform">
                <img
                  src="/src/assets/QRCHPlay.png"
                  alt="QR Android"
                  className="w-[180px] h-[180px]"
                />
              </div>
              {/* Nút Android - Gradient chuẩn từ class .qr-right */}
              <button className="flex items-center w-[318px] h-[85px] bg-gradient-to-b from-[#9fdff6] to-[#2e8daf] border border-[#9fdff6] px-5 rounded-[18px] shadow-[0_4px_15px_rgba(46,141,175,0.4)]">
                {/* Vòng tròn chứa logo: Kích thước chuẩn h-14 w-14 */}
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] shrink-0">
                  <img
                    src="/src/assets/CHplay.png"
                    alt="Google Play"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Phần chữ: Căn lề trái, font chữ to và đậm theo ảnh */}
                <div className="flex flex-col items-start ml-4 leading-tight">
                  <span className="text-2xl opacity-90 uppercase tracking-tighter text-[#D0F3FE]">
                    Bấm để tải xuống
                  </span>
                  <span className="text-3xl font-bold tracking-tighter leading-none ml-8 text-white">
                    ANDROID
                  </span>
                </div>
              </button>
            </div>

            {/* Nhóm mã QR iOS */}
            <div className="flex flex-col items-center gap-5 group">
              <div className="transition-transform">
                <img
                  src="/src/assets/QRIOS.png"
                  alt="QR iOS"
                  className="w-[180px] h-[180px]"
                />
              </div>
              {/* Nút iOS */}
              <button className="flex items-center w-[318px] h-[85px] bg-gradient-to-b from-[#9fdff6] to-[#2e8daf] border border-[#9fdff6] px-5 rounded-[18px] shadow-[0_4px_15px_rgba(46,141,175,0.4)]">
                {/* Vòng tròn chứa logo */}
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] shrink-0">
                  <img
                    src="/src/assets/apple.png"
                    alt="Apple Store"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col items-start ml-4 text-white leading-tight">
                  <span className="text-2xl opacity-90 uppercase tracking-tighter text-[#D0F3FE]">
                    Bấm để tải xuống
                  </span>
                  <span className="text-3xl font-bold tracking-tighter leading-none ml-16 text-white">
                    IOS
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
