import React from "react";
import PropTypes from "prop-types";

export default function Footer(props) {
  const { versionNumber } = props;
  return (
    <footer className="footer-msg text-white w-full p-4 md:flex relative">
      <div className="absolute p-4 left-0">Version {versionNumber}</div>
      <div className="absolute p-4 right-0">
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  versionNumber: PropTypes.string.isRequired,
};
