import client from './client';

export const getActivities = () => client.get('/activity');

export const getActivitiesByYears = (semester) =>
  client.get(`/activity?when=${semester}`);

export const getActivityYears = () => client.get('/activity/years');

export const getActivity = (activityID) =>
  client.get(`/activity/${activityID}`);

export const createActivity = ({
  title,
  description,
  startDate,
  seminar,
  classHour,
  hour,
  capacity,
  tags,
}) => {
  console.log({
    title,
    description,
    startDate,
    seminar,
    classHour,
    hour,
    capacity,
    tags,
  });
  return client.post(`/activity`, {
    title,
    description,
    startDate,
    seminar,
    classHour,
    hour,
    capacity,
    tags,
  });
};

export const updateActivity = ({
  activityID,
  title,
  description,
  startDate,
  seminar,
  classHour,
  hour,
  capacity,
  tags,
}) => {
  console.log({
    title,
    description,
    startDate,
    seminar,
    classHour,
    hour,
    capacity,
    tags,
  });
  return client.put(`/activity/${activityID}`, {
    title,
    description,
    startDate,
    seminar,
    classHour,
    hour,
    capacity,
    tags,
  });
};

export const deleteActivity = (activityID) =>
  client.delete(`/activity/${activityID}`);

export const createActivitySession = ({
  activityID,
  sessionNumber,
  date,
  description,
}) =>
  client.post('/activity/session', {
    activityID,
    sessionNumber,
    date,
    description,
  });

export const getActivitySessions = (activityID) =>
  client.get(`/activity/session/${activityID}`);

export const getActivitySession = (sessionID) =>
  client.get(`/activity/onesession/${sessionID}`);

export const updateActivitySession = ({ sessionID, date, description }) =>
  client.put(`/activity/session/${sessionID}`, {
    date,
    description,
  });

export const applyActivity = (activityID) =>
  client.post(`/activity/apply/${activityID}`);

export const getActivityMembers = (activityID) =>
  client.get(`/activity/member/${activityID}`);

export const getActivitySessionAttendances = (sessionID) =>
  client.get(`/activity/check/${sessionID}`);

export const checkActivityAttendance = ({ sessionID, memberLoginIDs }) => {
  console.log({ sessionID, memberLoginIDs });
  return client.post('/activity/check', {
    sessionID,
    memberLoginIDs,
  });
};
