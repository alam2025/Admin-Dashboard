import React from "react";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { useSelector } from "react-redux";

const ItemCard = ({ val }) => {
  const isHomeDisplayOpen = useSelector((state) => state.homeDisplay.isOpen);
  const cardStyles = {
    top: "-100px",
    left: "-100px",
    transition: `${0.2 + 0.1 * val.id}s`, // Adjust the transition duration as needed
    transform: "scale(0)",
  };

  const cardShowStyles = {
    top: "0px",
    transform: "scale(1)",
    left: "0px",
    transition: `${0.2 + 0.1 * val.id}s`, // Adjust the transition duration as needed
  };

  return (
    <div
      style={isHomeDisplayOpen ? cardShowStyles : cardStyles}
      className={`card card-${val.id} w-[159px] h-[144px] rounded-[20px] bg-white custom-shadow1 flex flex-col justify-center items-center relative !z-50 hover:bg-blue-950 hover:cursor-pointer text-[#2C80FF] `}
    >
      {val.isFavourite ? (
        <AiFillStar className="text-[#FFC107] text-3xl font-extralight absolute top-2 right-2" />
      ) : (
        <CiStar className="text-[#cccccc] text-3xl font-thin absolute top-2 right-2" />
      )}

      <img className="w-[60px] h-[60px] mb-5" src={val?.image} alt="" />
      <p className=" font-Inter font-medium text-xl">
        {val?.title}
      </p>
    </div>
  );
};

export default ItemCard;
