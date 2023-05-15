import React from "react";
import PropTypes from "prop-types";

export default function Footer(props) {
  const { apiMessage } = props;
  return (
    <footer className="footer-msg text-white fixed bottom-0 left-0 z-20 w-full p-4  md:flex md:items-center md:justify-between md:p-6">
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{apiMessage}</div>
    </footer>
  );
}

Footer.propTypes = {
  apiMessage: PropTypes.string.isRequired,
};
