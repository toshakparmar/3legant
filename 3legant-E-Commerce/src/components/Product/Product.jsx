import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Quantity from "../Quantity";
import { addToCart } from "../../features/cartSlice";
import "@splidejs/react-splide/css"

const Product = ({
  id,
  category,
  title,
  rating,
  description,
  price,
  oldPrice = "",
  measurements,
  imagesColors,
  images,
  productCode,
  newTag = 0,
}) => {
  const [isHeart, setHeart] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [idt, setId] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [error, setError] = useState("");
  const toggle = (event) => {
    event.preventDefault();
    setHeart((prevHeart) => (prevHeart ? 0 : 1));
  };

  const Stars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++)
      if (i < rating)
        stars.push(<img key={i} src="/src/assets/resources/Star.png" alt="star" />);
      else stars.push(<img key={i} src="/src/assets/resources/unStar.png" alt="star" />);

    return stars;
  };

  const sale = Math.floor(((oldPrice - price) / oldPrice) * 100);

  useEffect(() => {
    const endDate = new Date();
    endDate.setHours(endDate.getHours() + 1);
    const intervalId = setInterval(() => {
      const timeDiff = endDate - new Date();
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const colorChange = (color) => {
    setSelectedColor(color);
    setSelectedImage(imagesColors[color]);
  };

  const resetColor = () => {
    setSelectedColor(null);
  };
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    if (!selectedColor) {
      setError("Select a color before adding to cart");
      return;
    }
    const product = {
      id:idt,
      category,
      title,
      price,
      productCode,
      selectedColor,
      selectedImage,
      amount,
    };
    setId(idt + 1);
    dispatch(addToCart(product));
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  const [amount, setAmount] = useState(1);
  return (
    <div className="product flex gap-16 max-sm:gap-10 max-md:gap-10 max-lg:gap-8 mt-3 my-10 max-sm:flex-wrap max-md:flex-wrap items-center justify-center  ">
      <div className="left  w-[35vw] max-lg:w-[60vw] max-xl:w-[50vw] max-2xl:w-[50vw] max-sm:w-full max-md:w-full  flex flex-col  object-cover items-center justify-center ">
        <Splide
          hasTrack={false}
          className="flex items-center justify-center"
          onDrag={resetColor}
        >
          <SplideTrack onDrag={resetColor}>
            {images.map((image, index) => (
              <SplideSlide
                key={index}
                className="flex items-center object-cover justify-center w-full max-lg:w-[80vh] max-lg:h-[60vh] max-sm:w-full max-sm:h-[120vw] max-md:w-full max-md:h-[120vw]"
              >
                {selectedColor ? (
                  <img
                    src={imagesColors[selectedColor]}
                    alt={`Color ${selectedColor}`}
                    className="object-cover h-[729px] w-[548px] max-lg:w-[80vh] max-lg:h-[60vh] max-sm:w-full max-sm:h-[120vw] max-md:w-full max-md:h-[120vw]"
                  />
                ) : (
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    className="object-cover h-[729px] w-[548px] max-lg:w-[80vh] max-lg:h-[60vh] max-sm:w-full max-sm:h-[120vw] max-md:w-full max-md:h-[120vw]"
                  />
                )}
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows">
            <button
              className="splide__arrow splide__arrow--prev"
              onClick={resetColor}
            >
              <img src="/src/assets/resources/arrow-left.svg" alt="Previous" />
            </button>
            <button
              className="splide__arrow splide__arrow--next"
              onClick={resetColor}
            >
              <img src="/src/assets/resources/arrow-right.svg" alt="Next" />
            </button>
          </div>
        </Splide>
        <div className="all-images flex items-center gap-[1.5vw] mt-4 max-sm:hidden max-md:hidden">
          {images.slice(-3).map((image, index) => (
            <div key={index} className="image">
              <img src={image} className="w-40 h-40 object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="right flex flex-col w-[50vw]  max-sm:w-full  max-md:w-full overflow-hidden">
        <div className="info flex flex-col pb-6 gap-4">
          <div className="rating flex items-center gap-0.5">{Stars()}</div>
          <div className="title text-[#141718] font-pop text-4xl font-medium flex items-center gap-2 max-xl:text-[29px] ">
            {title}
            {newTag !== 0 && (
              <div className="rounded-md flex justify-center items-center new-tag text-base font-int bg-[#F5F5F5] font-bold text-[#141718] px-3 py-1">
                NEW
              </div>
            )}
            {oldPrice !== "" && (
              <div className="rounded-md sale-tag flex justify-center items-center text-base font-int  bg-[#38CB89] font-bold text-white px-3 py-1">
                -{sale}%
              </div>
            )}
          </div>
          <div className="description text-[#6C7275] font-int text-base font-normal">
            {description}
          </div>
          <div className="prices flex gap-3 items-center ">
            <div className="price font-pop text-3xl font-medium text-[#121212]">
              ${parseFloat(price).toFixed(2)}
            </div>
            {oldPrice != "" && (
              <div
                className="oldprice font-pop text-xl font-medium text-[#6C7275]"
                style={{ textDecorationLine: "line-through" }}
              >
                ${parseFloat(oldPrice).toFixed(2)}
              </div>
            )}
          </div>
        </div>
        {oldPrice !== "" && (
          <div className="timer flex flex-col border-y border-[#E8ECEF] py-6 gap-3">
            <div className="text font-int text-base font-normal text-[#343839]">
              Offer expires in:
            </div>
            <div className="time flex items-center gap-4">
              {Object.entries(timeRemaining).map(([unit, value]) => (
                <div
                  key={unit}
                  className="card1 flex flex-col items-center justify-center"
                >
                  <div className="cd text-black bg-[#F3F5F7] rounded font-pop text-3xl font-medium px-2.5 py-2.5">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="text font-int text-[#6C7275] tex-xs font-normal mt-1">
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="swatches  flex flex-col gap-6 py-6">
          <div className="measurements">
            <div className="text text-[#6C7275] font-int text-base font-semibold">
              Measurements
            </div>
            <div className="measurem text-black font-int text-lg font-normal">
              {measurements}
            </div>
          </div>
          <div className="colors">
            <div className="choose text-[#6C7275] font-int text-base font-semibold flex items-center gap-1">
              Choose Color
              <img src="/src/assets/resources/chevron-right.png" alt="" />
            </div>
            <div className="selected text-black font-int text-lg font-normal">
              {selectedColor}
            </div>
            <div className="all-images-colors flex  mt-4">
              {Object.keys(imagesColors).map((color) => (
                <div
                  key={color}
                  className={`color-swatch relative w-20 flex items-center justify-center ${
                    selectedColor === color ? "selected" : ""
                  }`}
                  onClick={() => colorChange(color)}
                >
                  <input
                    type="checkbox"
                    className="opacity-0 absolute z-10 w-full h-full object-cover"
                    checked={selectedColor === color}
                    onChange={() => {}}
                  />
                  <img
                    src={imagesColors[color]}
                    alt={`Color ${color}`}
                    className={`w-16 h-16 object-cover relative ${
                      selectedColor === color
                        ? "checked:border checked:border-black"
                        : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="product-cart flex flex-col gap-6 py-4 overflow-hidden">
          <div className="top flex items-center gap-6 max-sm:justify-between max-lg:justify-between max-xl:justify-between max-2xl:justify-between">
            <div className="amount">
              <Quantity
                singleProd={1}
                amount={1}
                onQuantityChange={setAmount}
              />
            </div>
            <a
              href=""
              className="text-[#141718] font-int text-lg font-medium border border-[#141718]  rounded-lg "
            >
              <div className="wishlist ">
                <button
                  onClick={(event) => toggle(event)}
                  className="flex items-center justify-center gap-2  py-2 px-[10.4rem] w-full max-sm:w-[54vw] max-lg:px-[2.5rem] max-xl:px-[6.5rem]  max-2xl:px-[6rem] max-md:px-[20vw] "
                >
                  {isHeart ? (
                    <img src="/src/assets/resources/HeartClick.png" alt="" />
                  ) : (
                    <img src="/src/assets/resources/Heart.svg" alt="" />
                  )}
                  Wishlist
                </button>
              </div>
            </a>
          </div>
          <div className="add-to-cart  ">
            <div className=" ">
              <button
                onClick={addToCartHandler}
                className="bg-[#141718] max-sm:w-full  text-white font-int text-md font-medium rounded-lg py-3  max-lg:w-full max-xl:w-full max-2xl:w-full 2xl:w-[35.8rem]"
              >
                Add to cart
              </button>
            </div>
            {error && (
              <p className="text-red-500 font-int text-md mt-2 font-medium">
                {error}
              </p>
            )}
          </div>
        </div>
        <div className="codes flex items-center gap-14 py-3">
          <div className="left flex flex-col text-[#6C7275] font-int text-xs font-normal gap-2">
            <div className="sku">PRODUCT CODE</div>
            <div className="sku">CATEGORY</div>
          </div>
          <div className="right text-[#141718] flex flex-col font-int font-normal text-xs gap-2">
            <div className="sku">{productCode}</div>
            <div className="sku">{category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
