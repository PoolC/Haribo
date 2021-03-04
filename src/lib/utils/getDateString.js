export const getFullCurrentDateString = (time) => {
  const currentDate = time ? new Date(time) : new Date();
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

export const getFullCurrentDateTimeString = (time) => {
  const currentDate = time ? new Date(time) : new Date();
  const month =
    currentDate.getMonth() < 10
      ? `0${currentDate.getMonth()}`
      : currentDate.getMonth();
  const date =
    currentDate.getDate() < 10
      ? `0${currentDate.getDate()}`
      : currentDate.getDate();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();

  return `${currentDate.getFullYear()}-${month}-${date} ${hour}:${minute}:${second}`;
};
