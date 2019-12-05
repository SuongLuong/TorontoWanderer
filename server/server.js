const express = require("express");
const cors = require("cors");

// import routes
const placeRoute = require("./routes/placeRoute");
const restaurantRoute = require("./routes/restaurantRoute");

// start express
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/", placeRoute);
// app.use("./restaurant", restaurantRoute);

app.listen(8080, () => console.log("server working"));
