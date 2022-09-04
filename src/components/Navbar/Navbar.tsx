import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { NAVBAR_PAGES_LINKS } from "../../utils/pages";
import BurgerButton from "../UI/BurgerButton";
import ProfileIcon from "../UI/ProfileIcon";

const Navbar = () => {
  const isAuth = true;
  const { pathname } = useRouter();
  const [isBurgerActive, setBurgerActive] = useState(false);

  const renderedPageLinks = NAVBAR_PAGES_LINKS.map(page => {
    const isPageSelected = pathname !== null && pathname === page.path;
    const currentPageStyle = isPageSelected
      ? "text-[#6FBEDC]"
      : "text-[#1F355E]";

    return (
      <Link href={page.path} key={page.name}>
        <p
          className={`font-medium text-lg cursor-pointer ${currentPageStyle} ${
            !isPageSelected && "hover:text-[#7a99a7]"
          } duration-200 transition-all`}
        >
          {page.name}
        </p>
      </Link>
    );
  });

  const handleBurgerBtn = () => {
    setBurgerActive(prev => !prev);
  };

  return (
    <div className="sticky z-[100] py-6 border-b-[0.1px] sm:px-0 border-[#c8cdd4]">
      <div className="flex justify-between items-center space-x-1 font-inter">
        <div className="">
          <Link href="/">
            <p className="font-normal font-jacques text-2xl text-[#1F355E] cursor-pointer">
              anii.chan
            </p>
          </Link>
        </div>

        {/* Default Navbar */}
        <div className="hidden sm:flex space-x-3 md:space-x-7 items-center">
          {renderedPageLinks}
        </div>

        {/* Burger Navbar */}
        <div
          className={`${
            isBurgerActive ? "block" : "hidden"
          } absolute z-50 top-[90px] -left-1 -right-1  rounded-xl bg-[#d4eefa] shadow-2xl shadow-[#648e9e65]`}
        >
          <div className="flex flex-col items-center space-y-3 py-8">
            {renderedPageLinks}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {isAuth ? (
            <ProfileIcon />
          ) : (
            <div className="flex space-x-5 items-center">
              <Link href="/login">
                <p className="font-medium text-lg text-[#1F355E] cursor-pointer hover:text-[#7a99a7] duration-200 transition-all">
                  Sign in
                </p>
              </Link>
              <Link href="/registration">
                <div className="py-1 px-4 bg-[#BFE4F6] rounded-xl hover:text-[#7a99a7] duration-200 transition-all">
                  <p className="font-medium text-lg text-[#1F355E] cursor-pointer">
                    Sign up
                  </p>
                </div>
              </Link>
            </div>
          )}

          <BurgerButton
            isActive={isBurgerActive}
            handleBurgerBtn={handleBurgerBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
