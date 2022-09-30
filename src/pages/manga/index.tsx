import React from "react";
import AppLayout from "../../components/AppLayouts/AppLayout";
import MangaListGeneric from "../../components/MangaListGeneric/MangaListGeneric";
import NewsListGeneric from "../../components/NewsListGeneric/NewsListGeneric";
import { NAVBAR_PAGES_LINKS } from "../../utils/pages";
import { mangaEntityArr, newsEntityArr } from "../../utils/test";

const MangaPage = () => {
  return (
    <AppLayout
      title={NAVBAR_PAGES_LINKS.MANGA.name}
      description={NAVBAR_PAGES_LINKS.MANGA.description}
    >
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
