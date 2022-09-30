import Link from "next/link";
import React, { MouseEventHandler, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectUser, setAuth } from "../../store/slices/authSlice";
import { PROFILE_PAGES_LINKS } from "../../utils/pages";
import DropDownSolid from "../UI/Icons/DropDownSolid";
import ProfileUserOutline from "../UI/Icons/ProfileUserOutline";

interface ProfileNavbarProps {
  isActive: boolean;
  handleBtn: MouseEventHandler;
}

const ProfileNavbar = ({ isActive, handleBtn }: ProfileNavbarProps) => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setAuth({ isAuth: false, user: null }));
  };

  const renderedPageLinks = Object.entries(PROFILE_PAGES_LINKS).map(
    ([_, page]) => {
      return (
        <Link href={page.path} key={page.name}>
          <p
            title={page.name}
            className={`font-medium text-lg cursor-pointer text-[#1F355E] hover:text-[#7a99a7] duration-200 transition-all`}
          >
            {page.name}
          </p>
        </Link>
      );
    }
  );

  return (
    <div onClick={handleBtn}>
      <div className="flex items-center">
        <ProfileUserOutline
          className="hidden sm:block w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 cursor-pointer"
          fill="#1F355E"
        />

        <p className="font-medium text-base text-[#1F355E] cursor-pointer mr-1">
          {user?.name}
        </p>

        <DropDownSolid className="w-4 h-4 cursor-pointer" fill="#1F355E" />
      </div>

      {/* Modal */}
      <div
        className={`${
          isActive ? "block" : "hidden"
        } absolute z-50 w-fit min-w-[140px] max-w-[220px] top-[90px] -right-1  rounded-xl bg-[#d4eefa] shadow-2xl shadow-[#648e9e65]`}
      >
        <div className="flex flex-col justify-center items-start w-full px-6 py-5">
          <div className="w-full">
            <h1
              title={user?.name}
              className="font-semibold truncate text-ellipsis overflow-x-hidden pb-2 border-b-[0.1px] border-[#8594b1] text-lg text-[#1F355E]"
            >
              {user?.name}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-start pt-2 space-y-2 mb-2">
            {renderedPageLinks}
          </div>
          <div className="w-full pt-2 border-t-[0.1px] border-[#8594b1]">
            <button
              title="Logout"
              onClick={handleLogout}
              className="text-[#1F355E] text-base font-medium rounded-xl hover:text-[#7a99a7]"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavbar;
