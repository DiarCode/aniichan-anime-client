import moment from "moment";

export const getDaysDifference = (date: string) => {
  const daysDifference = moment(date).fromNow();
  return daysDifference;
};
