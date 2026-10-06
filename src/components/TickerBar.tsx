"use client";

const tickerItems = [
  "DOOR TO DOOR LAUNDRY",
  "YOU LEAVE IT, WE CLEAN IT",
  "HUNTINGTON, NY · EST. 1994",
  "30+ YEARS SERVING LONG ISLAND",
  "PICKUP & DELIVERY 24-48H TURNAROUND",
  "WASH & FOLD DROP-OFF FROM $1.10/LB",
  "10 SHIRTS WASH & PRESS SPECIAL $29.50",
  "COMFORTERS & QUILTS (ANY SIZE) $19.99",
  "USE CODE FIRST10 FOR $10 OFF + FREE BAG",
  "OPEN 7 DAYS A WEEK · 215 NEW YORK AVE",
  "COMMERCIAL LAUNDRY & LINEN SERVICES",
  "CALL (631) 769-9922",
];

export default function TickerBar() {
  return (
    <div className="w-full bg-[#0284C7] text-white overflow-hidden py-2 select-none border-b border-[#0369A1] z-40 relative">
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {/* First track */}
        <div className="flex items-center space-x-6 sm:space-x-8 px-4 shrink-0">
          {tickerItems.map((item, idx) => (
            <div key={`track1-${idx}`} className="flex items-center space-x-6 sm:space-x-8">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase whitespace-nowrap opacity-95">
                {item}
              </span>
              <span className="text-[#38BDF8] opacity-80 text-xs">✦</span>
            </div>
          ))}
        </div>

        {/* Second track for seamless infinite scroll */}
        <div className="flex items-center space-x-6 sm:space-x-8 px-4 shrink-0" aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <div key={`track2-${idx}`} className="flex items-center space-x-6 sm:space-x-8">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase whitespace-nowrap opacity-95">
                {item}
              </span>
              <span className="text-[#38BDF8] opacity-80 text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
