import type { NextPage } from "next";
import EpisodesListGeneric from "../components/EpisodesListGeneric/EpisodesListGeneric";
import NewsListGeneric from "../components/NewsListGeneric/NewsListGeneric";
import RecomendationsListGeneric from "../components/AnimeListGeneric/AnimeListGeneric";
import AppLayout from "../components/AppLayouts/AppLayout";
import HomeBanner from "../components/UI/HomeBanner";
import {
  animeEntityArr,
  episodesEntityArr,
  newsEntityArr,
} from "../utils/test";
import { NAVBAR_PAGES_LINKS } from "../utils/pages";

const HomePage: NextPage = () => {
  return (
    <AppLayout title="Home" description={NAVBAR_PAGES_LINKS.HOME.description}>
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

export default HomePage;
