import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase"; // Import your firebase storage

function SkillPill({ skill }) {
  const [imageURL, setImageURL] = useState(null);

  console.log("ref", skill.skillImage);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const url = await getDownloadURL(ref(storage, skill.skillImage));
        setImageURL(url);
      } catch (error) {
        console.error("Error fetching skill image:", error);
      }
    };

    fetchImage();
  }, [skill.skillImage]);

  return (
    <div className="flex w-fit items-center rounded-full bg-light p-[0.3125rem]">
      {imageURL && (
        <img
          alt={skill.skillName}
          src={imageURL}
          className="h-[1.25rem] w-[1.25rem] rounded-full"
        />
      )}
      <p className="ml-[0.3125rem] font-lexend text-small font-small">
        {skill.skillName}
      </p>
    </div>
  );
}

// SkillPill.propTypes = {
//   skill: PropTypes.shape({
//     skillName: PropTypes.string.isRequired,
//     skillImage: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default SkillPill;
