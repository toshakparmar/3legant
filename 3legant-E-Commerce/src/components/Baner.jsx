import React from "react";
import { Link } from "react-router-dom";

const Baner = () => {
  return (
    <div className="baner flex items-center bg-[#F3F5F7] justify-center max-sm:flex-wrap max-md:flex-wrap">
      <div className="left ">
        <img src="/src/assets/resources/banner.png" alt="" className="object-cover" />
      </div>
      <div className="right py-10 max-lg:py-8">
        <div
          className="mx-32  max-lg:mx-6 max-xl:mx-10 max-2xl:mx-8
        "
        >
          <div className="title text-[#121212] font-pop text-4xl font-medium">
            About Us
          </div>
          <div className="description text-[#141718] font-int text-base font-normal mt-8 mb-12 max-lg:mb-8 max-lg:mt-8">
            <span className="text-[#343839]">3legant</span> is a gift &
            decorations store based in HCMC, Vietnam. Est since 2019. Our
            customer service is always prepared to support you 24/7
          </div>
          <div className="2text text-black inline-flex font-int font-medium text-base border-b border-black ">
            <div className="content flex items-center text-base font-medium">
              <Link to="/shop">Shop Now</Link>
              <img src="/src/assets/arrow-right1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baner;
