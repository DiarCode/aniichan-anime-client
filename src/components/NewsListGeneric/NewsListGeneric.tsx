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
  return (
    <div>
      <h2 className="font-medium text-lg text-[#1F355E] ml-2 mb-2">
        {title} {"->"}
      </h2>
      <NewsList data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default NewsListGeneric;
