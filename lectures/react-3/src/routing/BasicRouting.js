import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const BasicRouting = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function Home() {
  return (
    <div>
      <h1>Stripe</h1>
      <p>Payments infrastructure for the internet.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Stripe</h2>
      <p>
        We bring together everything that’s required to build websites and apps
        that accept payments and send payouts globally. Stripe’s products power
        payments for online and in-person retailers, subscriptions businesses,
        software platforms and marketplaces, and everything in between.
      </p>
    </div>
  );
}

function Users() {
  return (
    <div>
      <h2>Our Users</h2>
      <p>
        Millions of companies of all sizes—from startups to Fortune 500s—use
        Stripe’s software and APIs to accept payments, send payouts, and manage
        their businesses online.
      </p>
    </div>
  );
}

export default BasicRouting;
