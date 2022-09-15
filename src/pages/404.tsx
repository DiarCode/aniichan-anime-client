import Link from "next/link";
import React from "react";
import AppLayout from "../components/AppLayouts/AppLayout";
import { NAVBAR_PAGES_LINKS } from "../utils/pages";

const NotFoundPage = () => {
  return (
    <AppLayout includeNavbar={false} title={"Not found"} className="w-full">
      <div className="w-full h-screen bg-gradient-to-r from-[#7cc3e6] to-[#abf6f6] flex flex-col justify-center items-center">
        <div className=" mb-12">
          <h1 className="text-center text-8xl sm:text-9xl text-[#1F355E] font-bold mb-5">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl text-center text-[#1F355E] font-medium mb-2">
            Oops! Page not found
          </h2>
          <h3 className="text-sm sm:text-lg text-center text-[#7489b0] font-normal">
            Sorry, the page you are looking <br /> for could not be found
          </h3>
        </div>

        <div>
          <Link href={NAVBAR_PAGES_LINKS.HOME.path}>
            <button className="cursor-pointer rounded-lg text-base sm:text-lg bg-[#80cbe9] text-[#1F355E] px-8 py-2">
              Return Home
            </button>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFoundPage;
