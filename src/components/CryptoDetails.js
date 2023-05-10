import React from "react";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";
import { BsTriangleFill } from "react-icons/bs";
import Chart from "./Chart";
import { FaGithub, FaTwitter, FaReddit, FaFacebook } from "react-icons/fa";

const HighLowIndicator = ({ currentPrice, high, low }) => {
  const [green, setGreen] = useState();

  useEffect(() => {
    let total = high - low;
    let greenZone = ((high - currentPrice) * 100) / total;
    setGreen(Math.ceil(greenZone));
  }, [currentPrice, high, low]);

  return (
    <>
      <span
        className="bg-red h-1.5 rounded-l-lg w-[50%]"
        style={{ width: `${100 - green}%` }}
      >
        &nbsp;
      </span>
      <span
        className="bg-green h-1.5 rounded-r-lg w-[50%]"
        style={{ width: `${green}%` }}
      >
        &nbsp;
      </span>
    </>
  );
};

const CryptoDetails = () => {
  let { coinId } = useParams();
  let navigate = useNavigate();
  let { getCoinData, coinData: data, currency } = useContext(CryptoContext);

  useLayoutEffect(() => {
    getCoinData(coinId);
  }, [coinId]);

  const close = () => {
    navigate("..");
  };

  return ReactDOM.createPortal(
    <div
      onClick={close}
      className="fixed top-0 w-full h-full bg-gray-200 bg-opacity-30 first-letter: backdrop-blur-sm flex items-center justify-center font-nunito"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[65%] h-[80%] bg-gray-300 bg-opacity-75 rounded-lg text-white relative"
      >
        {data ? (
          <div className="flex items-center justify-between h-full w-full p-4">
            <div className="flex flex-col w-[45%] h-full pr-2">
              <div className="flex w-full items-center">
                <img
                  src={data.image.large}
                  alt={data.id}
                  className="w-[3rem] h-[3rem] mx-1.5"
                />
                <h1 className="text-xl capitalize font-medium">{data.name}</h1>
                <span className="text-sm py-0.5 px-2.5 ml-2 bg-cyan text-cyan bg-opacity-25 rounded uppercase">
                  {data.symbol}
                </span>
              </div>
              <div className="flex w-full mt-6">
                <div className="flex flex-col w-full">
                  <div className="flex justify-between">
                    <span className="text-sm capitalize text-gray-100">
                      Price
                    </span>
                    <div
                      className={`text-sm px-1 ml-2 font-medium flex items-center rounded uppercase bg-opacity-25 ${
                        data.market_data.price_change_percentage_24h > 0
                          ? "bg-green text-green"
                          : "bg-red text-red"
                      }`}
                    >
                      <span>
                        {Number(
                          data.market_data.price_change_percentage_24h
                        ).toFixed(2)}
                        %
                      </span>

                      <BsTriangleFill
                        className={`ml-0.5 w-[1rem] ${
                          data.market_data.price_change_percentage_24h > 0
                            ? "rotate-0"
                            : "rotate-180"
                        }`}
                      />
                    </div>
                  </div>
                  <h2 className="text-lg font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      maximumSignificantDigits: 5,
                    }).format(data.market_data.current_price[currency])}
                  </h2>
                </div>
              </div>

              <div className="flex w-full mt-4 justify-between">
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-100">
                    Market Cap
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(data.market_data.market_cap[currency])}
                  </h2>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-100">
                    fully diluted valuation
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      notation: "compact",
                    }).format(
                      data.market_data.fully_diluted_valuation[currency]
                    )}
                  </h2>
                </div>
              </div>

              <div className="flex flex-col w-full mt-4 justify-between">
                <span className="text-sm capitalize text-gray-100">
                  total volume
                </span>
                <h2 className="text-base font-bold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                  }).format(data.market_data.total_volume[currency])}
                </h2>
              </div>

              <div className="flex w-full mt-4 justify-between">
                <HighLowIndicator
                  currentPrice={data.market_data.current_price[currency]}
                  high={data.market_data.high_24h[currency]}
                  low={data.market_data.low_24h[currency]}
                />
              </div>

              <div className="flex w-full mt-4 justify-between">
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-100">
                    Low 24H
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 5,
                    }).format(data.market_data.low_24h[currency])}
                  </h2>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-100">
                    high 24H
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 5,
                    }).format(data.market_data.high_24h[currency])}
                  </h2>
                </div>
              </div>

              <div className="flex w-full mt-4 justify-between">
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-100">
                    max supply
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(data.market_data.max_supply)}
                  </h2>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-100">
                    circulating supply
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(data.market_data.circulating_supply)}
                  </h2>
                </div>
              </div>

              <div className="flex w-full mt-4 justify-between">
                <div className="flex flex-col">
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    className="text-sm bg-gray-200 text-gray-100 px-1.5 py-0.5 my-1 rounded"
                    href={data?.links?.homepage[0]}
                  >
                    {data?.links?.homepage[0].substring(0, 30)}
                  </a>
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    className="text-sm bg-gray-200 text-gray-100 px-1.5 py-0.5 my-1 rounded"
                    href={data?.links?.blockchain_site[0]}
                  >
                    {data?.links?.blockchain_site[0].substring(0, 30)}
                  </a>
                  {data?.links?.official_forum_url[0] && (
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      className="text-sm bg-gray-200 text-gray-100 px-1.5 py-0.5 my-1 rounded"
                      href={data?.links?.official_forum_url[0]}
                    >
                      {data?.links?.official_forum_url[0].substring(0, 30)}
                    </a>
                  )}
                </div>
                <div>
                  <span>sentiment</span>
                  <div
                    className={`text-sm px-1 ml-2 my-1 font-medium flex items-center rounded uppercase bg-opacity-25 bg-green text-green`}
                  >
                    <span>
                      {Number(data.sentiment_votes_up_percentage).toFixed(2)}%
                    </span>

                    <BsTriangleFill className={`ml-0.5 w-[1rem]`} />
                  </div>
                  <div
                    className={`text-sm px-1 ml-2 my-1 font-medium flex items-center rounded uppercase bg-opacity-25 bg-red text-red`}
                  >
                    <span>
                      {Number(data.sentiment_votes_down_percentage).toFixed(2)}%
                    </span>

                    <BsTriangleFill className={`ml-0.5 w-[1rem] rotate-180`} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[55%] h-full pl-3">
              <Chart id={data.id} />
              <div className="flex flex-col mt-4">
                <h3 className="text-white py-1">
                  <span className="text-gray-100 capitalize mr-1">
                    market cap rank:{" "}
                  </span>{" "}
                  {data.market_cap_rank}{" "}
                </h3>
                <h3 className="text-white py-1">
                  <span className="text-gray-100 capitalize mr-1">
                    coinGecko rank:{" "}
                  </span>{" "}
                  {data.coingecko_rank}{" "}
                </h3>

                <h3 className="text-white py-1">
                  <span className="text-gray-100 capitalize mr-1">
                    coinGecko score:{" "}
                  </span>{" "}
                  {data.coingecko_score}{" "}
                </h3>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 flex gap-x-2 items-center">
              {data.links.repos_url.github[0] && (
                <a
                  className="text-lg px-1  text-cyan hover:text-[#000]  hover:bg-white hover:rounded-full hover:p-0.5"
                  target={"_blank"}
                  rel="noreferrer"
                  href={data.links.repos_url.github[0]}
                >
                  <FaGithub />
                </a>
              )}
              {data.links.twitter_screen_name && (
                <a
                  className="text-lg px-1 text-cyan hover:text-[#00acee] hover:bg-white hover:rounded-full hover:p-0.5"
                  target={"_blank"}
                  rel="noreferrer"
                  href={`https://twitter.com/${data.links.twitter_screen_name}`}
                >
                  <FaTwitter />
                </a>
              )}
              {data.links.subreddit_url && (
                <a
                  className="text-lg px-1  text-cyan hover:text-[#ff4500] hover:bg-white hover:rounded-full hover:p-0.5"
                  target={"_blank"}
                  rel="noreferrer"
                  href={data.links.subreddit_url}
                >
                  <FaReddit />
                </a>
              )}
              {data.links.facebook_username && (
                <a
                  className="text-lg px-1  text-cyan hover:text-[#3467d5] hover:bg-white hover:rounded-full hover:p-0.5"
                  target={"_blank"}
                  rel="noreferrer"
                  href={`https://facebook.com/${data.links.facebook_username}`}
                >
                  <FaFacebook />
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="w-full min-h-[60vh] flex justify-center items-center">
            <div
              className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin"
              role="status"
            />
            <span className="ml-2">Please Wait...</span>
          </div>
        )}
      </div>
    </div>,
    document.getElementById("model")
  );
};

export default CryptoDetails;
