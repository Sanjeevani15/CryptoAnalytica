import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
import { TrendingProvider } from "../context/TrendingContext";
import { StorageProvider } from "../context/StorageContext";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import WhyCrypto from "./Whycr";


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
            <WhyCrypto />
          </main>
          <Footer />
        </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>
  );
};

export default Home;
