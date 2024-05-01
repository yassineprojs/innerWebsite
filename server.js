import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import hashedPassword from "./passwordHash.js";
const app = express();
app.use(cors());

// allow the app to accept json
app.use(express.json());

app.post("/login", async (req, res) => {
  try {
    // Compare the provided password with the hashed password.
    if (await bcrypt.compare(req.body.password, hashedPassword)) {
      res.send("Success");
    } else {
      res.send("Not Allowed");
    }
  } catch {
    res.status(500).send();
  }
});

app.listen(3000);
