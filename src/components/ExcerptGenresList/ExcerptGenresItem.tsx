import React from "react";
import { IGenre } from "../../types/genre";

interface IExcerptGeneresListItemProps {
  genre: IGenre;
}

const ExcerptGenresItem = ({ genre }: IExcerptGeneresListItemProps) => {
  return (
    <div className="w-fit bg-[#DDF0F5] px-4 py-1 flex items-center justify-center rounded-md">
      <p className="font-normal text-sm text-[#1F355E]">{genre.name}</p>
    </div>
  );
};

export default ExcerptGenresItem;
