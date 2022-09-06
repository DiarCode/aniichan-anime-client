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
    <div className="w-[240px] sm:w-[354px] sm:pl-2 sm:pt-2">
      <div className="w-[240px] sm:w-[354px]">
        <Link href={data.url}>
          <div className="h-[183px] sm:h-[240px] cursor-pointer">
            <picture>
              <img
                src={data.images.jpg?.image_url}
                alt=""
                className="rounded-xl duration-200 bg-gray-500 object-cover h-full w-[240px] sm:w-[354px]"
              />
            </picture>
          </div>
        </Link>

        <div className="py-3 pl-2">
          <Link href={data.url}>
            <p className="cursor-pointer truncate text-ellipsis overflow-x-hidden text-sm sm:text-base text-[#1F355E] font-medium">
              {data.title}
            </p>
          </Link>

          <div className="flex jus space-x-4 items-center ">
            <p className="truncate text-ellipsis overflow-x-hidden text-xs sm:text-sm text-[#6FBEDC] font-medium">
              {data.author_username}
            </p>
            <span className="text-[#e1e7f4]">|</span>
            <p className="truncate text-ellipsis overflow-x-hidden text-xs text-[#adc2d4] font-mormal">
              {data.comments} comments
            </p>
            <p className="truncate text-ellipsis overflow-x-hidden text-xs text-[#adc2d4] font-mormal">
              {daysDifference}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsListExcerpt;
