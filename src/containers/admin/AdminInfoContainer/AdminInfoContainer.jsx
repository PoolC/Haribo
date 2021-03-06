import AdminInfo from '../../../components/admin/AdminInfo/AdminInfo';
import React, { useState, useEffect } from 'react';
import * as infoAPI from '../../../lib/api/info';

const AdminInfoContainer = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    infoAPI.getPoolCInfo().then((res) => {
      console.log(res);
      if (res.status === 200) {
        setInfo(res.data);
      }
    });
  }, []);

  if (info === null) return null;

  const onCreateInfo = ({
    presidentName,
    phoneNumber,
    location,
    locationUrl,
    introduction,
    mainImageUrl,
    isSubscriptionPeriod,
    applyUri,
  }) => {};

  const onUpdateInfo = ({
    presidentName,
    phoneNumber,
    location,
    locationUrl,
    introduction,
    mainImageUrl,
    isSubscriptionPeriod,
    applyUri,
  }) => {
    infoAPI
      .updatePoolCInfo({
        presidentName,
        phoneNumber,
        location,
        locationUrl,
        introduction,
        mainImageUrl,
        isSubscriptionPeriod,
        applyUri,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
        }
      });
  };

  return (
    <AdminInfo info={info} onUpdate={onUpdateInfo} onCreate={onCreateInfo} />
  );
};

export default AdminInfoContainer;
