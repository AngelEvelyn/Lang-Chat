import React, { useState, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Containers/Home';

function App(props) {
  return (
    <Home />
  );
}

export default App;