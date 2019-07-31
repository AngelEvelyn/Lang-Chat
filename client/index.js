import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import MyProvider from './Context.jsx';
import App from "./App.jsx";

render(
  <MyProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyProvider>
  , document.getElementById('root'))

