import axios from "axios";
export async function getAPIData(){
  const response = await axios.get(`${process.env.REACT_APP_URL}`);
  return response.data;
}

export async function getAPIBugsData(id){
   return await axios.get(`${process.env.REACT_APP_URL}/${id}/bugs`);
}

export async function getAPIBugData(id,bugId){
  return await axios.get(`${process.env.REACT_APP_URL}/${id}/bugs/${bugId}`);
}
