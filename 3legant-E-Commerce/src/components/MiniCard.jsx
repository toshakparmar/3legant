import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Star, UnStar} from "../assets/resources";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart } from "../../features/cartSlice";

const MiniCard = ({
  product,
  image,
  price,
  oldPrice = "",
  newTag = 0,
  id,
  rating,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  oldPrice > price ? (newTag = 1) : (newTag = 0);
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "cover",
  };

  const sale = Math.floor(((oldPrice - price) / oldPrice) * 100);

  const Stars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++)
      if (i < rating)
        stars.push(<img key={i} src={Star} alt="star" />);
      else stars.push(<img key={i} src={UnStar} alt="star" />);

    return stars;
  };

  return (
    <div
      className={`mini-card inline-flex flex-col mt-4 ${
        isHovered ? "hovered" : ""
      } transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="bg p-4 inline-flex flex-col justify-between transition-all duration-300 ease-in-out w-64 h-80 max-sm:w-44 max-sm:h-52 max-lg:w-60 max-lg:h-80"
        style={cardStyle}
      >
        <Link to={`/product/${id}`} className="h-full">
          <div className="header-card flex justify-between ">
            <div className="left-header flex-col">
              {newTag !== 0 && (
                <div className="rounded-md flex justify-center items-center new-tag text-base font-int bg-white font-bold text-[#141718] px-3 py-1">
                  NEW
                </div>
              )}
              {oldPrice !== "" && (
                <div className="rounded-md sale-tag text-base font-int mt-2 bg-[#38CB89] font-bold text-white px-3 py-1">
                  -{sale}%
                </div>
              )}
            </div>
          </div>
        </Link>
      </div>

      <div className="description mt-3 flex-col">
        <div className="rating flex mt-1">{Stars()}</div>
        <div className="product-title font-int text-base font-semibold my-1">
          {product}
        </div>
        <div className="prices flex gap-3 items-center mt-1">
          <div className="price font-int font-semibold text-sm">&#x20B9;{price}</div>
          {oldPrice !== "" && (
            <div
              className="oldprice font-int font-normal text-sm text-[#6C7275]"
              style={{ textDecorationLine: "line-through" }}
            >
              &#x20B9;{oldPrice}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
