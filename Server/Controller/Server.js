require("dotenv").config();
let express = require("express");
let app = express();
let { SERVER_PORT } = process.env;
let ctrl = require("./controllers");
app.use(express.json());

app.post("/api/MoviesAndTV", ctrl.post);
app.get("/api/MoviesAndTV", ctrl.getMessages);
app.put("/api/MoviesAndTV/:userId", ctrl.edit);
app.delete("/api/MoviesAndTV/:userId", ctrl.removeMessage);

app.listen(SERVER_PORT, () =>
  console.log(`${SERVER_PORT} Shokupanmen are toasty`)
);
