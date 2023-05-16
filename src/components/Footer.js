import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex fixed bottom-0 justify-between items-center w-full p-2 text-sm bg-[#091a35] text-white">
      <span className="text-end basis-7/12">&copy; 2023 CryptoAnalytica.</span>
      <div className="flex justify-end gap-x-4 items-center basis-4/12">
        <a
          className="text-lg hover:text-[#000] hover:bg-white hover:rounded-full"
          target={"_blank"}
          rel="noreferrer"
          href={`https://github.com/Sanjeevani15`}
        >
          <FaGithub />
        </a>

        <a
          className="text-lg hover:text-[#00acee] hover:rounded-full"
          target={"_blank"}
          rel="noreferrer"
          href={`https://twitter.com/Pennydumb_adore`}
        >
          <FaTwitter />
        </a>

        <a
          className="text-lg hover:text-[#3467d5] hover:rounded-full"
          target={"_blank"}
          rel="noreferrer"
          href={`https://www.linkedin.com/in/sanjeevani-bhandari/`}
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Footer;
