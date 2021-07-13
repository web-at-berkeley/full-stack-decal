import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

const data = [
  {
    name: "Netflix",
    description:
      "Netflix, Inc. is an American over-the-top content platform and production company headquartered in Los Gatos, California.",
    route: "netflix",
  },
  {
    name: "Zillow",
    description:
      "Zillow Group, Inc., or simply Zillow, is an American online real estate marketplace company that was founded in 2006.",
    route: "zillow",
  },
  {
    name: "Yahoo",
    description:
      "Yahoo is an American web services provider. It is headquartered in Sunnyvale, California and is owned by Verizon Media.",
    route: "yahoo",
  },
  {
    name: "Instagram",
    description:
      "Instagram is an American photo and video sharing social networking service created by Kevin Systrom and Mike Krieger.",
    route: "instagram",
  },
];

function DynamicRouting() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>

        <div
          style={{
            display: "flex",
            paddingBottom: "1rem",
            borderBottom: "1px solid black",
          }}
        >
          {data.map((item) => (
            <Link to={`/${item.route}`} style={{ marginRight: "10%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem",
                  border: "1px solid black",
                  maxWidth: "100%",
                }}
              >
                <h3>{item.name}</h3>
                <p>{item.description.substring(0, 60)}...</p>
              </div>
            </Link>
          ))}
        </div>

        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  let item = data.find((item) => item.route === id);

  if (!item) {
    item = data[0];
  }

  return (
    <div style={{ maxWidth: "50%" }}>
      <h3>Selection: {item.name}</h3>
      <p>Description: {item.description}</p>
    </div>
  );
}

export default DynamicRouting;
