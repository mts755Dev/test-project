import Bug from "./Bug";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAPIBugsData } from '../../services/ProjectService';

const Bugs = () => {
  const {id} = useParams();
  const [data, setData] = useState([]);
  useEffect( () => {
   const getData = async()=>{
      const res = await getAPIBugsData(id)
      setData(res.data)
    }
    getData();
  },[id]);

  return(
    <div className="container w-50">
      <div className="card d-flex justify-content-between">
        <div className="card-body">
          <h1 className="mb-3">Bugs</h1>
          {data.length===0?<h5>No bugs to Show</h5>:null}
          {data.map((bug) => <Bug key = {bug.id} bug = {bug}/> )}
        </div>
      </div>
    </div>
  );
}

export default Bugs;
