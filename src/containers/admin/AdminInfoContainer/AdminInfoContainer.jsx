import AdminInfo from '../../../components/admin/AdminInfo/AdminInfo';
import React, { useState } from 'react';

const AdminInfoContainer = () => {
  const [info, setInfo] = useState(null);
  const onUpdate = ({
    president,
    location,
    contact,
    intro,
    recruit,
    applyUrl,
  }) => {
    console.log({ president, location, contact, intro, recruit, applyUrl });
  };
  return <AdminInfo info={info} onUpdate={onUpdate} />;
};

export default AdminInfoContainer;
