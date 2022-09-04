import React from "react";
import { IForum } from "../../types/forum";
import ForumExcerptSkeleton from "../Skeletons/ForumExcerptSkeleton";
import ForumExcerpt from "./ForumExcerpt";

interface ForumListProps {
  data: IForum[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const ForumList = ({ data, isLoading, isError }: ForumListProps) => {
  if (isLoading || isError) {
    const skeleton = [...new Array(10)].map((_, index) => (
      <ForumExcerptSkeleton key={index} />
    ));
    return (
      <div className="flex items-center gap-5 overflow-x-auto">{skeleton}</div>
    );
  }

  const renderedList = data?.map((item, index) => (
    <ForumExcerpt data={item} key={index} />
  ));

  return (
    <div className="flex items-center gap-x-3 overflow-x-auto">{renderedList}</div>
  );
};

export default ForumList;
