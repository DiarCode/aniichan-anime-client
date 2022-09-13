import React from "react";
import { IManga } from "../../types/manga";
import MangaList from "./MangaList";

interface MangaListGenericProps {
  title: string;
  data?: IManga[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const MangaListGeneric = ({
  title,
  data,
  isLoading,
  isError,
}: MangaListGenericProps) => {
  const titleWithArrowSign = `${title} ->`;
  return (
    <div className="my-4 sm:my-7">
      <h2 className="font-medium text-lg text-[#1F355E] sm:ml-2 mb-2">
        {titleWithArrowSign}
      </h2>
      <MangaList data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default MangaListGeneric;
