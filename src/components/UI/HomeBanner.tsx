import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAVBAR_PAGES_LINKS } from "../../utils/pages";
import homeBanner from "../../../public/assets/homeBanner.png";

const HomeBanner = () => {
  return (
    <div className="my-5 sm:my-7">
      <Link href={NAVBAR_PAGES_LINKS.SEARCH.path}>
        <div className="w-full">
          <Image
            className="w-full object-cover cursor-pointer"
            src={homeBanner}
            alt="banner"
          />
        </div>
      </Link>
    </div>
  );
};

export default HomeBanner;
