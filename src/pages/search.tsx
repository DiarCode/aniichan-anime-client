import React from "react";
import SearchList from "../components/SearchList/SearchList";
import AppLayout from "../components/UI/AppLayout";
import { animeEntityArr } from "../utils/test";

const search = () => {
  return (
    <AppLayout title="Search">
      <div className="w-full h-36 sm:h-44 lg:h-56 bg-gradient-to-r from-[#BEE3F5] to-[#C0ECEB] rounded-xl my-6 mb-28 relative">
        <div className="h-full flex justify-center items-center px-3">
          <p className="font-bold text-lg sm:text-2xl lg:text-3xl text-[#3B588E] text-center -mt-4 sm:-mt-8 max-w-lg">
            Find any information on your favorite anime, manga, and more...
          </p>
        </div>

        <div className="w-full px-4 absolute -bottom-[28px] sm:-bottom-[32px] lg:-bottom-[40px] flex justify-center">
          <div className="bg-white rounded-xl w-[400px] sm:w-[500px] lg:w-[600px] h-14 lg:h-20 shadow-xl shadow-gray-300 flex justify-between">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Search for an anime, e.g Naruto"
                className="rounded-xl  w-full pl-4 sm:pl-10 text-[#1F355E] text-base"
              />
            </div>
            <div className="flex w-24 border-l-[1px] b-[#ECF6FA]">
              <button className="w-full text-[#6FBEDC] text-xl font-medium">
                Go
              </button>
            </div>
          </div>
        </div>
      </div>

      <SearchList data={animeEntityArr} />
    </AppLayout>
  );
};

export default search;
