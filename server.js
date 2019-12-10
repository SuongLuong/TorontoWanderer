const express = require("express");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 8080;
// import routes
const placeRoute = require("./routes/placeRoute");
const restaurantRoute = require("./routes/restaurantRoute");

// start express
const app = express();

// middleware
app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

// routes
app.use("/places", placeRoute);
app.use("/restaurants", restaurantRoute);

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

app.listen(PORT, () => console.log("server working"));
