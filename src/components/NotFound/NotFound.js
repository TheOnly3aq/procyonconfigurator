import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../../utils";
// Styles
import "./NotFound.css";


const NotFound = () => {
const link = window.history.go(-1);return false;
  return (
    <div className="nf">
      <h1>Page not found!</h1>
      <p className="nf-edd">You are being sent home {link}</p>
      <div className="nf-content"></div>
    </div>
  );
};

NotFound.propTypes = {
  config: PropTypes.object,
  models: PropTypes.array,
  totalPrice: PropTypes.number,
};

export default NotFound;
