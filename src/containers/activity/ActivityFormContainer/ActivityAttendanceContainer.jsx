import ActivityAttendance from '../../../components/activity/ActivityForm/ActivityAttendance';
import React, { useEffect, useState } from 'react';
import * as activityAPI from '../../../lib/api/activity';
import { withRouter } from 'react-router-dom';
import { MENU } from '../../../constants/menus';
import useLoginCheck from '../../../hooks/useLoginCheck';
import Spinner from '../../../components/common/Spinner/Spinner';
import ActionButton from '../../../components/common/Buttons/ActionButton';

const ActivityAttendanceContainer = ({ match, history }) => {
  const activityID = match.params.activityID;
  const sessionID = match.params.sessionID;

  const [loading, setLoading] = useState(true);

  const [activity, setActivity] = useState(null);
  const [activityMembers, setActivityMembers] = useState(null);
  const [activitySession, setActivitySession] = useState(null);
  const [activitySessions, setActivitySessions] = useState(null);
  const [sessionAttendance, setSessionAttendance] = useState(null);

  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useLoginCheck(history);

  useEffect(() => {
    (async () => {
      const activityResponse = await activityAPI.getActivity(activityID);
      setActivity(activityResponse.data.data);

      const activityMemberResponse = await activityAPI.getActivityMembers(
        activityID,
      );
      setActivityMembers(activityMemberResponse.data.data);

      const activitySessionsResponse = await activityAPI.getActivitySessions(
        activityID,
      );
      setActivitySessions(activitySessionsResponse.data.data);

      if (sessionID) {
        const activitySessionResponse = await activityAPI.getActivitySession(
          sessionID,
        );
        const sessionAttendance = await activityAPI.getActivitySessionAttendances(
          sessionID,
        );
        setSessionAttendance(sessionAttendance.data.data);
        setActivitySession(activitySessionResponse.data);
      }

      setLoading(false);
    })();
  }, [activityID, sessionID]);

  const onCreateSession = async ({
    sessionNumber,
    date,
    description,
    attendances,
  }) => {
    if (!date || !description) {
      setErrorMessage('모든 항목을 입력하세요');
      onShowErrorModal();
      return;
    }
    try {
      const sessionCreateResponse = await activityAPI.createActivitySession({
        activityID,
        sessionNumber,
        date,
        description,
      });
      const sessionID = sessionCreateResponse.data.id;
      const sessionAttendancesCreateResponse = await activityAPI.checkActivityAttendance(
        {
          sessionID,
          memberLoginIDs: attendances.map((attendance) => attendance.loginID),
        },
      );
      if (sessionAttendancesCreateResponse.status === 200) {
        history.push(`/${MENU.ACTIVITY}/${activityID}`);
      }
    } catch (e) {
      console.error('***');
      console.error(e.response);
      setErrorMessage('오류가 발생했습니다');
      onShowErrorModal();
    }
  };

  const onUpdateSession = async ({ date, description, attendances }) => {
    if (!date || !description) {
      setErrorMessage('모든 항목을 입력하세요');
      onShowErrorModal();
      return;
    }
    try {
      const sessionUpdateResponse = await activityAPI.updateActivitySession({
        sessionID,
        date,
        description,
      });
      await activityAPI.checkActivityAttendance({
        sessionID,
        memberLoginIDs: attendances.map((attendance) => attendance.loginID),
      });
      if (sessionUpdateResponse.status === 200) {
        history.push(`/${MENU.ACTIVITY}/${activityID}`);
      }
    } catch (e) {
      console.error(e);
      setErrorMessage('오류가 발생했습니다');
      onShowErrorModal();
    }
  };

  const onShowErrorModal = () => {
    setErrorModalVisible(true);
  };

  const onCloseErrorModal = (e) => {
    e.preventDefault();
    setErrorModalVisible(false);
  };

  const buttons = <ActionButton onClick={onCloseErrorModal}>확인</ActionButton>;

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <ActivityAttendance
          activity={activity}
          activityMembers={activityMembers}
          activitySession={activitySession}
          sessionNumber={activitySessions.length}
          sessionAttendance={sessionAttendance}
          onCreateSession={onCreateSession}
          onUpdateSession={onUpdateSession}
          errorMessage={errorMessage}
          buttons={buttons}
          errorModalVisible={errorModalVisible}
          onCloseErrorModal={onCloseErrorModal}
        />
      )}
    </>
  );
};

export default withRouter(ActivityAttendanceContainer);
