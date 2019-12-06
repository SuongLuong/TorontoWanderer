const express = require("express");
const router = express.Router();

// import data
const data = require("../data/restaurant.json");
const data2 = require("../data/restaurantdetail.json");

router.get("/", (req, res) => {
  res.send(data);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  const place = data2.find(item => item.id === id);
  if (!place) {
    res.status(404).send("The restaurant with the given ID was not found");
  }
  res.send(place);
});

module.exports = router;
