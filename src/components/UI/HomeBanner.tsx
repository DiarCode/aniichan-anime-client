import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomeBannerImage from "../../assets/homeBanner.png";

const HomeBanner = () => {
  return (
    <div className="my-5 sm:my-7">
      <Link href="/search">
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
