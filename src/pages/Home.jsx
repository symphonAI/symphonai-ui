import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className=" flex flex-row">
      <div className=" mt-44 ml-6 flex-1 flex flex-col gap-6">
        <h1 className=" text-6xl font-machina">Introducing symphonAI</h1>
        <p className=" text-2xl">
          We&apos;re leveraging power of AI to create tailored playlists that
          resonate with your emotions and preferences. Our web app takes your
          musical prompts and combines them with your listening preferences to
          create a playlist for you.
        </p>
        <a
          className=" w-fit px-4 py-1 flex gap-1 justify-center items-center  border-white border hover:bg-white hover:text-red-950"
          href="./signup"
        >
          Try <span className=" font-machina">symphonAI</span>
          <ChevronDoubleRightIcon className="h-4 w-4" />
        </a>
      </div>
      {/* <div className=" mr-6 flex-1">Insert Art here</div> */}
    </div>
  );
}
