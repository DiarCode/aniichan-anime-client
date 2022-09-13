import React from "react";
import { IAnime } from "../../types/anime";
import AnimeExcerptSkeleton from "../Skeletons/RecomendationsExcerptSkeleton";
import AnimeListExcerpt from "./AnimeListExcerpt";

interface AnimeListProps {
  data: IAnime[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const AnimeList = ({ data, isLoading, isError }: AnimeListProps) => {
  if (isLoading || isError) {
    const skeleton = [...new Array(10)].map((_, index) => (
      <AnimeExcerptSkeleton key={index} />
    ));
    return (
      <div className="flex items-center gap-5 overflow-x-auto">{skeleton}</div>
    );
  }

  const renderedList = data?.map((item, index) => (
    <AnimeListExcerpt data={item} key={index} />
  ));

  return (
    <div className="flex items-center gap-5 overflow-x-auto">
      {renderedList}
    </div>
  );
};

export default AnimeList;
