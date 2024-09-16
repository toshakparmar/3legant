import React, { useState } from "react";

const Check = ({ name , state=0}) => {
  const [isChecked, setIsChecked] = useState(state);

  const checkboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={`checkbox${name}`}
        checked={isChecked}
        onChange={checkboxChange}
        style={{ display: "none" }}
      />

      <label
        htmlFor={`checkbox${name}`}
        className={` font-int pb-1 text-sm font-semibold ${
          isChecked ? "active" : ""
        }`}
        style={{
          borderBottom: isChecked ? "1px solid black" : "none",
          color: isChecked ? "#121212" : "#807E7E",
        }}
      >
        {name}
      </label>
    </div>
  );
};

export default Check;
