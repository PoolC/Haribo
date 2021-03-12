import ActivityDetail from '../../../components/activity/ActivityDetail/ActivityDetail';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as activityAPI from '../../../lib/api/activity';
import { withRouter } from 'react-router-dom';
import Spinner from '../../../components/common/Spinner/Spinner';

const ActivityDetailContainer = ({ match }) => {
  const activityID = match.params.activityID;

  const [loading, setLoading] = useState(true);

  const [activity, setActivity] = useState(null);
  const [activityMembers, setActivityMembers] = useState(null);
  const [activitySessions, setActivitySessions] = useState(null);
  const member = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      const activityResponse = await activityAPI.getActivity(activityID);
      setActivity(activityResponse.data.data);
      const activitySessionResponse = await activityAPI.getActivitySessions(
        activityID,
      );
      setActivitySessions(activitySessionResponse.data.data);
      if (member.status.isLogin) {
        const activityMemberResponse = await activityAPI.getActivityMembers(
          activityID,
        );
        setActivityMembers(activityMemberResponse.data.data);
      }

      setLoading(false);
    })();
  }, [activityID, member.status.isLogin]);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <ActivityDetail
          activity={activity}
          activityMembers={activityMembers}
          activitySessions={activitySessions}
          member={member}
        />
      )}
    </>
  );
};

export default withRouter(ActivityDetailContainer);
