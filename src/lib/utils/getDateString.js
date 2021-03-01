export const getFullCurrentDateString = () => {
  const currentDate = new Date();
  const month =
    currentDate.getMonth() < 10
      ? `0${currentDate.getMonth()}`
      : currentDate.getMonth();
  const date =
    currentDate.getDate() < 10
      ? `0${currentDate.getDate()}`
      : currentDate.getDate();
  return `${currentDate.getFullYear()}-${month}-${date}`;
};
