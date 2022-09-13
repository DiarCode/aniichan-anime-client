import React from "react";
import { IAnime } from "../../types/anime";
import RecomendationsListExcerpt from "../AnimeListGeneric/AnimeListExcerpt";
import RecomendationsExcerptSkeleton from "../Skeletons/RecomendationsExcerptSkeleton";

interface SearchListProps {
  data?: IAnime[];
  isLoading?: boolean;
  isError?: boolean;
}

const SearchList = ({ data, isLoading, isError }: SearchListProps) => {
  if (isLoading || isError) {
    const skeleton = [...new Array(10)].map((_, index) => (
      <RecomendationsExcerptSkeleton key={index} />
    ));
    return <div className="flex flex-wrap items-center gap-5">{skeleton}</div>;
  }

  const renderedList = data?.map((item, index) => (
    <RecomendationsListExcerpt data={item} key={index} />
  ));
  return (
    <div className="flex flex-wrap justify-start items-center gap-5">
      {renderedList}
    </div>
  );
};

export default SearchList;
