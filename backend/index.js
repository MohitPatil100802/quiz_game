import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
require("dotenv").config();
// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.databaselink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("Quiz Game API Running!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
