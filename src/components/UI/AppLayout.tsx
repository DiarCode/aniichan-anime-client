import Head from "next/head";
import Navbar from "../Navbar/Navbar";

interface AppLayout {
  children?: React.ReactNode;
  title: string;
  includeNavbar?: boolean;
}

const AppLayout = ({ children, title, includeNavbar = true }: AppLayout) => {
  return (
    <div className="container px-3 sm:px-0 w-full h-screen bg-white mx-auto mb-5">
      <Head>
        <title>Anii.Chan | {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {includeNavbar && <Navbar />}
      {children}
    </div>
  );
};

export default AppLayout;
