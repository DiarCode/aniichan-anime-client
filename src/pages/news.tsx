import React from "react";
import AppLayout from "../components/AppLayouts/AppLayout";
import NewsListGeneric from "../components/NewsListGeneric/NewsListGeneric";
import { NAVBAR_PAGES_LINKS } from "../utils/pages";
import { newsEntityArr } from "../utils/test";

const NewsPage = () => {
  return (
    <AppLayout title="Forum" description={NAVBAR_PAGES_LINKS.NEWS.description}>
      <div className="my-6 rounded-xl bg-gradient-to-r from-[#BEE3F5] to-[#C0ECEB] px-7 py-2 inline-block">
        <p className="text-[#1F355E] font-bold text-xl">
          {NAVBAR_PAGES_LINKS.NEWS.name}
        </p>
      </div>

      <main>
        <NewsListGeneric title="Naruto Shippuden" data={newsEntityArr} />
      </main>
    </AppLayout>
  );
};

export default NewsPage;
