const mongoose = require("mongoose");
const schema = mongoose.Schema;

const job = new schema({
 //  user : {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "entreprise",
  //   required: true
  // },
  titre: { type: String, required: true },
  description: { type: String , required: true},
  dateDep: { type: Date },
  dateFin: { type: Date },
  salaire : { type: String },
  emplacement : { type: String }, 
  experience : { type: String },
  niveauEtude : { type: String }
});

module.exports = Job = mongoose.model("jobs", job);
