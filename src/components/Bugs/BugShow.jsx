import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAPIBugData } from '../../services/ProjectService';
import { Card } from "react-bootstrap";
const BugShow = () => {
  const {id, bugId} = useParams();
  const [data, setData] = useState([]);
  useEffect( () => {
   const getData = async()=>{
    const res = await getAPIBugData(id,bugId)
    console.log(res.data)
    setData(res.data)
   }
   getData()
  },[]);

  return(
    <div className="container w-50">
      <div className="card d-flex justify-content-between">
        <div className="card-body">
          <h1 className="mb-3">Bug</h1>
            <div key = {data.id} className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h4 className="mb-3">{data.title}</h4>
                <h4 className="mb-3">{data.deadline}</h4>
                <h4 className="mb-3">{data.typee}</h4>
                <h4 className="mb-3">{data.status}</h4>
              </div>
              <div className="col-auto d-none d-lg-block shadow-sm">
                <div className="image_dimensions" >
                <Card style={{ width: '18rem'}}>
                  <Card.Img variant="top" src={data.image_url} />
                </Card>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

  )
};
export default BugShow;
