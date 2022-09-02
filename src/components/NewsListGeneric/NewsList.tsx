import React from "react";
import { INews } from "../../types/news";
import NewsExcerptSkeleton from "../Skeletons/NewsExcerptSkeletom";
import NewsListExcerpt from "./NewsListExcerpt";

interface NewsListProps {
  data: INews[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const NewsList = ({ data, isLoading, isError }: NewsListProps) => {
  if (isLoading || isError) {
    const skeleton = [...new Array(10)].map((_, index) => (
      <NewsExcerptSkeleton key={index} />
    ));
    return (
      <div className="flex items-center gap-4 overflow-x-auto">{skeleton}</div>
    );
  }

  const renderedList = data?.map((item, index) => (
    <NewsListExcerpt data={item} key={index} />
  ));

  return (
    <div className="flex items-center gap-5 overflow-x-auto">
      {renderedList}
    </div>
  );
};

export default NewsList;
