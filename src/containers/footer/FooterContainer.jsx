import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import { SUCCESS } from '../../constants/statusCode';
import * as infoAPI from '../../lib/api/info';

const FooterContainer = () => {
  const [presidentName, setPresidentName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    infoAPI.getPoolCInfo().then((res) => {
      if (res.status === SUCCESS.OK) {
        setPresidentName(res.data.presidentName);
        setPhoneNumber(res.data.phoneNumber);
        setLocation(res.data.location);
      }
    });
  }, [presidentName, phoneNumber, location]);

  return (
    <Footer
      presidentName={presidentName}
      phoneNumber={phoneNumber}
      location={location}
    />
  );
};

export default FooterContainer;
