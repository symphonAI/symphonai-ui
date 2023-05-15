import React from "react";
import PropTypes from "prop-types";

export default function PlaylistCard(props) {
  const { title, image, prompt, handleClick } = props;
  return (
    <button type="button" onClick={handleClick}>
      <div
        data-prompt={prompt}
        className=" w-60 border rounded h-60 hover:border-2 hover:border-violet-700 overflow-hidden bg-cover bg-center "
        style={{
          "background-image": `url(${process.env.PUBLIC_URL}/img${image}`,
        }}
      >
        <h3 className="card-header font-bold p-4">{title}</h3>
      </div>
    </button>
  );
}

PlaylistCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};
