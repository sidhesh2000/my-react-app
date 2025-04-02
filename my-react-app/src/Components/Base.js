import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Base = ({
  className,
  sameascountertextClassName,
  maskClassName,
  mask = "https://generation-sessions.s3.amazonaws.com/4f21897937b60a20e14e009f43662797/img/mask-10.svg",
  controlsWidthClassName,
  controlsWidth = "https://generation-sessions.s3.amazonaws.com/4f21897937b60a20e14e009f43662797/img/controlswidth-10.svg",
}) => {
  return (
    <div className={`base ${className}`}>
      <div className="change-text-props">
        <div className={`sameascountertext ${sameascountertextClassName}`} />
      </div>
      <img className={`mask ${maskClassName}`} alt="Mask" src={mask} />
      <img className={`controls-width ${controlsWidthClassName}`} alt="Controls width" src={controlsWidth} />
    </div>
  );
};

Base.propTypes = {
  mask: PropTypes.string,
  controlsWidth: PropTypes.string,
};
