const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoutes= require("./routes/html.js")
const workoutApiRoute =require("./routes/workoutApi")
const PORT = process.env.PORT || 3000;


const workout = require("./models/workout");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });
app.use(htmlRoutes)
app.use(workoutApiRoute)



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
