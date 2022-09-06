import Link from "next/link";
import React from "react";
import { IEpisodeEntry, IEpisodeInfo } from "../../types/episode";

interface EpisodesListExcerptProps {
  data: IEpisodeInfo;
  entry: IEpisodeEntry;
}

const EpisodesListExcerpt = ({ data, entry }: EpisodesListExcerptProps) => {
  return (
    <div className="w-[120px] sm:w-[177px] sm:pl-2 sm:pt-2">
      <div className="w-[120px] sm:w-[177px]">
        <Link href={data.url}>
          <div className="h-[183px] sm:h-[240px] cursor-pointer">
            <picture>
              <img
                src={entry.images.jpg?.image_url}
                className="rounded-xl bg-gray-500 object-cover h-full w-[120px] sm:w-[177px]"
                alt=""
              />
            </picture>
          </div>
        </Link>

        <div className="py-3 pl-2">
          <Link href={data.url}>
            <p className="cursor-pointer truncate text-ellipsis overflow-x-hidden text-sm sm:text-base text-[#1F355E] font-medium">
              {entry.title}
            </p>
          </Link>
          <p className="truncate text-ellipsis overflow-x-hidden text-xs sm:text-sm  text-[#6FBEDC]">
            {data.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EpisodesListExcerpt;
