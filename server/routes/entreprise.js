const express = require("express");
const { entrepriseRegister, entrepriseLogin } = require("../controllers/entreprise.controller.js");
const Entreprise = require('../models/Entreprise')
const isAuth = require('../middleware/passport-setup')
const router = express.Router();
router.post("/entrepriseregister",  entrepriseRegister);
router.post("/entrepriselogin", entrepriseLogin);
router.get("/entreprisecurrent", isAuth(),(req, res) => res.send(req.entreprise));

// router.get(`/entreprisecurrent`, (req, res) => res.json(req.entreprise));
// http://localhost:7000/entreprise/register
router.get("/:_id", (req, res) => {
  let { _id } = req.params;
  Entreprise.find({ _id })
    .then((res) => res.send('entreprise'))
    .catch((err) => res.send(err));
});
// http://localhost:7000/entreprise/update/604f77dbdbb7cd1e3493b54c
  router.put('/updateentreprise/:_id', (req, res) => {
    let _id = req.params._id;
    Entreprise.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
        .then(res => res.send({msg : "updated successfully"}))
        .catch(err => res.send(err));
})
module.exports = router;