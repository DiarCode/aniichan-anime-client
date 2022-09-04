import React from "react";
import ForumListGeneric from "../components/ForumListGeneric/ForumListGeneric";
import AppLayout from "../components/UI/AppLayout";
import { forumEntityArr } from "../utils/test";

const Forum = () => {
  return (
    <AppLayout title="Forum">
      <div className="my-6 rounded-xl bg-gradient-to-r from-[#BEE3F5] to-[#C0ECEB] px-7 py-2 inline-block">
        <p className="text-[#1F355E] font-bold text-xl">Forum</p>
      </div>

      <main>
        <ForumListGeneric title="Naruto Shippuden" data={forumEntityArr} />
      </main>
    </AppLayout>
  );
};

export default Forum;
