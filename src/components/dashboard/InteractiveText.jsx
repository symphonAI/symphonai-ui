import React from "react";
import PropTypes from "prop-types";

export default function Cta(props) {
  const { text } = props;
  return (
    <div className=" flex-auto w-80">
      <h1 className="interactive-text text-white text-6xl lg:text-right text-center ">{text}</h1>
    </div>
  );
}

Cta.propTypes = {
  text: PropTypes.string.isRequired,
};
