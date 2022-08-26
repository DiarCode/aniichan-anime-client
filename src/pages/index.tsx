import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import HomeBanner from "../components/UI/HomeBanner";

const Home: NextPage = () => {
  return (
    <div className="container w-full h-screen overflow-hidden bg-white mx-auto">
      <Navbar />
      <HomeBanner className="my-7" />
    </div>
  );
};

export default Home;
