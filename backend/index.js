const express = require("express");
const app = express();
require("./db");

const PORT = process.env.PORT || 5000;
app.use(express.json());

// const doctorRouter = require("./Routes/CreateDoctor");
// const patientRouter = require("./Routes/CreatePatient");
// const loginpatient = require("./Routes/LoginPatient");
// const profilepicchangeRouter = require("./Routes/ProfilepicChange"); // Import the profilepicchange route

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.use(doctorRouter);
// app.use(patientRouter);
// app.use(loginpatient);
// app.use(profilepicchangeRouter); // Use the profilepicchange route

app.listen(PORT, () => {
  console.log(`App is running in ${PORT}`);
});
