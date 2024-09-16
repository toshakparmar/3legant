import React from "react";
import { Link } from "react-router-dom";
const HeroShop = ({ page, image, title, description }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="Hero mx-48  overflow-hidden max-sm:mx-4 max-md:mx-10 max-lg:mx-14 max-xl:mx-16 max-2xl:mx-[120px]">
      <div
        className="HeroBg  flex flex-col items-center justify-center py-28  object-cover"
        style={cardStyle}
      >
        <div className="categories  flex items-center justify-center gap-4">
          <div className="text-[#605F5F] font-int text-sm font-medium flex items-center gap-1">
            <Link to="/3legant-E-Commerce/">Home</Link>
            <img src="/src/assets/chevron-right.png" alt="" />
          </div>
          <div className="text-[#121212] font-int font-medium text-sm">
            {page}
          </div>
        </div>
        <div className="title font-pop text-[54px] font-medium text-black flex items-center justify-center max-sm:text-[40px]">
          {title}
        </div>
        <div className="description text-[#121212] font-int text-xl font-normal max-sm:text-base">
          {description}
        </div>
      </div>
    </div>
  );
};

export default HeroShop;
