import React from "react";

const HotGamesSection = () => {
  return (
    <section className="w-full py-6 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Title */}
        <div className="flex justify-center mb-3">
          <div className="flex items-center gap-4 bg-gradient-to-r from-white via-[#CEF2FF] to-white border border-[#b3e5fc] px-5 py-2 rounded-full shadow-sm relative overflow-hidden">
            {/* Dấu chấm trang trí hai bên */}
            <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#9fdff6] to-[#2e8daf] shadow-inner"></div>
            <h2 className="text-[28px] font-bold text-[#337B9D] tracking-wider uppercase">
              TOP CÁC TRÒ CHƠI HOT NHẤT
            </h2>
            <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#9fdff6] to-[#2e8daf] shadow-inner"></div>
          </div>
        </div>

        {/* Content Container with Background */}
        <div
          className="relative w-full max-w-[1200px] mx-auto rounded-[30px] overflow-hidden shadow-lg"
          style={{ height: "460px" }}
        >
          {/* Background Image */}
          <img
            src="/src/assets/jackpot-bg.017725e.png"
            alt="Jackpot Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Content Grid - Logo & Video on top of background */}
          <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 lg:p-8">
            {/* Left Side - Jackpot Logo */}
            <div
              className="flex items-center justify-center lg:justify-start mr-8"
            >
              <img
                src="/src/assets/jackpot-main.5f8a4b1.png"
                alt="Super Win Jackpot"
                className="w-full max-w-[100%] lg:max-w-[100%] h-auto object-contain"
              />
            </div>

            {/* Right Side - Video */}
            <div className="flex items-center justify-center lg:justify-end pr-0 lg:pr-6 pt-12">
              <div
                className="relative rounded-[20px] overflow-hidden shadow-2xl w-full"
                style={{ maxWidth: "650px", maxHeight: "350px" }}
              >
                <video
                  className="w-full h-full object-cover  border-2 border-white rounded-[20px]"
                  controls
                  preload="metadata"
                  style={{ aspectRatio: "18/10" }}
                >
                  <source src="/public/video/bl555.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotGamesSection;
