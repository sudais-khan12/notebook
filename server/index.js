const connection = require("./db");
const express = require("express");

connection();
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes.js"));

app.listen(port);
