import AdminActivity from '../../../components/admin/AdminActivity/AdminActivity';
import React, { useEffect, useState } from 'react';
import * as activityAPI from '../../../lib/api/activity';

const AdminActivityContainer = () => {
  const [activities, setActivities] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await activityAPI.getActivities();
      console.log(response.data.data);
      setActivities(response.data.data);
    })();
  }, []);

  if (activities === null) {
    return null;
  }

  const onOpenActivity = (activityID) => {};

  const onCloseActivity = (activityID) => {};

  const onDeleteActivity = (activityID) => {
    console.log(activityID);
    activityAPI.deleteActivity(activityID).then((res) => {
      if (res.status === 200) {
        setActivities(
          activities.filter((activity) => activity.id !== activityID),
        );
      }
    });
  };

  return (
    <AdminActivity
      activities={activities}
      onOpenActivity={onOpenActivity}
      onCloseActivity={onCloseActivity}
      onDeleteActivity={onDeleteActivity}
    />
  );
};

export default AdminActivityContainer;
