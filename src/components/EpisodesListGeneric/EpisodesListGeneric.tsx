import React from "react";
import { IEpisode } from "../../types/episode";
import EpisodesList from "./EpisodesList";

interface EpisodesListGenericProps {
  title?: string;
  data?: IEpisode[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const EpisodesListGeneric = ({
  title,
  data,
  isLoading,
  isError,
}: EpisodesListGenericProps) => {
  return (
    <div className="my-4 sm:my-7">
      <h2 className="font-medium text-lg text-[#1F355E] ml-2 mb-2">
        {title} {"->"}
      </h2>
      <EpisodesList data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default EpisodesListGeneric;
