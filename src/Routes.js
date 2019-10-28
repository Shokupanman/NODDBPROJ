import React from "react";
import { Switch, Route } from "react-router-dom";
import VideoGamesChat from "./Components/Video Games/VideoGamesChat";
import MusicChat from "./Components/Music/MusicChat";
import MoviesAndTv from "./Components/MoviesAndTv/MoviesAndTV";
import App from "./App";

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/api/MoviesAndTv" component={MoviesAndTv} />
    <Route path="/api/Music" component={MusicChat} />
    <Route path="/api/VideoGames" component={VideoGamesChat} />
  </Switch>
);
