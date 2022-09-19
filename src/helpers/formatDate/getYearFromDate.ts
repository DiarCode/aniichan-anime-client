import moment from "moment";

export const getYearFromDate = (date: string) => {
  return moment(date).format("YYYY");
};
