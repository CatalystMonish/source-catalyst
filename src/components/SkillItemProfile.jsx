import React, { useState, useEffect } from "react";

import pythonImg from "../images/python.png";
import googleLogo from "../images/googleLogo.png";

function SkillItemProfile() {
  return (
    <div className="flex w-fit flex-col justify-center">
      <img
        alt="skill_img"
        className=" h-[5.625rem] w-[5.625rem] rounded-full bg-white p-s-20 "
        src={googleLogo}
      />
      <p className="text-center font-lexend text-content font-content">
        Javascript
      </p>
    </div>
  );
}

export default SkillItemProfile;
