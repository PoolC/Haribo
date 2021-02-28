import React, { useEffect, useState } from 'react';
import AdminBoardForm from '../../../components/admin/AdminBoardForm/AdminBoardForm';
import * as boardAPI from '../../../lib/api/board';
import { withRouter } from 'react-router-dom';

const AdminBoardFormContainer = ({ match, history, location }) => {
  const boardID = match.params.boardID;

  const [board, setBoard] = useState(null);

  useEffect(() => {
    if (boardID) {
      (async () => {
        const response = await boardAPI.getBoard(boardID);
        console.log(response.data);
        setBoard(response.data);
      })();
    }
  }, []);

  if (boardID && board === null) {
    return null;
  }

  const onCreateBoard = ({
    name,
    urlPath,
    readPermission,
    writePermission,
  }) => {
    boardAPI
      .createBoard({
        name,
        urlPath,
        readPermission,
        writePermission,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 202) {
          history.push('/admin/boards');
        }
      });
  };

  const onUpdateBoard = ({
    name,
    urlPath,
    readPermission,
    writePermission,
  }) => {
    console.log(boardID);
    boardAPI
      .updateBoard({
        boardID,
        name,
        urlPath,
        readPermission,
        writePermission,
      })
      .then((res) => {
        if (res.status === 200) {
          history.push('/admin/boards');
        }
      });
  };

  return (
    <AdminBoardForm
      onCreateBoard={onCreateBoard}
      onUpdateBoard={onUpdateBoard}
      board={board}
    />
  );
};

export default withRouter(AdminBoardFormContainer);
