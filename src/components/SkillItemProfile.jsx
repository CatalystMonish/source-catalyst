import React, { useState, useEffect } from "react";
import "atropos/css";
import Atropos from "atropos";
import pythonImg from "../images/python.png";
import googleLogo from "../images/googleLogo.png";

function SkillItemProfile() {
  const myAtropos = Atropos({
    el: ".my-atropos",
    activeOffset: 40,
  });

  setTimeout(() => {
    // destroy it when needed
    myAtropos.destroy();
  }, 10000);

  return (
    <div className="h-[100px] w-[100px]">
      <div className="atropos">
        <div className="atropos-scale">
          <div className="atropos-rotate">
            <div className="atropos-inner items-center ">
              <img src={pythonImg} data-atropos-offset="-5" />

              <img src={googleLogo} data-atropos-offset="0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillItemProfile;
