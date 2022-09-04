import Head from "next/head";
import Link from "next/link";
import React from "react";
import { AUTHORIZATION_PAGES_LINKS } from "../utils/pages";

const Login = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#7cc3e6] to-[#abf6f6] flex justify-center items-center">
      <Head>
        <title>Anii.Chan | Sign In</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="w-[400px] bg-white rounded-xl p-8">
        <div className="flex flex-col items-center">
          <div className="mb-10">
            <h1 className="font-bold text-2xl text-[#1F355E] mb-1 text-center">
              Welcome Back!
            </h1>
            <h3 className="font-medium text-base text-[#95abd4] text-center">
              Login to continue
            </h3>
          </div>

          <div className="mb-10">
            <input
              type="email"
              className="cursor-pointer rounded-lg w-full px-5 py-4 bg-[#dbeff9] text-base text-[#1F355E] mb-4"
              placeholder="Enter email"
            />
            <input
              type="password"
              className="cursor-pointer rounded-lg w-full px-5 py-4 bg-[#dbeff9] text-base text-[#1F355E]"
              placeholder="Enter password"
            />
          </div>

          <div className="mb-14">
            <button className="cursor-pointer rounded-lg bg-[#9cd8f0] text-[#1F355E] px-8 py-2">
              Sign In
            </button>
          </div>

          <div className="flex items-center gap-x-2">
            <p className="font-normal text-sm text-[#95abd4] text-center">
              Do not have an account?
            </p>
            <Link href={AUTHORIZATION_PAGES_LINKS.REGISTRATION.path}>
              <p className="cursor-pointer font-medium text-sm text-[#85cbe7] text-center">
                Sign Up
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
