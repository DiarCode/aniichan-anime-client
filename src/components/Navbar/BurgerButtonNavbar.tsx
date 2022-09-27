import React, { MouseEventHandler } from "react";
import BurgerCloseSolid from "../UI/Icons/CloseSolid";
import BurgerOpenSolid from "../UI/Icons/BurgerOpenSolid";

interface BurgerButtonProps {
  handleBtn: MouseEventHandler;
  isActive: boolean;
}

const BurgerNavbar = ({ handleBtn, isActive }: BurgerButtonProps) => {
  return (
    <div onClick={handleBtn} className="order-10 inline-block sm:hidden">
      {isActive ? (
        <BurgerCloseSolid className="w-7 h-7 cursor-pointer" fill="#1F355E" />
      ) : (
        <BurgerOpenSolid className="w-7 h-7 cursor-pointer" fill="#1F355E" />
      )}
    </div>
  );
};

export default BurgerNavbar;
