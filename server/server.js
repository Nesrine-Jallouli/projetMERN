const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
// const offre = require("./routes/offre")
const app = express();
app.use(express.json());
connectDB();
app.use('/user' , user);
// app.use('/offre' , offre);
app.use("/api/offres", require("./routes/offre"));
app.use("/api/jobs", require("./routes/job"));
const PORT = process.env.PORT || 7000;

app.listen(PORT, (err) =>
  err
    ? console.log("Server Error", err)
    : console.log(`Server is running on PORT ${PORT}`)
);
