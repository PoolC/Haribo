import ActivityDetail from '../../../components/activity/ActivityDetail/ActivityDetail';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as activityAPI from '../../../lib/api/activity';
import { withRouter } from 'react-router-dom';

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

  const onToggleRegisterActivity = (activityID, members, setMembers) => {
    activityAPI
      .applyActivity(activityID)
      .then((res) => {
        if (res.status === 200) {
          activityAPI.getActivityMembers(activityID).then((res) => {
            if (res.status === 200) {
              setActivityMembers(res.data.data);
            }
          });

          if (!members.includes(member.user.memberId)) {
            setMembers([...members, member.user.memberId]);
            alert('성공적으로 신청되었습니다.');
          }
          if (members.includes(member.user.memberId)) {
            setMembers(
              members.filter((memberId) => memberId !== member.user.memberId),
            );
            alert('성공적으로 신청 취소되었습니다.');
          }
        }
      })
      .catch((e) => {
        console.log(e);
        console.error(e.response?.data?.message);
        alert(e.response?.data?.message);
      });
  };

  return (
    <ActivityDetail
      loading={loading}
      activity={activity}
      activityMembers={activityMembers}
      activitySessions={activitySessions}
      member={member}
      onToggleRegisterActivity={onToggleRegisterActivity}
    />
  );
};

export default withRouter(ActivityDetailContainer);
