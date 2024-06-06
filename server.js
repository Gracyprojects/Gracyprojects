require("dotenv").config({ path: "DB_URL" });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const app = express();


// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// add Routes here
app.use("/api/v1/auth", routes.AuthRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  console.log(`Server running on  port ${PORT}`);
});
