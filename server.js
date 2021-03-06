const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/nodeapi",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);
requireDir("./src/models");

app.use("/api", require("./src/routes"));
const port = process.env.PORT || 3001;
app.listen(port);
