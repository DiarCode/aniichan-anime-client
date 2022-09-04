import React from "react";
import { IForum } from "../../types/forum";
import ForumList from "./ForumList";

interface ForumListGenericProps {
  title: string;
  data?: IForum[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const ForumListGeneric = ({
  title,
  data,
  isLoading,
  isError,
}: ForumListGenericProps) => {
  return (
    <div className="my-4 sm:my-6">
      <h2 className="font-medium text-lg text-[#1F355E] ml-2 mb-2">
        {title} {"->"}
      </h2>
      <ForumList data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default ForumListGeneric;
