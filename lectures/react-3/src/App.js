import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BasicRouting from "./routing/BasicRouting";
import DynamicRouting from "./routing/DynamicRouting";

import Page1 from "./css/Page1";
import Page2 from "./css/Page2";

import Bootstrap from "./libraries/Bootstrap";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "1rem 2rem" }}>
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: "1rem",
            borderBottom: "2px solid black",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <Link to="/basic-routing" style={{ marginRight: "1rem" }}>
              Basic Routing
            </Link>

            <Link to="/dynamic-routing">Dynamic Routing</Link>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <Link to="/page-1" style={{ marginRight: "1rem" }}>
              CSS Example Page 1
            </Link>
            <Link to="/page-2">CSS Example Page 2</Link>
          </div>

          <div>
            <Link to="/react-bootstrap">React-Bootstrap Example</Link>
          </div>
        </nav>

        <Switch>
          <Route path="/basic-routing">
            <BasicRouting />
          </Route>
          <Route path="/dynamic-routing">
            <DynamicRouting />
          </Route>

          <Route path="/page-1">
            <Page1 />
          </Route>
          <Route path="/page-2">
            <Page2 />
          </Route>

          <Route path="/react-bootstrap">
            <Bootstrap />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
