import axios from "axios";

const createUrl = (url) => `http://localhost:9001/api${url}`;

export const post = async (url, payload = {}) =>
  await axios.post(createUrl(url), payload);

export const patch = async (url, payload = {}) =>
  await axios.patch(createUrl(url), payload);

export const get = async (url) =>
  await axios.get(createUrl(url));

export const destroy = async (url) =>
  await axios.delete(createUrl(url));

export const tryRequest = async (requestCb, rejectWithValue) => {
  try {
    return await requestCb();
  } catch (error) {
    return rejectWithValue({
      status: error.response.status,
      apiErrorCode: error.response.data,
    });
  }
};
