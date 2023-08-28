import React from "react";
import PremiumBadge from "./PremiumBadge";
import pythonImg from "../images/python.png";

function DomainCard() {
  return (
    <div className="font-poppins flex w-[117px] flex-col items-center justify-center rounded-xl bg-white px-3 py-4 md:w-[150px] md:py-6">
      <img className="mx-auto h-auto w-2/3" src={pythonImg} alt="Python Logo" />
      <p className=" mt-4 text-center text-sm font-bold">Python</p>
      <p className="text-center text-xs text-[#646464]">10+ Projects</p>
    </div>
  );
}

export default DomainCard;
