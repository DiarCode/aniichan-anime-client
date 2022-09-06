import Link from "next/link";
import React, { MouseEventHandler, useState } from "react";
import { PROFILE_PAGES_LINKS } from "../../utils/pages";

interface ProfileNavbarProps {
  isActive: boolean;
  handleBtn: MouseEventHandler;
}

const ProfileNavbar = ({ isActive, handleBtn }: ProfileNavbarProps) => {
  const renderedPageLinks = Object.entries(PROFILE_PAGES_LINKS).map(
    ([_, page]) => {
      return (
        <Link href={page.path} key={page.name}>
          <p
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
        <svg
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 cursor-pointer"
        >
          <path
            d="M25,13c0-6.6166992-5.3828125-12-12-12S1,6.3833008,1,13c0,3.383606,1.413208,6.4386597,3.673645,8.6222534  c0.0529175,0.0689087,0.1156006,0.1247559,0.1889648,0.171814C7.0038452,23.7769165,9.8582764,25,13,25  s5.9961548-1.2230835,8.1373901-3.2059326c0.0733643-0.0470581,0.1360474-0.1029053,0.1889648-0.171814  C23.586792,19.4386597,25,16.383606,25,13z M13,2.5c5.7900391,0,10.5,4.7104492,10.5,10.5  c0,2.4549561-0.8532715,4.7108154-2.2702637,6.5008545c-0.6505127-2.0978394-2.5076294-3.7401123-5.0281372-4.4957886  c1.3735962-0.9940796,2.2720337-2.6046143,2.2720337-4.4244995c0-3.0141602-2.4550781-5.4663086-5.4736328-5.4663086  s-5.4736328,2.4521484-5.4736328,5.4663086c0,1.8198853,0.8984375,3.4304199,2.2720337,4.4244995  c-2.5205078,0.7556763-4.3776245,2.3979492-5.0281372,4.4957886C3.3532715,17.7108154,2.5,15.4549561,2.5,13  C2.5,7.2104492,7.2099609,2.5,13,2.5z M9.0263672,10.5805664c0-2.1870117,1.7822266-3.9663086,3.9736328-3.9663086  s3.9736328,1.7792969,3.9736328,3.9663086S15.1914063,14.546875,13,14.546875S9.0263672,12.7675781,9.0263672,10.5805664z   M6.0307617,20.8319702C6.2562256,18.0820313,9.1723633,16.046875,13,16.046875s6.7437744,2.0351563,6.9692383,4.7850952  C18.1130981,22.4855347,15.6757202,23.5,13,23.5S7.8869019,22.4855347,6.0307617,20.8319702z"
            fill="#1F355E"
          />
        </svg>

        <p className="font-medium text-base text-[#1F355E] cursor-pointer mr-1">
          Alexandra
        </p>

        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 cursor-pointer"
        >
          <path
            fill="#1F355E"
            d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z"
          />
        </svg>
      </div>

      {/* Modal */}
      <div
        className={`${
          isActive ? "block" : "hidden"
        } absolute z-50 w-fit max-w-[220px] top-[90px] -right-1  rounded-xl bg-[#d4eefa] shadow-2xl shadow-[#648e9e65]`}
      >
        <div className="flex flex-col justify-center items-start w-full px-6 py-5">
          <div className="w-full">
            <h1 className="font-semibold truncate text-ellipsis overflow-x-hidden pb-2 border-b-[0.1px] border-[#8594b1] text-lg text-[#1F355E]">
              Alexandra Petrovna
            </h1>
          </div>
          <div className="flex flex-col justify-center items-start pt-2 space-y-2 mb-2">
            {renderedPageLinks}
          </div>
          <div>
            <button className="text-[#1F355E] text-base font-medium rounded-xl hover:text-[#7a99a7]">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavbar;
