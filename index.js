const express = require("express");

const db = require("./config/mongoose");
const port = 3000;

const app = express();

//Body parser
app.use(express.urlencoded({extended: true}));


// use express router
app.use("/", require("./routes"));

//Checks if server is listening
app.listen(port, function(err) {
  if (err) {
    console.log("Error Running the Server", err);
  }
  console.log("Server Running on Port: ", port);
});