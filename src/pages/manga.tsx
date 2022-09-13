import React from "react";
import AppLayout from "../components/AppLayouts/AppLayout";
import MangaListGeneric from "../components/MangaListGeneric/MangaListGeneric";
import NewsListGeneric from "../components/NewsListGeneric/NewsListGeneric";
import { mangaEntityArr, newsEntityArr } from "../utils/test";

const MangaPage = () => {
  return (
    <AppLayout title="Home">
      <main>
        <MangaListGeneric title="Popular Now" data={mangaEntityArr} />
        <NewsListGeneric
          title="News of your favourite anime"
          data={newsEntityArr}
        />
      </main>
    </AppLayout>
  );
};

export default MangaPage;
