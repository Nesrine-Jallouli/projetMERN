import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addJob, editJob } from "../JS/actions/actionJob";
import { Link } from "react-router-dom";

const AddJob = () => {
  const [newJob, setNewJob] = useState({
    titre: "",
    description: "",
    dateDep: "",
    dateFin:"",
    salaire:"",
    emplacement:"",
    experience:"",
    niveauEtude:""
  });

  const dispatch = useDispatch();
  const jobId = useSelector((state) => state.reducerJob.jobId)

  useEffect(() => {
  
      setNewJob({ titre: "",
      description: "",
      dateDep: "",
      dateFin:"",
      salaire:"",
      emplacement:"",
      experience:"",
      niveauEtude:""});
    
  }, [jobId]);

  const handleChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "22rem",
          height: "25rem",
          marginRight: "30px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Card.Header
          style={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#277fa5",
            color: "white",
          }}
        >
          {/* {isEdit ? "Edit Job" : "Add New Job"} */}
          Ajouter une offre
        </Card.Header>

        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>Titre :</Form.Label>
                <Form.Control
                  type="text"
                  name="titre"
                  placeholder="Enter your titre"
                  onChange={handleChange}
                  // value={newJob.titre}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>description :</Form.Label>
                <Form.Control
                  type="description"
                  name="description"
                  placeholder="Enter your description"
                  onChange={handleChange}
                  // value={newJob.description}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>salaire :</Form.Label>
                <Form.Control
                  type="text"
                  name="salaire"
                  placeholder="Enter your salaire"
                  onChange={handleChange}
                  // value={newJob.salaire}
                />
              </Form.Group>
            </Form>
          </Card.Text>
        </Card.Body>
        <div className="buttons">
          <Link to="/JobCard">
            <Button
              variant="outline-primary edit-button"
              onClick={() => 
                dispatch(addJob(newJob))
              }
            >
               Ajouter
            </Button>
          </Link>
          <Link to="/JobCard"> 
          <Button variant="outline-danger edit-button">Cancel</Button>
          </Link>
         
        </div>
      </Card>
    </div>



  );
};

export default AddJob;
