import ActivityForm from '../../../components/activity/ActivityForm/ActivityForm';
import React, { useEffect, useState } from 'react';
import * as activityAPI from '../../../lib/api/activity';
import { withRouter } from 'react-router-dom';
import useLoginCheck from '../../../hooks/useLoginCheck';
import { MENU } from '../../../constants/menus';
import { useSelector } from 'react-redux';
import Spinner from '../../../components/common/Spinner/Spinner';

const ActivityFormContainer = ({ match, history }) => {
  const activityID = match.params.activityID;

  const [loading, setLoading] = useState(true);

  const [activity, setActivity] = useState(null);
  const member = useSelector((state) => state.auth);
  const {
    user: { memberId },
  } = member;

  useLoginCheck(history);

  useEffect(() => {
    if (activityID) {
      activityAPI.getActivity(activityID).then((res) => {
        if (res.status === 200) {
          setActivity(res.data.data);
          setLoading(false);
        }
      });
    } else {
      setLoading(false);
    }
  }, [activityID, memberId, history]);

  // if (activityID && activity === null) {
  //   return null;
  // }

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
      })
      .catch((e) => {
        console.error(e.message);
        history.push(`/${MENU.FORBIDDEN}`);
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
      })
      .catch((e) => {
        console.error(e.message);
        history.push(`/${MENU.FORBIDDEN}`);
      });
  };

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <ActivityForm
          activity={activity}
          onCreateActivity={onCreateActivity}
          onUpdateActivity={onUpdateActivity}
        />
      )}
    </>
  );
};

export default withRouter(ActivityFormContainer);
