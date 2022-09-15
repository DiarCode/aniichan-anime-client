import React from "react";
import ForumListGeneric from "../components/ForumListGeneric/ForumListGeneric";
import AppLayout from "../components/AppLayouts/AppLayout";
import { forumEntityArr } from "../utils/test";
import { NAVBAR_PAGES_LINKS } from "../utils/pages";

const ForumPage = () => {
  return (
    <AppLayout title={NAVBAR_PAGES_LINKS.FORUM.name} description={NAVBAR_PAGES_LINKS.FORUM.description}>
      <div className="my-6 rounded-xl bg-gradient-to-r from-[#BEE3F5] to-[#C0ECEB] px-7 py-2 inline-block">
        <p className="text-[#1F355E] font-bold text-xl">
          {NAVBAR_PAGES_LINKS.FORUM.name}
        </p>
      </div>

      <main>
        <ForumListGeneric title="Naruto Shippuden" data={forumEntityArr} />
      </main>
    </AppLayout>
  );
};

export default ForumPage;
