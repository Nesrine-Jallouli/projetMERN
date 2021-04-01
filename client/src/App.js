import React from 'react';
import './App.css';
import {Component} from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import { Container, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import EditProfile from "./pages/EditProfile";
import EditProfileEntreprise from "./pages/EditProfileEntreprise";
import { Button } from "react-bootstrap";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ErroPage from './pages/Error' ;
import { getProfile} from "./JS/actions";
import PrivateRoute from "./pages/PrivateRoute";
import SignUpCompany from './pages/SignUpCompany';
import LoginEntreprise from "./pages/LoginEntreprise";
import ProfileEntreprise from './pages/ProfileEntreprise';
import OffreCard from './components/OffreCard';
import AddOffre from './components/AddOffre';
import {getOffres} from './JS/actions/indexOffre';
import { getJobs, toggleFalse } from "./JS/actions/actionJob";
import JobCard from "./components/JobCard";
import AddJob from "./components/AddJob";
import EditJob from "./components/EditJob";
const App = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.reducerJob.jobs);
  const getAllJobs = () => {
    dispatch(getJobs());
  };
  

  useEffect(() => {
    getAllJobs();
  }, []);
  
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  // const offres = useSelector((state) => state.offreReducer.offres);
  // const getAllOffres = () => {
  //   dispatch(getOffres());
  // };

  // useEffect(() => {
  //   getAllOffres();
  // }, []);

  useEffect(() => {
    dispatch(getProfile());
    
  }, [isAuth]);
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        {/* <Link to="/JobCard">
          <Button variant="outline-primary button">Job List</Button>
        </Link>
        <Link to="/Add_Job">
          <Button
            variant="primary button"
            // onClick={() => dispatch(toggleFalse())}
          >
            Add Job
          </Button>
        </Link> */}
        
        <Switch>
        <Route path="/" exact component={Home} />
        <Route  path="/Register" render={(props) => <Register {...props} />} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/ProfileEntreprise" component={ProfileEntreprise} />
        <Route path="/Profile" component={Profile} />
        <Route path="/EditProfile"  component={EditProfile} />
        <Route path="/EditProfileEntreprise"  component={EditProfileEntreprise} />
        <Route path="/signupcompany" component={SignUpCompany} />
        <Route path="/LoginEntreprise" component={LoginEntreprise} />      
        {/* <Route component={ErroPage}/> */}
{/* 
                
        <Route
            path="/(Add_Offre|Edit_Offre)/"
            render={() => <AddOffre />}
          />
          <Route
            path="/OffreCard"
            render={() => (
              <div>
                {offres.map((el, i) => (
                  <OffreCard offre={el} key={i} />
                ))}
              </div>
            )}
          /> */}

          <Route
            path="/(Add_Job)/"
            render={() => <AddJob />}
          />
          <Route
            path="/(Edit_Job)/"
            render={() => <EditJob />}
          />
          <Route
            path="/JobCard"
            render={() => (
              <div className="job-list">
                {jobs.map((el, i) => (
                  <JobCard job={el} key={i} />
                ))}
              </div>
            )}
          />


        </Switch>
        </BrowserRouter>
       </div>
    )
};

export default App;
