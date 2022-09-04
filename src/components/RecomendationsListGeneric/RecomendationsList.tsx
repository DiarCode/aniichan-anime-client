import React from "react";
import { IAnime } from "../../types/anime";
import RecomendationsExcerptSkeleton from "../Skeletons/RecomendationsExcerptSkeleton";
import RecomendationsListExcerpt from "./RecomendationsListExcerpt";

interface RecomendationsListProps {
  data: IAnime[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const RecomendationsList = ({
  data,
  isLoading,
  isError,
}: RecomendationsListProps) => {
  if (isLoading || isError) {
    const skeleton = [...new Array(10)].map((_, index) => (
      <RecomendationsExcerptSkeleton key={index} />
    ));
    return (
      <div className="flex items-center gap-5 overflow-x-auto">{skeleton}</div>
    );
  }

  const renderedList = data?.map(item => (
    <RecomendationsListExcerpt data={item} key={item.mal_id} />
  ));

  return (
    <div className="flex items-center gap-5 overflow-x-auto">
      {renderedList}
    </div>
  );
};

export default RecomendationsList;
