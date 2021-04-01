import {
    GET_JOB,
    GET_JOBS,
    TOGGLE_FALSE,
    TOGGLE_TRUE,
  } from "../constants/actionsTypes";
  import axios from "axios";
  
  export const getJobs = () => (dispatch) => {
    axios
      .get("/api/jobs")
      .then((res) => dispatch({ type: GET_JOBS, payload: res.data }))
      .catch((err) => console.log(err));
  };
  
  export const getJob = (id) => (dispatch) => {
    axios
      .get(`/api/jobs/${id}`)
      .then((res) => dispatch({ type: GET_JOB, payload: res.data }))
      .catch((err) => console.log(err));
  };
  
  export const addJob = (newJob) => (dispatch) => {
    axios
      .post("/api/jobs", newJob)
      .then(() => dispatch(getJobs()))
      .catch((err) => console.log(err));
  };
  
  export const deleteJob = (id) => (dispatch) => {
    axios
      .delete(`/api/jobs/${id}`)
      .then(() => dispatch(getJobs()))
      .catch((err) => console.log(err));
  };
  
  export const editJob = (id, editJob) => (dispatch) => {
    axios
      .put(`/api/jobs/${id}`, editJob)
      .then(() => dispatch(getJobs()))
      .catch((err) => console.log(err));
  };
  
  export const toggleTrue = () => {
    return {
      type: TOGGLE_TRUE,
    };
  };
  export const toggleFalse = () => {
    return {
      type: TOGGLE_FALSE,
    };
  };
  