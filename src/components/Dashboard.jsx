import React, { useState } from "react";
import InteractiveText from "./InteractiveText";
import GptInput from "./GptInput";
import Loading from "./Loading";
import Playlist from "./Playlist";
import PlaylistGrid from "./playlistGrid/PlaylistGrid";

export default function Dashboard() {
  const [interactiveText, setInteractiveText] = useState(
    "What do you want to listen to?"
  );
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [options, setOptions] =useState([]);

  async function fetchData(prompt, temperature) {
    try {
      setLoading(true);
      const response = await fetch("http://api.symphonai.net/chatgpt/prompt", {
        method: "POST",
        // Add any required headers or body data for the POST request
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "prompt": prompt, "temperature": temperature, "options": options }),
      });
      const fetchedData = await response.json();

      setLoading(false);
      // Process the retrieved data here
      setData(fetchedData);
      setInteractiveText("Here's your music");
    } catch (error) {
      setLoading(false);
      // Handle any errors that occur during the fetching process
      setInteractiveText("Sorry there's been a problem");
      // eslint-disable-next-line no-console
      console.error("Error fetching data:", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInteractiveText("Loading your results");

    const temperature = (e.target.temperature.value / 100)

    console.log(temperature)

    const prompt = e.target.message.value;
    fetchData(prompt, temperature);
  };

  const handleExploreClick = (e) => {
    const clicked = e.target.checked;
    if (clicked) {
      setOptions(["EXPLORE_MODE"])
    } else {
      setOptions([])
    }
  }

  const handlePlaylistClick = (e) => {
    e.preventDefault();
    const temperature = 0.1
    setInteractiveText("Loading your results");
    const { prompt } = e.target.dataset;
    fetchData(prompt, temperature);
  };

  const handleClickClose = () => {
    setData(null);
    setInteractiveText("Let's explore music again");
  }

  return (
    <div>
      <main className="flex flex-col justify-center items-center h-full ">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex lg:flex-row sm:flex-col flex-col justify-center gap-8 mb-10">
          <InteractiveText text={interactiveText} />
          {/* eslint-disable-next-line no-nested-ternary */}
          {data ? (
            <Playlist data={data} clickClose={handleClickClose} />
          ) : loading ? (
            <Loading />
          ) : (
            <GptInput onSubmit={handleSubmit} exploreClick={handleExploreClick} />
          )}
        </div>
        <PlaylistGrid handleClick={handlePlaylistClick} />
      </main>
    </div>
  );
}
