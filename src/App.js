import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import indexRoutes from "routes/index.jsx";
import { ParallaxProvider } from 'react-scroll-parallax';
var hist = createBrowserHistory();

function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline/>
    <ParallaxProvider>
    <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, index) => {
        return <Route key={index.toString()} exact path={prop.path}  component={prop.component} />;
      })}
    </Switch>
  </Router>
  </ParallaxProvider>
    </React.Fragment>

  );
}

export default MyApp;