import AdminBoard from '../../../components/admin/AdminBoard/AdminBoard';
import React, { useEffect, useState } from 'react';
import * as boardAPI from '../../../lib/api/board';

const AdminBoardContainer = () => {
  const [boards, setBoards] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await boardAPI.getBoards();
      console.log(response.data.data);
      setBoards(response.data.data);
    })();
  }, []);

  if (boards === null) {
    return null;
  }

  const onDeleteBoard = (boardID) => {
    console.log(boardID);
    boardAPI.deleteBoard(boardID).then((res) => {
      if (res.status === 200) {
        setBoards(boards.filter((board) => board.id !== boardID));
      }
    });
  };

  return <AdminBoard boards={boards} onDeleteBoard={onDeleteBoard} />;
};

export default AdminBoardContainer;
