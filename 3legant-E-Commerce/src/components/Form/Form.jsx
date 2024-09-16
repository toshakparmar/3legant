import React from "react";
import { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <form action="">
      <div className="form flex flex-col gap-6">
        <div className="fullname flex flex-col gap-3 text-[#6C7275] font-int text-xs font-bold ">
          <label htmlFor="name">FULL NAME</label>
          <div className="font-int text-sm font-normal name1">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              required
              style={{ width: windowWidth < 1280 ? "67vw" : "30vw" }}
            />
          </div>
        </div>
        <div className="email  flex flex-col gap-3 text-[#6C7275] font-int text-xs font-bold">
          <label htmlFor="email ">EMAIL ADDRESS</label>
          <div className="font-int text-sm font-normal ">
            <input
              type="text"
              id="email"
              placeholder="Your Email"
              required
              style={{ width: windowWidth < 1280 ? "67vw" : "30vw" }}
            />
          </div>
        </div>
        <div className="message  flex flex-col gap-3 text-[#6C7275] font-int text-xs font-bold">
          <label htmlFor="message">MESSAGE</label>
          <div className="font-int text-sm font-normal ">
            <textarea
              type="text"
              id="message"
              placeholder="Your message"
              style={{
                width: windowWidth < 1280 ? "67vw" : "30vw",
                height: "20vh",
              }}
              required
            />
          </div>
        </div>
        <div className="w-full">
          <input
            type="submit"
            value="Send"
            className="w-1/2 bg-[#141718] py-3 px-6 flex items-center justify-center text-white font-int text-xl font-medium rounded-md"
          ></input>
        </div>
      </div>
    </form>
  );
};

export default Form;
