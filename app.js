const express = require("express");
const cors = require("cors");
const dataController = require("./dataController");

const app = express();

// JSON Parser
app.use(express.json());

// cors
app.use(cors());

app.get("/:data", dataController.wroteData);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on ${port} .......`);
});
