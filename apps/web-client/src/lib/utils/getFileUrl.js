const FILE_URL = import.meta.env.DEV
  ? import.meta.env.VITE_TEST_FILE_URL
  : import.meta.env.VITE_FILE_URL;

const getFileUrl = (url) => {
  const fileUrl =
    url?.includes('http://') ||
    url?.includes('https://') ||
    url?.includes(FILE_URL)
      ? url
      : FILE_URL + url;
  return fileUrl;
};

export const getDecodedFileUrl = (url) => {
  return decodeURI(url);
};

export default getFileUrl;
