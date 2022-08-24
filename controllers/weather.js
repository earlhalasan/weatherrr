/////////////////////////////////
// import dependencies
/////////////////////////////////
// this allows us to load our env variables
const express = require("express");
const fetch = require("node-fetch");

////////////////////////////////////////////
// Create router
////////////////////////////////////////////
const router = express.Router();

router.get("/", (req, res) => {
  res.render("show");
});

router.post("/", (req, res) => {
  const zip = req.body.zip;
  const requestURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=62652b0e412b7b86fc32d5631e6bec48`;
  fetch(requestURL)
    .then((apiResponse) => {
      console.log("api weather call yurrr", zip);
      return apiResponse.json();
    })
    .then((jsonData) => {
      console.log("Here is the weather data", jsonData);
      const weatherData = jsonData;
      res.render("show", { weatherData });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error });
    });
});

////////////////////////////////////////////
// Export the Router
////////////////////////////////////////////
module.exports = router;
