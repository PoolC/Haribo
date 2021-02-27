import client from './client';

export const getBoards = () => client.get('/board');

export const createBoard = ({
  name,
  URLPath,
  readPermission,
  wrtiePermission,
}) =>
  client.post(`/board`, {
    name,
    URLPath,
    readPermission,
    wrtiePermission,
  });

export const updateBoard = ({
  boardID,
  name,
  URLPath,
  readPermission,
  writePermission,
}) =>
  client.put(`/board/${boardID}`, {
    name,
    URLPath,
    readPermission,
    writePermission,
  });

export const deleteBoard = (boardID) => client.delete(`board/${boardID}`);
