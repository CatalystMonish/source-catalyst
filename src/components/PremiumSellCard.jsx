import React from "react";
import PremiumBadge from "./PremiumBadge";

function PremiumSellCard() {
  return (
    <div className="pt-14">
      <p className="text-center font-poppins text-lg font-medium">
        Get <span className="font-semibold">Source Catalyst</span> Premium
        Today!
      </p>
      <p className="text-center font-poppins text-lg font-medium">25% OFF</p>
      <div className=" m-2 flex flex-col gap-1 rounded-md bg-white p-2 font-poppins">
        <div className="w-fit">
          <PremiumBadge />
        </div>
        <p className="text-md font-medium">
          Elevate your skills anytime, anywhere.
        </p>
        <p className="text-sm font-normal text-[#575757]">
          Master new skills at your own pace, wherever life takes you. Start
          today.
        </p>
      </div>
    </div>
  );
}

export default PremiumSellCard;
