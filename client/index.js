import React from 'react';
import { render } from "react-dom";
import App from "./App";
import MyProvider from './Context.jsx';

render(
  <MyProvider>
    <App />
  </MyProvider>
  , document.getElementById('root'))