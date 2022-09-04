import React from "react";
import { IEpisode } from "../../types/episode";
import EpisodesExcerptSkeleton from "../Skeletons/EpisodesExcerptSkeleton";
import EpisodesListExcerpt from "./EpisodesListExcerpt";

interface EpisodesListProps {
  data: IEpisode[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const EpisodesList = ({ data, isLoading, isError }: EpisodesListProps) => {
  if (isLoading || isError) {
    const skeleton = [...new Array(10)].map((_, index) => (
      <EpisodesExcerptSkeleton key={index} />
    ));
    return (
      <div className="flex items-center gap-5 overflow-x-auto">{skeleton}</div>
    );
  }

  const renderedList = data?.map((item, index) => (
    <EpisodesListExcerpt
      data={item.episodes[0]}
      entry={item.entry}
      key={index}
    />
  ));

  return (
    <div className="flex items-center gap-5 overflow-x-auto">
      {renderedList}
    </div>
  );
};

export default EpisodesList;
