const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("dist/srm-asset"));

app.listen(process.env.port || port, () => {
  console.log("Front successfully deployed at port: " + port);
})
