import type { NextPage } from "next";
import EpisodesListGeneric from "../components/EpisodesListGeneric/EpisodesListGeneric";
import Navbar from "../components/Navbar/Navbar";
import NewsListGeneric from "../components/NewsListGeneric/NewsListGeneric";
import RecomendationsListGeneric from "../components/RecomendationsListGeneric/RecomendationsListGeneric";
import AppLayout from "../components/UI/AppLayout";
import HomeBanner from "../components/UI/HomeBanner";
import {
  animeEntityArr,
  episodesEntityArr,
  newsEntityArr,
} from "../utils/test";

const Home: NextPage = () => {
  return (
    <AppLayout title="Home">
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
    </AppLayout>
  );
};

export default Home;
