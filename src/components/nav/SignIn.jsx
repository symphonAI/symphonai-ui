import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { useDisplay } from "../DisplayController";



export default function SignIn() {
  const { showSignInModal} = useDisplay()
  return (
    <button
      onClick={showSignInModal}
      type="button"
      className="w-fit rounded px-4 py-1 flex gap-1 justify-center items-center  border-white border hover:bg-white hover:text-red-950"
    >
      Sign in with Spotify
      <ChevronDoubleRightIcon className="h-4 w-4" />
    </button>
  );
}
