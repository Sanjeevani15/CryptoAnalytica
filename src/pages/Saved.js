import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { StorageContext } from "../context/StorageContext";
import { CryptoContext } from "./../context/CryptoContext";
import { Link } from "react-router-dom";
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
      className="outline-0 border-0 bg-none cursor-pointer"
      onClick={(e) => handleClick(e)}
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

const Saved = () => {
  const { savedData, resetSavedResult } = useContext(StorageContext);
  let { currency } = useContext(CryptoContext);

  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <div className="w-full min-h-[60vh] py-8  border border-gray-100 rounded">
        {savedData ? (
          <table className="w-full table-auto">
            <thead className="capitalize text-base text-gray-100 font-medium border-b border-gray-100 ">
              <tr>
                <th className="py-1 ">asset</th>
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
              {savedData &&
                savedData.map((data) => {
                  return (
                    <tr
                      key={data.id}
                      className="text-center text-base border-b border-gray-100  hover:bg-gray-200"
                    >
                      <td className="py-4 uppercase flex  items-center">
                        <div className="flex justify-start basis-1/3">
                          <SaveBtn data={data} />
                        </div>
                        <div className="flex flex-row items-center basis-2/3">
                          <span className="cursor-pointer">
                            <Link to={`${data.id}`} className="cursor-pointer">
                              {data.symbol}
                            </Link>
                          </span>
                          <img
                            src={data.image}
                            alt={data.id}
                            className="w-[1.2rem] h-[1.2rem] mx-1.5 ml-2"
                          />
                        </div>
                      </td>
                      <td className="py-4 cursor-pointer">
                        <Link to={`${data.id}`} className="cursor-pointer">
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
                      <td
                        className={
                          data.market_cap_change_percentage_24h < 0
                            ? "py-4 text-red"
                            : "py-4 text-green"
                        }
                      >
                        {Number(data.market_cap_change_percentage_24h).toFixed(
                          2
                        )}
                        %
                      </td>
                      <td
                        className={
                          data.price_change_percentage_1h_in_currency < 0
                            ? "py-4 text-red"
                            : "py-4 text-green"
                        }
                      >
                        {Number(
                          data.price_change_percentage_1h_in_currency
                        ).toFixed(2)}
                        %
                      </td>
                      <td
                        className={
                          data.price_change_percentage_24h_in_currency < 0
                            ? "py-4 text-red"
                            : "py-4 text-green"
                        }
                      >
                        {Number(
                          data.price_change_percentage_24h_in_currency
                        ).toFixed(2)}
                        %
                      </td>
                      <td
                        className={
                          data.price_change_percentage_7d_in_currency < 0
                            ? "py-4 text-red"
                            : "py-4 text-green"
                        }
                      >
                        {Number(
                          data.price_change_percentage_7d_in_currency
                        ).toFixed(2)}
                        %
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <h1 className="min-h-[60vh] text-lg text-cyan flex items-center justify-center">
            There is no data to display!
          </h1>
        )}
        <button
          className="w-[2rem] ml-4 hover:scale-110 transition-all transition-ease
        absolute right-0 -top-10
        "
          onClick={resetSavedResult}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="w-full h-full fill-cyan"
            style={{
              msTransform: "rotate(360deg)",
              WebkitTransform: "rotate(360deg)",
              transform: "rotate(360deg)",
            }}
          >
            <path d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z" />
            <path d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z" />
            <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
          </svg>
        </button>
      </div>
      <Outlet />
    </section>
  );
};

export default Saved;
