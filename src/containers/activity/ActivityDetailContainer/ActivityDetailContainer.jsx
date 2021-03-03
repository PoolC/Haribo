import ActivityDetail from '../../../components/activity/ActivityDetail/ActivityDetail';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as activityAPI from '../../../lib/api/activity';
import { withRouter } from 'react-router-dom';

const ActivityDetailContainer = ({ match }) => {
  const activityID = match.params.activityID;

  const [activity, setActivity] = useState(null);
  const [activityMembers, setActivityMembers] = useState(null);
  const [activitySessions, setActivitySessions] = useState(null);
  const member = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      const activityResponse = await activityAPI.getActivity(activityID);
      const activityMemberResponse = await activityAPI.getActivityMembers(
        activityID,
      );
      const activitySessionResponse = await activityAPI.getActivitySessions(
        activityID,
      );
      // const activitySessionAttendances = await activityAPI.getActivitySessionAttendances(
      //   activityID,
      // );
      console.log(activityResponse.data.data);
      console.log(activityMemberResponse.data.data);
      console.log(activitySessionResponse.data.data);
      //console.log(activitySessionAttendances);
      setActivity(activityResponse.data.data);
      setActivityMembers(activityMemberResponse.data.data);
      setActivitySessions(activitySessionResponse.data.data);
    })();
  }, [activityID]);

  if (
    activity === null ||
    activityMembers == null ||
    activitySessions == null
  ) {
    return null;
  }

  return (
    <ActivityDetail
      activity={activity}
      activityMembers={activityMembers}
      activitySessions={activitySessions}
      member={member}
    />
  );
};

export default withRouter(ActivityDetailContainer);
