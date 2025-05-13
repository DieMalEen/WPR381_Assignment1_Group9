// app.js

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const pageRoutes = require("./routes/pageRoutes");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Body parser middleware (MUST come before routes)
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", pageRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
