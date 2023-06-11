import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import mockup from "../image/iphone-mockup.png";
import { useDisplay } from "../components/DisplayController";

export default function Home() {
  const { showSignInModal } = useDisplay();

  return (
    <div>
      <div className=" flex flex-row gap-4">
        <div className=" mt-44 ml-6 flex-1 flex flex-col gap-6">
          <h1 className=" text-6xl font-machina">Introducing symphonAI</h1>
          <p className=" text-2xl">
            We&apos;re leveraging power of AI to create tailored playlists that
            resonate with your emotions and preferences. Our web app takes your
            musical prompts and combines them with your listening preferences to
            create a playlist for you.
          </p>
          <button
            onClick={showSignInModal}
            type="button"
            className=" rounded w-fit px-4 py-1 flex gap-1 justify-center items-center   border-white border hover:bg-white hover:text-red-950"
          >
            Try <span className=" font-machina">symphonAI</span>
            <ChevronDoubleRightIcon className="h-4 w-4" />
          </button>
        </div>
        <div className=" h-[calc(100vh-4rem)] hidden md:flex  mr-6 flex-1 justify-center items-center">
          <div className="flex-1 flex justify-center items-center ">
            <img className=" block mockup " src={mockup} alt="Iphone mockup" />
          </div>
        </div>
      </div>
    </div>
  );
}
