import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Containers/Home.jsx';
import ProfilePageContainer from './Containers/ProfilePageContainer.jsx'
import Navbar from './Components/Navbar.jsx';
import AuthModalPage from './Containers/AuthModalPage.jsx';

function App() {
  const [authModal, setAuthModal] = useState(false)
  // console.log(authModal)
  return (
    <div id="app-div">
      <Router>
        <Navbar authModal={authModal} setAuthModal={setAuthModal} />
        <div id="main-div">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile/:id" exact component={ProfilePageContainer} />
          </Switch>
        </div>
        {authModal && <AuthModalPage setAuthModal={setAuthModal} />}
      </Router>
    </div>
  );
}

export default App;