import Link from "next/link";
import React from "react";
import { getDaysDifference } from "../../helpers/getDaysDifference";
import { INews } from "../../types/news";

interface NewsListExcerptProps {
  data: INews;
}

const NewsListExcerpt = ({ data }: NewsListExcerptProps) => {
  const daysDifference = getDaysDifference(data.date);

  return (
    <div className="w-[240px] sm:w-[354px] pl-2 pt-2 cursor-pointer">
      <Link href={data.url}>
        <div className="w-[240px] sm:w-[354px]">
          <div className="mb-3 h-[183px] sm:h-[240px]">
            <picture>
              <img
                src={data.images.jpg?.image_url}
                alt=""
                className="rounded-xl duration-200 bg-gray-500 object-cover h-full w-[240px] sm:w-[354px]"
              />
            </picture>
          </div>

          <div className="pl-2">
            <p className="cursor-pointer truncate text-ellipsis overflow-x-hidden text-sm sm:text-base text-[#1F355E] font-medium">
              {data.title}
            </p>
            <div className="flex jus space-x-4 items-center">
              <p className="cursor-pointer truncate text-ellipsis overflow-x-hidden text-xs sm:text-sm text-[#6FBEDC] font-medium">
                {data.author_username}
              </p>
              <span className="text-[#e1e7f4]">|</span>
              <p className="cursor-pointer truncate text-ellipsis overflow-x-hidden text-xs text-[#adc2d4] font-mormal">
                {data.comments} comments
              </p>
              <p className="cursor-pointer truncate text-ellipsis overflow-x-hidden text-xs text-[#adc2d4] font-mormal">
                {daysDifference}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsListExcerpt;
