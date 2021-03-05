import ActivityForm from '../../../components/activity/ActivityForm/ActivityForm';
import React, { useEffect, useState } from 'react';
import * as activityAPI from '../../../lib/api/activity';
import { withRouter } from 'react-router-dom';

const ActivityFormContainer = ({ match, history }) => {
  const activityID = match.params.activityID;
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    if (activityID) {
      (async () => {
        const response = await activityAPI.getActivity(activityID);
        setActivity(response.data.data);
      })();
    }
  }, [activityID]);

  if (activityID && activity === null) {
    return null;
  }

  const onCreateActivity = ({
    title,
    description,
    startDate,
    seminar,
    classHour,
    hour,
    capacity,
    tags,
  }) => {
    activityAPI
      .createActivity({
        title,
        description,
        startDate,
        seminar,
        classHour,
        hour,
        capacity,
        tags,
      })
      .then((res) => {
        if (res.status === 200) {
          history.push('/activities');
        }
      });
  };

  const onUpdateActivity = ({
    title,
    description,
    startDate,
    seminar,
    classHour,
    hour,
    capacity,
    tags,
  }) => {
    activityAPI
      .updateActivity({
        activityID,
        title,
        description,
        startDate,
        seminar,
        classHour,
        hour,
        capacity,
        tags,
      })
      .then((res) => {
        if (res.status === 200) {
          history.push('/activities');
        }
      });
  };

  return (
    <ActivityForm
      activity={activity}
      onCreateActivity={onCreateActivity}
      onUpdateActivity={onUpdateActivity}
    />
  );
};

export default withRouter(ActivityFormContainer);
