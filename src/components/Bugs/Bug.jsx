import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate} from "react-router-dom";

const Bug = (props) => {
  const {id} = useParams();
  var navigate = useNavigate();

  return(
    <div className="card d-flex justify-content-between mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.bug.title}</h5>
        <Button variant="dark" className="mx-4 mt-1 mb-1" onClick={()=>navigate(`/${id}/bugs/${props.bug.id}`)}>View Bug</Button>
      </div>
    </div>
  );
}

export default Bug;
