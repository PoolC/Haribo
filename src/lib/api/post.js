import client from './client';

export const getPosts = (urlPath) => client.get(`/post/board/${urlPath}`);

export const getPost = (postID) => client.get(`/post/${postID}`);

export const createPost = ({ title, body, boardID: boardId }) => {
  console.log({ title, body, boardId });
  return client.post('/post', { title, body, boardId });
};

export const updatePost = ({ title, body, postID }) =>
  client.put(`/post/${postID}`, { title, body });

export const deletePost = (postID) => client.delete(`/post/${postID}`);
