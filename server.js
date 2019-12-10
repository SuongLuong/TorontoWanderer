const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8080;
// import routes
const placeRoute = require("./routes/placeRoute");
const restaurantRoute = require("./routes/restaurantRoute");

// start express
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/places", placeRoute);
app.use("/restaurants", restaurantRoute);
// app.use("./restaurant", restaurantRoute);

app.listen(port, () => console.log("server working"));
