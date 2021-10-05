import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import UnityScreen from "../components/UnityScreen.jsx";
import Counter from "../components/Counter.jsx"
import Posts from "../components/Posts.jsx";

const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={UnityScreen} />
    <Route path="/counter" component={Counter} />
    <Route path="/posts" component={Posts} />
  </BrowserRouter>
);

export default Router;