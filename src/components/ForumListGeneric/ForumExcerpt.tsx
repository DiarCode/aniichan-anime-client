import Link from "next/link";
import React from "react";
import { getFormattedDate } from "../../helpers/formatDate/getFormattedDate";
import { IForum } from "../../types/forum";

interface ForumExcerptProps {
  data: IForum;
}

const ForumExcerpt = ({ data }: ForumExcerptProps) => {
  const formattedDate = getFormattedDate(data.date);

  return (
    <div className="min-w-[340px] h-[140px] py-5 px-7 bg-[#BFE4F6] rounded-xl my-3">
      <div className="flex h-full flex-col  gap-y-2">
        <div>
          <Link href={data.author_url}>
            <p className="cursor-pointer truncate text-ellipsis overflow-x-hidden text-xs sm:text-sm font-normal text-[#1F355E]">
              {data.author_username}
            </p>
          </Link>
        </div>

        <div>
          <Link href={data.url}>
            <h2 className="cursor-pointer underline line-clamp-2 text-ellipsis overflow-x-hidden text-sm sm:text-base text-[#1F355E] font-semibold">
              {data.title}
            </h2>
          </Link>
        </div>
        <div className="flex items-center gap-x-7">
          <p className="truncate text-ellipsis overflow-x-hidden text-xs sm:text-sm font-normal text-[#95abd4]">
            {data.comments} comments
          </p>
          <p className="truncate text-ellipsis overflow-x-hidden text-xs sm:text-sm font-normal text-[#95abd4]">
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForumExcerpt;
