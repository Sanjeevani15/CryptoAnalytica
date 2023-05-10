import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
import { TrendingProvider } from "../context/TrendingContext";
import { StorageProvider } from "../context/StorageContext";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <CryptoProvider>
      <TrendingProvider>
        <StorageProvider>
          <main className="w-full h-full flex flex-col first-letter:content-center  items-center relative text-white font-nunito">
            <div className="w-screen h-screen bg-[#000] fixed -z-10"></div>
            <Logo />
            <Landing />
            <Navigation />
            <Outlet />
          </main>
          <div className="flex fixed bottom-0 justify-center w-full p-2 text-sm bg-[#091a35] text-white">
            <span className="text-center">
              &copy; 2023 CryptoAnalytica. All Rights Reserved.
            </span>
          </div>
        </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>
  );
};

export default Home;
