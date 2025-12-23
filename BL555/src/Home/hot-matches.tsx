import React from "react";

const HotMatches = () => {
  const matches = [
    {
      id: 1,
      league: "Manchester Derby",
      time: "21 Dec | 21:30",
      team1: { name: "Man City", logo: "73eed582c93a90d952af751065fc835.png" },
      team2: {
        name: "Man United",
        logo: "d1497889598908d8b6e2ca9dda8942d.png",
      },
      odds1: "3.27",
      odds2: "8.6",
    },
    {
      id: 2,
      league: "BVB vs Bayern",
      time: "21 Dec | 23:30",
      team1: {
        name: "Borussia Dortmund",
        logo: "84a3094a3b31ba54ab602c60c3283acc.png",
      },
      team2: {
        name: "Bayern Munich",
        logo: "e9889bf6f0fed942ebb2a9c08e232157.png",
      },
      odds1: "16.4",
      odds2: "1.15",
    },
    {
      id: 3,
      league: "Real Madrid vs Barcelona",
      time: "10 Jan | 02:30",
      team1: {
        name: "Real Madrid",
        logo: "63f6e7249fb631cde9ff91676eb03911.png",
      },
      team2: {
        name: "Barcelona",
        logo: "4b0e5ccd9050bbd90f3ec98ad851fb2d.png",
      },
      odds1: "3.1",
      odds2: "2.09",
    },
  ];

  return (
    <div className="pt-6 py-10 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {matches.map((match) => (
          <div key={match.id} className="relative group">
            {/* Thẻ Match Item - Match-item-bg trong CSS gốc */}
            <div className="bg-gradient-to-r from-white via-[#CEF2FF] border-2 border-[#d0f3fe] rounded-[20px] p-6 pt-8 pb-6 shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col items-center">
              {/* League & Time */}
              <div className="text-center">
                <h3 className="text-[#4B9BB6] text-[16px] font-semibold truncate max-w-[200px]">
                  {match.league}
                </h3>
                <p className="text-[#0d3e4f] text-[13px] font-normal">
                  {match.time}
                </p>
              </div>

              {/* VS Section */}
              <div className="flex items-center justify-between w-full mb-2 h-[90px]">
                {/* Team 1 */}
                <div className="flex flex-col items-center w-[110px]">
                  <img
                    src={`/src/assets/${match.team1.logo}`}
                    alt={match.team1.name}
                    className="w-12 h-12 object-contain mb-2"
                  />
                  <span className="text-[12px] text-gray-800 font-medium text-center leading-tight h-[28px] flex items-center justify-center">
                    {match.team1.name}
                  </span>
                </div>

                {/* VS Text */}
                <span className="text-2xl font-normal text-black">VS</span>

                {/* Team 2 */}
                <div className="flex flex-col items-center w-[110px]">
                  <img
                    src={`/src/assets/${match.team2.logo}`}
                    alt={match.team2.name}
                    className="w-12 h-12 object-contain mb-2"
                  />
                  <span className="text-[12px] text-gray-800 font-medium text-center leading-tight h-[28px] flex items-center justify-center">
                    {match.team2.name}
                  </span>
                </div>
              </div>

              {/* Betting Odds - Match-item-footer trong CSS gốc */}
              <div className="flex gap-3 w-full mb-2">
                <div className="flex-1 bg-gradient-to-r from-white via-[#CEF2FF] border border-white rounded-xl py-1 flex flex-col items-center justify-center shadow-inner">
                  <span className="text-[#0d3e4f] text-[16px] font-semibold">
                    {match.odds1}
                  </span>
                  <span className="text-[#337b9d] text-[9px] font-medium">
                    1
                  </span>
                </div>
                <div className="flex-1 bg-gradient-to-br from-white via-[#cbf1ff] to-white border border-white rounded-xl py-1 flex flex-col items-center justify-center shadow-inner">
                  <span className="text-[#0d3e4f] text-[16px] font-semibold">
                    {match.odds2}
                  </span>
                  <span className="text-[#337b9d] text-[9px] font-medium">
                    2
                  </span>
                </div>
              </div>
            </div>

            {/* Nút Chơi ngay - Play-btn trong CSS gốc */}
            <button className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#9fdff6] to-[#2e8daf] text-[#FFFFFF] text-[13px] font-bold px-8 py-2 rounded-full shadow-lg border border-[#9fdff6] hover:brightness-110 transition-all z-10 whitespace-nowrap">
              Chơi ngay
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotMatches;
