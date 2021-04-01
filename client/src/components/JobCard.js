import React from "react";
import { Card, Image, Button, Col } from "react-bootstrap";
import { useDispatch ,useSelector} from "react-redux";
import {
  deleteJob,
  getJob,
  toggleTrue,
} from "../JS/actions/actionJob";
import { Link } from "react-router-dom";
const JobCard = ({ job }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div className="container">
<React.Fragment>
    <div className="row no-gutters shadow-lg p-2 mb-3 bg-white rounded"  >  
        <div className="col-md-4">

          <img  src={job.logo} className="card-img App-img" alt={job.titre} width="120px" height="160px" />
        </div>
        
          <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title btn-link text-dark" >{job.titre}</h5>
            <p className="card-text"><i className = "fa fa-building-o "> {job.description} </i></p>
            <p className="card-text"><i class="fa fa-calendar" aria-hidden="true"> {job. experience} </i></p>
            <p className="card-text"><i className="fa fa-money"> {job.salaire}</i></p>
            <p className="card-text"><i className="fa fa-map-marker"> {job.emplacement} </i></p>
            <p className="card-text"><small className="text-muted">{job.dateDep}{job.dateFin}</small></p>
            <p className="card-text"><small className="text-muted">{job.niveauEtude}</small></p>   
            { !isAuth? 
            (<Link to="/login"><button type="button" class="btn btn-danger"> Postuler</button> </Link>):
            user.role === "candidat" ?(<button type="button" class="btn btn-danger">Postuler</button> ):
            (<div className="buttons">
            <Link
              to="/Edit_Job"
              onClick={() => {
                dispatch(getJob(job._id));
                dispatch(toggleTrue());
              }}
            >
              <button type="button" class="btn btn-outline-success">Modifier</button>
              
            </Link>
  
            <Button
              variant="outline-danger edit-button"
              onClick={() => dispatch(deleteJob(job._id))}
            >
              Supprimer
            </Button>
          </div> )

            }
              
          </div>
        </div>
    </div>
 </React.Fragment>
</div>
  );
};

export default JobCard;
