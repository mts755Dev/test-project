import { Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate} from "react-router-dom";
import { getAPIBugsData } from '../../services/ProjectService';

const Bugs = () => {
  const {id} = useParams();
  var navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect( () => {
   const getData = async()=>{
      const res = await getAPIBugsData(id)
      console.log(res.data)
      setData(res.data)
    }
    getData();
  },[id]);

  if (data.length===0){
    return(
      <div className="container w-50">
        <div className="card d-flex justify-content-between">
          <div className="card-body">
            <h1 className="mb-3">Bugs</h1>
            <div className="card d-flex justify-content-between">
              <div className="card-body">
                <h5>No Bug Found</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return(
    <div className="container w-50">
      <div className="card d-flex justify-content-between">
        <div className="card-body">
          <h1 className="mb-3">Bugs</h1>
          {data.map((bug) => {
            return(
              <div key = {bug.id} className="card w-auto mb-3">
                <div className="card-body">
                  <h5 className="card-title">{bug.title}</h5>
                  <Button variant="dark" className="mx-4 mt-1 mb-1" onClick={()=>navigate(`/${id}/bugs/${bug.id}`)}>View Bug</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bugs;
