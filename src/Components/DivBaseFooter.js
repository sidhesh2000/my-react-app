import React from "react";
import "./style.css";

export const DivBaseFooter = ({ className }) => {
  return (
    <div className={`div-basefooter ${className}`}>
      <div className="div-row">
        <img
          className="TCS-svg"
          alt="Tcs svg"
          src="https://generation-sessions.s3.amazonaws.com/e9b44d59cf464182a9012bcdccaeb4a8/img/tcs-20logo-svg-1.svg"
        />
        <img
          className="ul-social-icn-ul"
          alt="Ul social icn ul"
          src="https://generation-sessions.s3.amazonaws.com/e9b44d59cf464182a9012bcdccaeb4a8/img/ul-social-icn-ul-1.svg"
        />
        <p className="element-TATA">©2023 TATA Consultancy Services Limited</p>
        <div className="ul-base-footer-tcs">
          <div className="privacy-notice">Privacy Notice</div>
          <div className="cookie-policy">Cookie Policy</div>
          <div className="disclaimer">Disclaimer</div>
          <div className="security-policy">Security Policy</div>
        </div>
      </div>
    </div>
  );
};
