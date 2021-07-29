import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home'; //new
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create"> 
              {/** React matches against the first one it sees and matches there */}
              {/* So exact paths are needed to prevent ambiguity */}
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>

        </div>
        {/* <br></br>
        <button onClick={() => setCount(count+1)}>Like me</button>
        <br></br>
        {count} */}
      </div>
    </Router>
  );
}

export default App;
