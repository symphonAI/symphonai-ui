import React from "react";
import PropTypes from "prop-types";

export default function Playlist(props) {
  const { data, clickClose } = props;
  let { requestUri } = data;
  requestUri = requestUri.replace("spotify:playlist:", "");

  const uri = [
    "https://open.spotify.com/embed/playlist/",
    requestUri,
    "?utm_source=generator",
  ].join("");

  return (
    <div className="flex-auto gap-4 flex flex-row w-80">
      <iframe
        title="AI Generated playlist"
        style={{ borderRadius: "12px" }}
        src={uri}
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      <button className=" self-start " type="button" onClick={clickClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

Playlist.propTypes = {
  data: PropTypes.string.isRequired,
  clickClose: PropTypes.func.isRequired
};
