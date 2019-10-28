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

app.post("/api/MusicChat", ctrl.post);
app.get("/api/MusicChat", ctrl.getMessages);
app.put("/api/MusicChat/:userId", ctrl.edit);
app.delete("/api/MusicChat/:userId", ctrl.removeMessage);

app.post("/api/VideoGamesChat", ctrl.post);
app.get("/api/VideoGamesChat", ctrl.getMessages);
app.put("/api/VideoGamesChat/:userId", ctrl.edit);
app.delete("/api/VideoGamesChat/:userId", ctrl.removeMessage);

app.listen(SERVER_PORT, () =>
  console.log(`${SERVER_PORT} Shokupanmen are toasty`)
);
