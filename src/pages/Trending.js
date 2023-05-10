import React from "react";
import { useContext } from "react";
import { TrendingContext } from "../context/TrendingContext";
import TrendingCoin from "../components/TrendingCoin";
import { Outlet } from "react-router-dom";
import { HiOutlineRefresh } from "react-icons/hi";

const Trending = () => {
  const { trendData, resetTrendingResult } = useContext(TrendingContext);

  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <div className="w-full min-h-[60vh] py-8 flex flex-wrap justify-evenly border border-gray-100 rounded">
        {trendData &&
          trendData.map((coin) => {
            return <TrendingCoin key={coin.item.coin_id} data={coin.item} />;
          })}
          <button
          className="w-[2rem] ml-4 hover:scale-110 transition-all transition-ease absolute right-0 -top-10 "
          onClick={resetTrendingResult}
        >
          <HiOutlineRefresh className="w-full h-full text-cyan" />
        </button>
      </div>
      <Outlet />
    </section>
  );
};

export default Trending;
