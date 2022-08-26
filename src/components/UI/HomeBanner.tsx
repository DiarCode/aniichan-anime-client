import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren, PropsWithRef } from "react";
import HomeBannerImage from "../../assets/homeBanner.png";

interface HomeBannerProps {
  className: string;
}

const HomeBanner = ({ className }: HomeBannerProps) => {
  return (
    <div className={className}>
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
