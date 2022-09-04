import type { NextPage } from "next";
import EpisodesListGeneric from "../components/EpisodesListGeneric/EpisodesListGeneric";
import Navbar from "../components/Navbar/Navbar";
import NewsListGeneric from "../components/NewsListGeneric/NewsListGeneric";
import RecomendationsListGeneric from "../components/RecomendationsListGeneric/RecomendationsListGeneric";
import HomeBanner from "../components/UI/HomeBanner";
import {
  animeEntityArr,
  episodesEntityArr,
  newsEntityArr,
} from "../utils/test";

const Home: NextPage = () => {
  return (
    <div className="container px-3 sm:px-0 w-full h-screen bg-white mx-auto mb-5">
      <Navbar />
      <HomeBanner />

      <main>
        <RecomendationsListGeneric title="Popular Now" data={animeEntityArr} />
        <NewsListGeneric
          title="News of your favourite anime"
          data={newsEntityArr}
        />
        <EpisodesListGeneric
          title="News of your favourite anime"
          data={episodesEntityArr}
        />
      </main>
    </div>
  );
};

export default Home;
