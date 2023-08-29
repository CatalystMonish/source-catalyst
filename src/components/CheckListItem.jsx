import React, { useState } from "react";

function CheckListItem({ text = "Default text", onCheckedChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    if (onCheckedChange) onCheckedChange(newState);
  };

  return (
    <div
      className="mb-m-10 flex items-center rounded-lg bg-white p-s-15"
      onClick={toggleCheck}
    >
      <div className="relative h-4 w-4 bg-light">
        {isChecked && (
          <svg
            className="absolute left-0 top-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </div>
      <p className="ml-m-10 font-lexend text-content font-content">{text}</p>
    </div>
  );
}

export default CheckListItem;
