import React from "react";
import { INews } from "../../types/news";
import NewsList from "./NewsList";

interface NewsListGenericProps {
  title?: string;
  data?: INews[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const NewsListGeneric = ({
  title,
  data,
  isLoading,
  isError,
}: NewsListGenericProps) => {
  const titleWithArrowSign = `${title} ->`;
  return (
    <div className="my-4 sm:my-7">
      <h2 className="font-medium text-lg text-[#1F355E] sm:ml-2 mb-2">
        {titleWithArrowSign}
      </h2>
      <NewsList data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default NewsListGeneric;
