import { useEffect, useRef, useState } from "react";
import accessibility from "../images/accessibility.png";
import decentralization from "../images/decentralization.png";
import security from "../images/security.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const WhyCrypto = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsAnimated(entry.isIntersecting);
      },
      { rootMargin: "0px", threshold: 0.5 } // Change threshold value as per your requirement
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const whyCryptoAnswer = [
    {
      id: 1,
      heading: "Accessibility",
      description:
        "Anyone with an internet connection can access and use cryptocurrencies, regardless of their location or financial status.",
      images: accessibility,
    },
    {
      id: 2,
      heading: "Decentralization",
      description:
        "Cryptocurrencies are decentralized, meaning they are not controlled by any single entity, government, or organization",
      images: decentralization,
    },

    {
      id: 3,
      heading: "Security",
      description:
        "Cryptocurrencies use advanced cryptography to secure transactions and protect users identities and assets.",
      images: security,
    },
  ];

  return (
    <div className="w-full flex justify-center whyCryptoBg border-t border-gray-100">
      <section
        ref={sectionRef}
        className="w-[80%] h-full flex flex-col mt-8 mb-28 text-white"
      >
        <p className="why-crypto-title mb-12 text-[80px] uppercase headlineColor font-extrabold font-sans text-center tracking-wide">
          Why Crypto?
        </p>
        <div className="flex justify-around gap-x-8 gap-y-6">
          {whyCryptoAnswer.map((answer) => {
            return (
              <div
                className={`${
                  answer.id === 1
                    ? isAnimated
                      ? "animate-from-left"
                      : ""
                    : answer.id === 2
                    ? isAnimated
                      ? "animate-from-bottom"
                      : ""
                    : isAnimated
                    ? "animate-from-right"
                    : ""
                }`}
              >
                <div
                  class={`card w-[300px] bg-[#0d0339] shadow-lg rounded-lg transform hover:scale-110  hover:transition-colors hover:duration-300 hover:ease-in-out `}
                >
                  <img
                    className="rounded-t-lg w-[300px] h-[300px] object-cover"
                    src={answer.images}
                    alt=""
                  />
                  <div class="py-6 px-6 rounded-b-lg bg-white border border-gray-100 flex flex-col items-center">
                    <h1 class="text-cardHeading font-medium tracking-wide text-base mb-4 hover:text-gray-900 hover:cursor-pointer bg-[#14375d] text-center uppercase tracking-wide font-sans p-1 rounded-lg w-full">
                      {answer.heading}
                    </h1>
                    <p class="text-black text-gray-700 font-medium text-center">
                      {answer.description}
                    </p>
                    <button className="readMore w-[140px] mt-6 py-2 px-4 backgroundStarted text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 text-white">
                      <a
                        href="https://medium.com/@sanjeevanibhandari3/react-router-the-key-to-effective-navigation-in-your-react-applications-6d92dfb4d22"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-row items-center gap-2"
                      >
                        Read More
                        <AiOutlineArrowRight />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default WhyCrypto;
