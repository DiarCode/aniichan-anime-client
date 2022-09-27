import React from "react";
import { IGenre } from "../../types/genre";
import ExcerptGenresItem from "./ExcerptGenresItem";

interface IExcerptGeneresListProps {
  genresList: IGenre[];
}

const ExcerptGenresList = ({ genresList }: IExcerptGeneresListProps) => {
  const renderedGenresList = genresList?.map((item, index) => (
    <ExcerptGenresItem genre={item} key={index} />
  ));
  return (
    <div className="flex gap-x-3 gap-y-2 flex-wrap">{renderedGenresList}</div>
  );
};

export default ExcerptGenresList;
