const mongoose = require("mongoose");
const schema = mongoose.Schema;

const offre = new schema({
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

module.exports = Offres = mongoose.model("offres", offre);

