import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Containers/Home.jsx';
import ProfilePageContainer from './Containers/ProfilePageContainer.jsx'
import Navbar from './Components/Navbar.jsx';

function App() {
  return (
    <div id="app-div">
      <Router>
        <Navbar />
        <div id="main-div">
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile/:id" exact component={ProfilePageContainer} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;