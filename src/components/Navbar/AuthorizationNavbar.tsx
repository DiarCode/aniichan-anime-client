import Link from "next/link";
import React from "react";
import { useAppDispatch } from "../../store";
import { setAuth } from "../../store/slices/authSlice";
import { AUTHORIZATION_PAGES_LINKS } from "../../utils/pages";

const AuthorizationNavbar = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(setAuth({ isAuth: true, user: { name: "Diar" } }));
  };
  return (
    <div className="flex space-x-5 items-center">
      <Link href={AUTHORIZATION_PAGES_LINKS.LOGIN.path}>
        <p
          title={AUTHORIZATION_PAGES_LINKS.LOGIN.name}
          onClick={handleLogin}
          className="font-medium text-lg text-[#1F355E] cursor-pointer hover:text-[#7a99a7] duration-200 transition-all"
        >
          {AUTHORIZATION_PAGES_LINKS.LOGIN.name}
        </p>
      </Link>
      <Link href={AUTHORIZATION_PAGES_LINKS.REGISTRATION.path}>
        <div className="py-1 px-4 bg-[#BFE4F6] rounded-xl hover:text-[#7a99a7] duration-200 transition-all">
          <p
            className="font-medium text-lg text-[#1F355E] cursor-pointer"
            title={AUTHORIZATION_PAGES_LINKS.REGISTRATION.name}
          >
            {AUTHORIZATION_PAGES_LINKS.REGISTRATION.name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default AuthorizationNavbar;
