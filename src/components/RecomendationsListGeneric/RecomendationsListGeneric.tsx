import React from "react";
import { IAnime } from "../../types/anime";
import RecomendationsList from "./RecomendationsList";

interface RecomendationsListGenericProps {
  title: string;
  data?: IAnime[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const RecomendationsListGeneric = ({
  title,
  data,
  isLoading,
  isError,
}: RecomendationsListGenericProps) => {
  const titleWithArrowSign = `${title} ->`;
  return (
    <div className="my-4 sm:my-7">
      <h2 className="font-medium text-lg text-[#1F355E] sm:ml-2 mb-2">
        {titleWithArrowSign}
      </h2>
      <RecomendationsList data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default RecomendationsListGeneric;
