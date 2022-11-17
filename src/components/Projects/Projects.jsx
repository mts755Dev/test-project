import Project from './Project';
import { useState, useEffect } from 'react';
import { getAPIData } from '../../services/ProjectService';

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect( () => {
    const getData = async()=>{
      const res = await getAPIData()
      setData(res.data)
    }
    getData();
  },[]);

  return(
    <div className="container w-50">
      <div className="card d-flex justify-content-between">
        <div className="card-body">
          <h1 className="mb-3">Projects</h1>
          {data.map((project) => <Project key = {project.id} project = {project}/> )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
