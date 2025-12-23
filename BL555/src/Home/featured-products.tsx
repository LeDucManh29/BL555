import React from "react";

const FeaturedProducts = () => {
  const products = [
    { name: "CASINO", img: "live-banner.ff5ecba.png" },
    { name: "ĐÁ GÀ", img: "cockfight-banner.d307fe8.png" },
    { name: "NỔ HŨ", img: "rng-banner.d072819.png" },
    { name: "BẮN CÁ", img: "fish-banner.17c3e02.png" },
    { name: "GAME BÀI", img: "pvp-banner.ee121b6.png" },
    { name: "THỂ THAO", img: "sports-banner.c270a8c.png" },
    { name: "XỔ SỐ", img: "elott-banner.71ec9f0.png" },
  ];

  return (
    <section className="w-full py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Button Tiêu đề: Sản phẩm nổi bật */}
        <div className="flex justify-center mb-3">
          <div className="flex items-center gap-4 bg-gradient-to-r from-white via-[#CEF2FF] to-white border border-[#b3e5fc] px-5 py-2 rounded-full shadow-sm relative overflow-hidden">
            {/* Dấu chấm trang trí hai bên */}
            <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#9fdff6] to-[#2e8daf] shadow-inner"></div>
            <h2 className="text-[28px] font-bold text-[#337B9D] tracking-wider uppercase">
              SẢN PHẨM NỔI BẬT
            </h2>
            <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#9fdff6] to-[#2e8daf] shadow-inner"></div>
          </div>
        </div>

        {/* Lưới ảnh Sản phẩm */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-fr ">
          {/* CASINO - Chiếm 2 cột */}
          <div
            className="col-span-2 relative overflow-hidden rounded-[20px] cursor-pointer transition-all duration-300"
          >
            <img
              src={`/src/assets/${products[0].img}`}
              alt={products[0].name}
              className="w-full h-full object-cover block"
            />
          </div>

          {/* ĐÁ GÀ */}
          <div
            className="relative overflow-hidden rounded-[20px] cursor-pointer transition-all duration-300"
          >
            <img
              src={`/src/assets/${products[1].img}`}
              alt={products[1].name}
              className="w-full h-full object-cover block"
            />
          </div>

          {/* NỔ HŨ */}
          <div
            className="relative overflow-hidden rounded-[20px] cursor-pointer transition-all duration-300"
          >
            <img
              src={`/src/assets/${products[2].img}`}
              alt={products[2].name}
              className="w-full h-full object-cover block"
            />
          </div>

          {/* BẮN CÁ */}
          <div
            className="relative overflow-hidden rounded-[20px] cursor-pointer transition-all duration-300"
          >
            <img
              src={`/src/assets/${products[3].img}`}
              alt={products[3].name}
              className="w-full h-full object-cover block"
            />
          </div>

          {/* GAME BÀI */}
          <div
            className="relative overflow-hidden rounded-[20px] cursor-pointer transition-all duration-300"
          >
            <img
              src={`/src/assets/${products[4].img}`}
              alt={products[4].name}
              className="w-full h-full object-cover block"
            />
          </div>

          {/* THỂ THAO */}
          <div
            className="relative overflow-hidden rounded-[20px] cursor-pointer transition-all duration-300"
          >
            <img
              src={`/src/assets/${products[5].img}`}
              alt={products[5].name}
              className="w-full h-full object-cover block"
            />
          </div>

          {/* XỔ SỐ */}
          <div
            className="relative overflow-hidden rounded-[20px] cursor-pointer transition-all duration-300"
          >
            <img
              src={`/src/assets/${products[6].img}`}
              alt={products[6].name}
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
