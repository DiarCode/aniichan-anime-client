import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAVBAR_PAGES_LINKS } from "../../utils/pages";
import homeBanner from "../../../public/assets/homeBanner.png";

const HomeBanner = () => {
  return (
    <div className="my-5 sm:my-7">
      <Link href={NAVBAR_PAGES_LINKS.SEARCH.path}>
        <div className="w-full h-full">
          <picture>
            <img
              loading="lazy"
              className="w-full h-full cursor-pointer"
              src="/assets/homeBanner.png"
              alt="banner"
            />
          </picture>
        </div>
      </Link>
    </div>
  );
};

export default HomeBanner;
