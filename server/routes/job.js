const express = require("express");
const router = express.Router();
const Job = require("../models/job");

//@Api http:localhost:8000/api/jobs
//@desc Add new Job
//@access public
router.post("/", (req, res) => {
  const newJob = new Job({ ...req.body });
  newJob
    .save()
    .then((job) => res.status(200).json(job))
    .catch((err) => res.send(err));
});

//@Api http:localhostb:8000/api/jobs
//@desc Get All Jobs
//@access public
router.get("/", (req, res) => {
  Job.find()
    .then((jobs) => res.status(200).json(jobs))
    .catch((err) => res.send(err));
});

//@Api http:localhost:8000/api/jobs
//@desc Get Job By Id
//@access public
router.get("/:_id", (req, res) => {
  // let id = req.params._id
  let { _id } = req.params;
  Job.find({ _id })
    .then((job) => res.send(job))
    .catch((err) => res.send(err));
});

//@Api http:localhost:8000/api/jobs
//@desc Delete Job By Id
//@access public
router.delete("/:_id", (req, res) => {
  let { _id } = req.params;
  Job.findByIdAndDelete({ _id })
    .then(() => res.send("Job has been deleted"))
    .catch((err) => res.send(err));
});

//@Api http:localhost:8000/api/jobs
//@desc Update Job By Id
//@access public
router.put("/:_id", (req, res) => {
  let { _id } = req.params;
  Job.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
    .then(() => res.send("Job has been updated"))
    .catch((err) => res.send(err));
});

module.exports = router;
