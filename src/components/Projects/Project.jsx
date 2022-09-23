import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Project = (props) => {
  var navigate = useNavigate();

  return (
    <div className="card w-auto mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.project.title}</h5>
        <p>{props.project.description}</p>
        <Button variant="dark" className="mx-4 mt-1 mb-1" onClick={()=>navigate(`/${props.project.id}/bugs`)} > Show Bugs</Button>
      </div>
    </div>
  );
}

export default Project;
