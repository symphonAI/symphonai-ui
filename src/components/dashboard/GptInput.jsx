import React, { useState } from "react";
import PropTypes from "prop-types";

export default function GptInput(props) {
  const [temperature, setTemperature] = useState(10);
  const updateTemperature = (e) => {
    setTemperature(e.target.value);
  };

  const { onSubmit, exploreClick } = props;
  return (
    <div className="flex-auto w-80">
      <form action="" onSubmit={onSubmit}>
        <textarea
          id="message"
          rows="8"
          name="prompt"
          className="block p-2.5 w-full text-sm text-white bg-transparent rounded-lg border border-white focus:ring-violet-700 focus:border-violet-700 placeholder-white resize-none mb-4 "
          placeholder="Type your music preferences here..."
        />

        <div className=" mb-4 flex justify-start items-baseline gap-4  ">
          <label
            htmlFor="temperature"
            className=" text-base text-white font-bold "
          >
            Randomness
          </label>
          <input
            onChange={updateTemperature}
            id="temperature"
            type="range"
            value={temperature}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-violet-700"
          />
        </div>

        <div className="mb-4 flex flex-row justify-start items-center text-lg font-bold gap-4">
          <input
            className="focus:ring-violet-700 focus:border-violet-700 bg-transparent border-white text-violet-700"
            onClick={exploreClick}
            type="checkbox"
            name="explore"
            id="explore"
          />
          <label htmlFor="explore">Explore Mode</label>
        </div>

        <button className="btn-white-violet w-full" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

GptInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  exploreClick: PropTypes.func.isRequired,
};
