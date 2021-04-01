import {
    GET_JOB,
    GET_JOBS,
    TOGGLE_FALSE,
    TOGGLE_TRUE,
  } from "../constants/actionsTypes";
  
  const intialState = {
    jobs: [],
    jobId: {},
    isEdit: false,
  };
  
  const reducerJob = (state = intialState, action) => {
    switch (action.type) {
      case GET_JOBS:
        return { ...state, jobs: action.payload };
  
      case GET_JOB:
        return { ...state, jobId: action.payload[0] };
  
      case TOGGLE_TRUE:
        return { ...state, isEdit: true };
  
      case TOGGLE_FALSE:
        return { ...state, isEdit: false };
  
      default:
        return state;
    }
  };
  
  export default reducerJob;
  