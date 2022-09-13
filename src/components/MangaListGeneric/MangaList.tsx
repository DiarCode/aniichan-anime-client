import React from "react";
import { IManga } from "../../types/manga";
import AnimeExcerptSkeleton from "../Skeletons/RecomendationsExcerptSkeleton";
import MangaListExcerpt from "./MangaListExcerpt";

interface MangaListProps {
  data: IManga[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const MangaList = ({ data, isLoading, isError }: MangaListProps) => {
  if (isLoading || isError) {
    const skeleton = [...new Array(10)].map((_, index) => (
      <AnimeExcerptSkeleton key={index} />
    ));
    return (
      <div className="flex items-center gap-5 overflow-x-auto">{skeleton}</div>
    );
  }

  const renderedList = data?.map((item, index) => (
    <MangaListExcerpt data={item} key={index} />
  ));
  return (
    <div className="flex items-center gap-5 overflow-x-auto">
      {renderedList}
    </div>
  );
};

export default MangaList;
