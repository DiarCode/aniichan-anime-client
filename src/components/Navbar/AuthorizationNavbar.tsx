import Link from "next/link";
import React from "react";
import { AUTHORIZATION_PAGES_LINKS } from "../../utils/pages";

const AuthorizationNavbar = () => {
  return (
    <div className="flex space-x-5 items-center">
      <Link href={AUTHORIZATION_PAGES_LINKS.LOGIN.path}>
        <p className="font-medium text-lg text-[#1F355E] cursor-pointer hover:text-[#7a99a7] duration-200 transition-all">
          Sign in
        </p>
      </Link>
      <Link href={AUTHORIZATION_PAGES_LINKS.REGISTRATION.path}>
        <div className="py-1 px-4 bg-[#BFE4F6] rounded-xl hover:text-[#7a99a7] duration-200 transition-all">
          <p className="font-medium text-lg text-[#1F355E] cursor-pointer">
            Sign up
          </p>
        </div>
      </Link>
    </div>
  );
};

export default AuthorizationNavbar;
