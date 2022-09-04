import Head from "next/head";
import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar/Navbar";

interface AppLayout {
  children?: React.ReactNode;
  title: string;
}

const AppLayout = ({ children, title }: AppLayout) => {
  return (
    <div className="container px-3 sm:px-0 w-full h-screen bg-white mx-auto mb-5">
      <Head>
        <title>Anii.Chan | {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;
