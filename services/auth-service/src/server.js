const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 4001;
app.listen(PORT, () =>
  console.log(`Auth Service running on port ${PORT}`)
);
