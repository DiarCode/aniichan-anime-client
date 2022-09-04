import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomeBannerImage from "../../assets/homeBanner.png";
import { NAVBAR_PAGES_LINKS } from "../../utils/pages";

const HomeBanner = () => {
  return (
    <div className="my-5 sm:my-7">
      <Link href={NAVBAR_PAGES_LINKS.SEARCH.path}>
        <Image
          src={HomeBannerImage}
          alt="banner"
          className="w-full h-full cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default HomeBanner;
