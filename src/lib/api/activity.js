import client from './client';

export const getActivities = () => client.get('/activity');

export const getActivityYears = () => client.get('/activity/years');

export const getActivity = (activityID) =>
  client.get(`/activity/${activityID}`);

export const createActivity = ({
  title,
  description,
  startDate,
  isSeminar,
  classHour,
  capacity,
  tags,
}) =>
  client.post(`/activity`, {
    title,
    description,
    startDate,
    isSeminar,
    classHour,
    capacity,
    tags,
  });

export const updateActivity = ({
  activityID,
  title,
  description,
  startDate,
  isSeminar,
  classhour,
  capacity,
  tags,
}) =>
  client.put(`/activity/${activityID}`, {
    title,
    description,
    startDate,
    isSeminar,
    classhour,
    capacity,
    tags,
  });

export const deleteActivity = (activityID) =>
  client.delete(`activity/${activityID}`);

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

export const updateActivitySession = ({ sessionID, date, description }) =>
  client.post(`/activity/session/${sessionID}`, {
    date,
    description,
  });

export const applyActivity = (activityID) =>
  client.post(`/activity/apply/${activityID}`);

export const getActivityMembers = (activityID) =>
  client.get(`/activity/member/${activityID}`);

export const getActivitySessionAttendances = (sessionID) =>
  client.get(`/activity/check/${sessionID}`);

export const checkActivityAttendance = ({ sessionID, members }) =>
  client.post('/activity/check', {
    sessionID,
    members,
  });
