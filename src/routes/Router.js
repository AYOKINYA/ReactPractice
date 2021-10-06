import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import UnityScreen from "../components/UnityScreen.jsx";
import Counter from "../components/Counter.jsx"
import Posts from "../components/Posts.jsx";

import Charts from "../components/charts/Charts.jsx";

const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={UnityScreen} />
    <Route path="/counter" component={Counter} />
    <Route path="/posts" component={Posts} />
    <Route path="/charts" component={Charts} />
  </BrowserRouter>
);

export default Router;