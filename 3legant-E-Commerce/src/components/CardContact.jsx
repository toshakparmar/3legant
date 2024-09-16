import React from "react";

const CardContact = ({ image, title, subtitle }) => {
  return (
    <div className="card bg-[#F3F5F7] rounded-md">
      <div className="content flex flex-col items-center justify-center px-8 py-4">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="title mt-4 text-[#6C7275] font-int text-base font-bold uppercase">
          {title}
        </div>
        <div className="subtitle mt-2 text-[#141718] font-int text-base font-semibold">{subtitle}</div>
      </div>
    </div>
  );
};

export default CardContact;
