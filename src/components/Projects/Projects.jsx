import { Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import { getAPIData } from '../../services/ProjectService';

const Project = () => {
  var navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    getAPIData().then((data) => {
        setData(data);
    });
  },[]);

  return(
    <div className="container w-50">
      <div className="card d-flex justify-content-between">
        <div className="card-body">
          <h1 className="mb-3">Projects</h1>
          {data.map((project) => {
            return(
              <div className="card w-auto mb-3" key = {project.id}>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p>{project.description}</p>
                  <Button variant="dark" className="mx-4 mt-1 mb-1" onClick={()=>navigate(`/${project.id}/bugs`)} > Show Bugs</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Project;
