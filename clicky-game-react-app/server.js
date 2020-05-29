const express = require("express");
const bodyParser = require('body-parser');

// const mongoose = require("mongoose");
const routes = require("../../Clicky-Game/clicky-game-react-app/routes");
const app = express();
const PORT = process.env.PORT || 3001;
 
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
routes(app);

// Connect to the Mongo DB
// TODO: rename the database to something that will relate to our app
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GoogleBooksDB");

// Start the API server and also last command to create server 
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
