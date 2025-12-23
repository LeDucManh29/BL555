import React from "react";

const games = [
  { id: 1, image: "SEX001.png" },
  { id: 2, image: "DG0013.png" },
  { id: 3, image: "SB0001.png" },
  { id: 4, image: "GA0001.png" },
  { id: 5, image: "JL0033.png" },
  { id: 6, image: "MW0071.png" },
  { id: 7, image: "JDB131.png" },
];

const GameCategory = () => {
  return (
    <div className="py-5">
      {/* Giữ layout chung */}
      <div className="mx-auto max-w-[1200px]">
        {/* List */}
        <div className="flex items-center justify-between">
          {games.map((game) => (
            <div
              key={game.id}
              className="w-[150px] h-[150px] rounded-xl border border-blue-200 bg-white shadow-sm hover:shadow-md transition cursor-pointer flex items-center justify-center"
            >
              <img
                src={`/src/assets/${game.image}`}
                alt="game"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="mt-4 flex justify-center items-center gap-4 cursor-pointer">
          <span className="h-4 w-4 rounded-full bg-[#BDBDBD]"></span>
          <span className="h-3 w-3 rounded-full bg-blue-200"></span>
          <span className="h-3 w-3 rounded-full bg-blue-200"></span>
          <span className="h-3 w-3 rounded-full bg-blue-200"></span>
          <span className="h-3 w-3 rounded-full bg-blue-200"></span>
          <span className="h-3 w-3 rounded-full bg-blue-200"></span>
        </div>
      </div>
    </div>
  );
};

export default GameCategory;
