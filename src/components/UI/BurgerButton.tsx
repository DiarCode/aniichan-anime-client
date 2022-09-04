import React, { MouseEventHandler } from "react";

interface BurgerButtonProps {
  handleBurgerBtn: MouseEventHandler;
  isActive: boolean;
}

const BurgerButton = ({ handleBurgerBtn, isActive }: BurgerButtonProps) => {
  return (
    <div onClick={handleBurgerBtn} className="order-10 inline-block sm:hidden">
      {isActive ? (
        <svg
          className="w-7 h-7 cursor-pointer"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1F355E"
            d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 cursor-pointer"
        >
          <path
            d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
            fill="#1F355E"
          />
          <path
            d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
            fill="#1F355E"
          />
          <path
            d="M11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H11Z"
            fill="#1F355E"
          />
        </svg>
      )}
    </div>
  );
};

export default BurgerButton;
