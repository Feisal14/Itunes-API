const express = require("express");
const cors = require("cors");
const searchRoute = require("./routes/iSearch");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", 
  })
);

app.use(express.json());
app.use("/api", searchRoute);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
