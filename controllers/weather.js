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
  const requestURL =
    "api.openweathermap.org/data/2.5/weather?zip={ZIP CODE},us&units=imperial&appid={API KEY}";
});

////////////////////////////////////////////
// Export the Router
////////////////////////////////////////////
module.exports = router;
