import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import UnityScreen from "../components/UnityScreen.jsx";
import Counter from "../components/Counter.jsx"
import Posts from "../components/Posts.jsx";
import Demo from "../components/demo/Demo.jsx"

import Charts from "../components/charts/Charts.jsx";
import Layout from "../components/layout/Layout.jsx";
import Grid from "../components/layout/Grid.jsx";
import Video from "../components/video/Video.jsx";
import Controller from "../components/video/Controller.jsx";
import PieDemo from "../components/layout/PieDemo.jsx";

const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={Video} />
    <Route path="/counter" component={Counter} />
    <Route path="/posts" component={Posts} />
    <Route path="/charts" component={Charts} />
    <Route path="/demo" component={Demo} />
    <Route path="/layout" component={Layout} />
    <Route path="/grid" component={Grid} />
    <Route path="/controller" component={Controller} />
    <Route path="/tmp" component={PieDemo} />
  
  </BrowserRouter>
);

export default Router;