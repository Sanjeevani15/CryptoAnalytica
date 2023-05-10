import React from "react";
import Search from "./Search";
import submitIcon from "../assets/submit-icon.svg";
import selectIcon from "../assets/select-icon.svg";
import { useContext, useRef } from "react";
import { CryptoContext } from "../context/CryptoContext";
import { BiReset } from "react-icons/bi";

const Filters = () => {
  let { setCurrency, setSortBy, resetFunction } = useContext(CryptoContext);

  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  };

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
  };

  return (
    <div className="w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative">
      {/* for searching */}
      <Search />
      {/* for currency change */}
      <div className="flex mr-7">
        <form
          className="relative flex items-center font-nunito mr-12"
          onSubmit={handleCurrencySubmit}
        >
          <label
            htmlFor="currency"
            className="relative flex justify-center items-center mr-2 font-bold"
          >
            currency
          </label>
          <input
            type="text"
            name="currency"
            placeholder="usd"
            className="w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan leading-4"
            ref={currencyRef}
          />
          <button type="submit" className="ml-1 cursor-pointer">
            <img src={submitIcon} alt="submit" className="w-full h-auto" />
          </button>
        </form>
        {/* for sorting */}
        <label className="relative flex justify-center items-center">
          <span className="mr-2 font-bold">sort by:</span>
          <select
            name="sortby"
            className="rounded bg-gray-200 text-base pl-2 pr-10 py-1.5 leading-4 capitalize focus:outline-0 appearance-none"
            onClick={handleSort}
          >
            <option value="market_cap_asc">market cap asc</option>
            <option value="market_cap_desc">market cap desc</option>
            <option value="volume_asc">volume asc</option>
            <option value="volume_desc">volume desc</option>
            <option value="id_asc">ID asc</option>
            <option value="id_desc">ID desc</option>
          </select>
          <img
            src={selectIcon}
            alt="submit"
            className="w-[1rem] absolute right-1 top-1.5 h-auto pointer-events-none"
          />
        </label>
        <button
          className="w-[2rem] ml-4 hover:scale-110 transition-all transition-ease relative right-0 top-0 "
          onClick={resetFunction}
        >
          <BiReset className="w-full h-full fill-cyan" />
        </button>
      </div>
    </div>
  );
};

export default Filters;
