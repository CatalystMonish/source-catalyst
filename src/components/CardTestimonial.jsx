import React from "react";
import monish from "../images/monish.jpg";
import RatingsBar from "../components/RatingsBar";

function CardTestimonial({ card }) {
  return (
    <div className="flex max-w-[22.5rem] flex-col rounded-lg bg-white p-s-15">
      <div className="flex">
        <img
          src={monish}
          alt="profile_pic"
          className="h-[2.5rem] w-[2.5rem] rounded-full"
        />
        <div className="ml-m-5 flex flex-col">
          <p className="font-lexend text-label font-label">{card.name}</p>
          <p className="font-lexend text-small-light font-small-light text-text-light">
            CTO, Source Catalyst
          </p>
        </div>
        <div className="ml-auto">
          <RatingsBar rating={5} />
        </div>
      </div>

      <p className="mt-m-15 font-lexend text-content font-content">
        {card.testimonial}
      </p>
    </div>
  );
}

export default CardTestimonial;
