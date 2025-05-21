import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import App from './components/App';
import Complete from "./components/Complete";
import NotFound from './components/NotFound';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Analytics />
        <Route exact path="/" element={<App />} />
        <Route exact path="/complete" element={<Complete />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
