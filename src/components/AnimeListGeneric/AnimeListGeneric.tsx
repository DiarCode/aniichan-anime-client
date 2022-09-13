import React from "react";
import { IAnime } from "../../types/anime";
import AnimeList from "./AnimeList";

interface AnimeListGenericProps {
  title: string;
  data?: IAnime[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const AnimeListGeneric = ({
  title,
  data,
  isLoading,
  isError,
}: AnimeListGenericProps) => {
  const titleWithArrowSign = `${title} ->`;
  return (
    <div className="my-4 sm:my-7">
      <h2 className="font-medium text-lg text-[#1F355E] sm:ml-2 mb-2">
        {titleWithArrowSign}
      </h2>
      <AnimeList data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default AnimeListGeneric;
