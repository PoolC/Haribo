require('dotenv').config();
//const { REACT_APP_FILE_URL: FILE_URL } = process.env;
const FILE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_FILE_URL
    : process.env.REACT_APP_TEST_FILE_URL;

const getFileUrl = (url) => {
  const fileUrl =
    url?.includes('http://') ||
    url?.includes('https://') ||
    url?.includes(FILE_URL)
      ? url
      : FILE_URL + url;
  return fileUrl;
};

export default getFileUrl;
