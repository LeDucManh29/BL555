import React, { useState } from "react";

interface Category {
  id: string;
  name: string;
  icon: string;
}

const CategoryMobile: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("hot");

  const categories: Category[] = [
    { id: "hot", name: "HOT NHẤT", icon: "🔥" },
    { id: "casino", name: "CASINO", icon: "🎲" },
    { id: "nohu", name: "NỔ HŨ", icon: "🎰" },
    { id: "banca", name: "BẮN CÁ", icon: "🐟" },
    { id: "thethao", name: "THỂ THAO", icon: "⚽" },
    { id: "gamebai", name: "GAME BÀI", icon: "🃏" },
    { id: "daga", name: "ĐÁ GÀ", icon: "🐓" },
    { id: "xoso", name: "XỔ SỐ", icon: "🎫" },
  ];

  return (
    <div className="md:hidden block w-full overflow-x-auto pt-4 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex gap-2 px-4 min-w-max">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <div
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center justify-center min-w-[78px] h-[55px] rounded-xl shadow-lg cursor-pointer transition-all hover:scale-105 ${
                isActive
                  ? "bg-gradient-to-b from-[#9fdff6] to-[#2e8daf]"
                  : "bg-gradient-to-r from-white via-[#CEF2FF] to-white"
              }`}
            >
              <div className="text-lg">{category.icon}</div>
              <div
                className={`text-[10px] font-bold tracking-wide ${
                  isActive ? "text-white" : "text-[#337B9D]"
                }`}
              >
                {category.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMobile;
