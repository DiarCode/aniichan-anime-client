import Link from "next/link";
import { useRouter } from "next/router";
import { NAVBAR_PAGES_LINKS } from "../../utils/pages";

const Navbar = () => {
  const { pathname } = useRouter();

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

  return (
    <div className="py-6 border-b-[0.1px] border-[#c8cdd4]">
      <div className="flex justify-between items-center space-x-1 font-inter">
        <div>
          <Link href="/">
            <p className="font-normal font-jacques text-2xl text-[#1F355E] cursor-pointer">
              anii.chan
            </p>
          </Link>
        </div>

        <div className="flex space-x-8 items-center">{renderedPageLinks}</div>

        <div className="flex space-x-6 items-center">
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
      </div>
    </div>
  );
};

export default Navbar;
