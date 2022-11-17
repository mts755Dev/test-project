import axios from "axios";

export const getAPIData = async () => {
  return await axios.get(`${process.env.REACT_APP_URL}`);
}

export const getAPIBugsData = async (id) => {
  return await axios.get(`${process.env.REACT_APP_URL}/${id}/bugs`);
}

export const getAPIBugData = async (id,bugId) => {
  return await axios.get(`${process.env.REACT_APP_URL}/${id}/bugs/${bugId}`);
}
