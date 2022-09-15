import Head from "next/head";
import Navbar from "../Navbar/Navbar";

interface AppLayout {
  children?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
  includeNavbar?: boolean;
}

const AppLayout = ({
  children,
  title,
  description,
  className,
  includeNavbar = true,
}: AppLayout) => {
  const headTitle = `Anii.Chan | ${title}`;
  const layoutClassName = !Boolean(className)
    ? "container px-3 sm:px-0 w-full h-screen bg-white mx-auto pb-10"
    : className;
  return (
    <div className={layoutClassName}>
      <Head>
        <title>{headTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <meta name="description" content={description} />
      </Head>
      {includeNavbar && <Navbar />}
      {children}
    </div>
  );
};

export default AppLayout;
