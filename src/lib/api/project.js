import client from './client';

export const getProjects = () => client.get('/project');

export const getProject = (projectId) => client.get(`/project/${projectId}`);

export const createProject = ({
  name,
  description,
  genre,
  duration,
  thumbnailURL,
  body,
  members,
}) =>
  client.post('/project', {
    name,
    description,
    genre,
    duration,
    thumbnailURL,
    body,
    members,
  });

export const updateProject = ({ projectID }) =>
  client.put(`/project/${projectID}`);

export const deleteProject = ({ projectID }) =>
  client.delete(`/project/${projectID}`);
