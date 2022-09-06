import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { NAVBAR_PAGES_LINKS } from "../../utils/pages";
import AuthorizationNavbar from "./AuthorizationNavbar";
import BurgerButton from "./BurgerButtonNavbar";
import ProfileNavbar from "./ProfileNavbar";

const Navbar = () => {
  const isAuth = false;
  const { pathname } = useRouter();
  const [isBurgerModalActive, setBurgerModalActive] = useState(false);
  const [isProfileModalActive, setIsProfileModalActive] = useState(false);

  const renderedPageLinks = Object.entries(NAVBAR_PAGES_LINKS).map(
    ([_, page]) => {
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
    }
  );

  const closeAllTabs = () => {
    setBurgerModalActive(false);
    setIsProfileModalActive(false);
  };

  const handleBurgerBtn = () => {
    closeAllTabs();
    setBurgerModalActive(isBurgerModalActive ? false : true);
  };

  const handleProfileModal = () => {
    closeAllTabs();
    setIsProfileModalActive(isProfileModalActive ? false : true);
  };

  return (
    <div className="sticky z-[100] py-6 border-b-[0.1px] sm:px-0 border-[#c8cdd4]">
      <div className="flex justify-between items-center space-x-1 font-inter">
        <div className="">
          <Link href={NAVBAR_PAGES_LINKS.HOME.path}>
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
            isBurgerModalActive ? "block" : "hidden"
          } absolute z-50 top-[90px] -left-1 -right-1  rounded-xl bg-[#d4eefa] shadow-2xl shadow-[#648e9e65]`}
        >
          <div className="flex flex-col items-center space-y-3 py-8">
            {renderedPageLinks}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {isAuth ? (
            <ProfileNavbar
              isActive={isProfileModalActive}
              handleBtn={handleProfileModal}
            />
          ) : (
            <AuthorizationNavbar />
          )}

          <BurgerButton
            isActive={isBurgerModalActive}
            handleBtn={handleBurgerBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
