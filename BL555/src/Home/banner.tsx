import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  // Danh sách các thông báo chạy
  const announcements = [
    "⭐⚠️ THÔNG BÁO QUAN TRỌNG-CẢNH GIÁC LỪA ĐẢO ⭐⚠️🔗 Hãy Truy cập trang web chính thức : ✅ 1188555.com , bl555.vip 💎",
    "💸 BL555 thương hiệu uy tín, sản phẩm đa dạng, an ninh bảo mật, giao dịch nhanh chóng, an ninh bảo mật, giao dịch nhanh chóng, dịch vụ khách hàng chuyên nghiệp 24/7.",
    "🔥🔥🔥 CUỐI TUẦN RỰC LỬA – THƯỞNG NGẬP TRÀN 🔥🔥🔥",
    "🔒💰 NẠP RÚT SIÊU TỐC - UY TÍN, AN TOÀN, BẢO MẬT TUYỆT ĐỐI! 💰🔒",
  ];

  // Danh sách đầy đủ các ảnh bạn đã gửi
  const bannerImages = [
    "https://images.6223027.com/mcs-images/announcement/bl55vndkf5/1766041828203_1920x450.png",
    "https://images.6223027.com/mcs-images/announcement/bl55vndkf5/1765630241803_ntgv%201920x450%20(2).jpeg",
    "https://images.6223027.com/mcs-images/announcement/bl55vndkf5/1765630621244_c%E1%BA%A3nh%20b%C3%A1o%20l%E1%BB%ABa%201920.450.png",
    "https://images.6223027.com/mcs-images/announcement/bl55vndkf5/1765630842002_tnd188%20%201920x450.png",
    "https://images.6223027.com/mcs-images/announcement/bl55vndkf5/1765630759175_ttnm%20.%201920x450.png",
    "https://images.6223027.com/mcs-images/announcement/bl55vndkf5/1765631147193_vip%2010.%201920x450.png",
    "https://images.6223027.com/mcs-images/announcement/bl55vndkf5/1765630963041_csn01%204.%201920x450.png",
    "https://images.6223027.com/mcs-images/announcement/bl55vndkf5/1765631133213_TVN%207.%201920x450.png",
    "https://images.6223027.com/mcs-images/announcement/bl55vndkf5/1765630893644_07-17-279.%201920x450.png",
    "https://images.6223027.com/mcs-images/announcement/bl55vndkf5/1765631064558_nhbc01.png",
    "https://images.6223027.com/mcs-images/announcement/bl55vndkf5/1765631039095_jili%20%201920x450.png",
    "https://images.6223027.com/mcs-images/announcement/bl55vndkf5/1765630992994_gtb01%208.%201920x450.png",
    "https://images.6223027.com/mcs-images/announcement/bl55vndkf5/1765630938445_bhtt01%203.%201920x450.png",
  ];

  return (
    <div className="w-full">
      {/* Banner Slider */}
      <div className="w-full relative group">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          className="w-full aspect-[1920/450] shadow-lg"
        >
          {bannerImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full">
                <img
                  src={src}
                  alt={`Banner Promotion ${index + 1}`}
                  className="w-full h-full object-cover select-none"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tùy chỉnh CSS cho Pagination (Dấu chấm tròn) */}
        <style>{`
          .swiper-pagination {
            bottom: 15px !important;
          }
          .swiper-pagination-bullet {
            background: rgba(156, 163, 175, 0.6) !important;
            opacity: 1 !important;
            width: 10px !important;
            height: 10px !important;
            margin: 0 5px !important;
            transition: all 0.3s ease !important;
            border: 2px solid transparent !important;
          }
          .swiper-pagination-bullet-active {
            background: #fbb6ce !important;
            opacity: 1 !important;
            width: 12px !important;
            height: 12px !important;
            border: 2px solid rgba(251, 182, 206, 0.8) !important;
            box-shadow: 0 0 8px rgba(251, 182, 206, 0.6) !important;
            align-items: center;
          }
          /* Hide pagination bullets on mobile */
          @media (max-width: 640px) {
            .swiper-pagination {
              display: none !important;
            }
          }
        `}</style>
      </div>

      {/* Announcements Slider */}
      <div className="w-full bg-[#113565] py-2 shadow-lg overflow-hidden relative announcements-slider-responsive">
        {/* Gradient mask bên trái để ẩn text khi gần icon - mạnh hơn */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-[#113565] to-transparent z-20 pointer-events-none"></div>

        {/* Icon Loa ở góc trái */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 3.5a.5.5 0 0 0-.854-.354L5.293 7H2.5A1.5 1.5 0 0 0 1 8.5v3A1.5 1.5 0 0 0 2.5 13h2.793l3.853 3.854A.5.5 0 0 0 10 16.5v-13zM13.5 7a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5z" />
            <path d="M16 5.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z" />
          </svg>
        </div>

        {/* Container cho text chạy */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee whitespace-nowrap inline-block">
            {announcements.concat(announcements).map((text, idx) => (
              <span
                key={idx}
                className="text-white text-xs md:text-sm lg:text-base font-normal inline-block"
                style={{
                  marginRight:
                    idx % announcements.length === announcements.length - 1
                      ? "100vw"
                      : "60px",
                }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* CSS cho hiệu ứng chạy */}
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          /* Responsive: Announcements Slider smaller on mobile */
          @media (max-width: 640px) {
            .announcements-slider-responsive {
              padding-top: 0.25rem !important;
              padding-bottom: 0.25rem !important;
            }
            .announcements-slider-responsive .text-xs,
            .announcements-slider-responsive .md\:text-sm,
            .announcements-slider-responsive .lg\:text-base {
              font-size: 0.75rem !important;
            }
            .announcements-slider-responsive .w-6.h-6 {
              width: 1.25rem !important;
              height: 1.25rem !important;
            }
            .announcements-slider-responsive .left-8 {
              left: 1rem !important;
            }
            .announcements-slider-responsive .w-20 {
              width: 2.5rem !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Banner;
