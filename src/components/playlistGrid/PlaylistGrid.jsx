import React from "react";
import PropTypes from "prop-types";
import PlaylistCard from "./PlaylistCard";
import playlists from "../../database/playlists.json";


export default function PlaylistGrid(props) {
  const { handleClick } = props;
  return (
    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
      {playlists.playlists.map((playlist) => (
        <PlaylistCard
          key={playlist.id}
          title={playlist.title}
          image={playlist.image}
          prompt={playlist.prompt}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

PlaylistGrid.propTypes = {
  handleClick: PropTypes.func.isRequired
};