import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import DetailBot from "./components/DetailBot/DetailBot";
import Arena from "./components/Arena/Arena";

export default (
  <Switch>
    <Route path="/arena" component={Arena} />
    <Route path="/detail/:id" component={DetailBot} />
    <Route path="/add" component={Form} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route exact path="/" component={Dashboard} />
  </Switch>
);
