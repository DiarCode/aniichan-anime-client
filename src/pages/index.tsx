import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import RecomendationsListGeneric from "../components/RecomendationsListGeneric/RecomendationsListGeneric";
import HomeBanner from "../components/UI/HomeBanner";
import { entityArr } from "../utils/test";

const Home: NextPage = () => {
  return (
    <div className="container w-full h-screen bg-white mx-auto mb-5">
      <Navbar />
      <HomeBanner className="my-7" />

      <main>
        <RecomendationsListGeneric title="Popular Now" data={entityArr} />
      </main>
    </div>
  );
};

export default Home;
