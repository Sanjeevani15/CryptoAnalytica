import React, { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { StorageContext } from "../context/StorageContext";
import { GiTwoCoins } from "react-icons/gi";

const SaveBtn = ({ data }) => {
  const { saveCoin, allCoins, removeCoin } = useContext(StorageContext);
  const handleClick = (e) => {
    e.preventDefault();
    saveCoin(data.id);

    if (allCoins.includes(data.id)) {
      removeCoin(data.id);
    } else {
      saveCoin(data.id);
    }
  };
  return (
    <button
      onClick={(e) => handleClick(e)}
      className="outline-0 border-0 bg-none cursor-pointer"
    >
      <GiTwoCoins
        size={28}
        className={`w-[1.5rem] ml-2.5 ${
          allCoins.includes(data.id) ? "fill-cyan" : "fill-gray-100"
        } hover:fill-cyan`}
      />
    </button>
  );
};

const TableComponent = () => {
  let { currency, cryptoData } = useContext(CryptoContext);
  return (
    <>
      <div className="flex flex-col mt-9 border border-gray-100 rounded">
        {cryptoData ? (
          <table className="w-full table-auto">
            <thead className="capitalize font-base text-gray-100 font-medium border-b border-gray-100 ">
              <tr>
                <th className="py-1">assest</th>
                <th className="py-1">name</th>
                <th className="py-1">price</th>
                <th className="py-1">total volume</th>
                <th className="py-1">market cap change</th>
                <th className="py-1">1H</th>
                <th className="py-1">24H</th>
                <th className="py-1">7D</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((data) => {
                return (
                  <tr
                    className="text-center font-base border-b border-gray-100 hover:bg-gray-200 last:border-b-0"
                    key={data.id}
                  >
                    <td className="py-4 flex items-center uppercase">
                    <div className="flex justify-start basis-1/3">
                      <SaveBtn data={data} />
                      </div>
                      <div className="flex flex-row items-center basis-2/3">
                        <span>
                          <Link to={`/${data.id}`} className="cursor-pointer">
                            {data.symbol}
                          </Link>
                        </span>
                        <img
                          src={data.image}
                          alt={data.name}
                          className="w-[1.2rem] h-[1.2rem] mx-1.5 ml-2"
                        />
                      </div>
                    </td>
                    <td className="py-4">
                      <Link to={`/${data.id}`} className="cursor-pointer">
                        {data.name}
                      </Link>
                    </td>
                    <td className="py-4">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                      }).format(data.current_price)}
                    </td>
                    <td className="py-4">{data.total_volume}</td>
                    <td className="py-4">
                      {data.market_cap_change_percentage_24h}%
                    </td>
                    <td
                      className={
                        data.price_change_percentage_1h_in_currency > 0
                          ? "text-green py-4"
                          : "text-red py-4"
                      }
                    >
                      {Number(
                        data.price_change_percentage_1h_in_currency
                      ).toFixed(2)}
                    </td>
                    <td
                      className={
                        data.price_change_percentage_24h_in_currency > 0
                          ? "text-green py-4"
                          : "text-red py-4"
                      }
                    >
                      {Number(
                        data.price_change_percentage_24h_in_currency
                      ).toFixed(2)}
                    </td>
                    <td
                      className={
                        data.price_change_percentage_7d_in_currency > 0
                          ? "text-green py-4"
                          : "text-red py-4"
                      }
                    >
                      {Number(
                        data.price_change_percentage_7d_in_currency
                      ).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="w-full min-h-[60vh] h-full flex justify-center items-center">
            <div
              className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin"
              role="status"
            />
            <span className="ml-2">Please Wait...</span>
          </div>
        )}
      </div>
      <div className="flex justify-between mt-4 capitalize h-[2rem]">
        <span>
          Data provided by{" "}
          <a
            href="https://www.coingecko.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyan"
          >
            CoinGecko
          </a>
        </span>
        <Pagination />
      </div>
    </>
  );
};

export default TableComponent;
