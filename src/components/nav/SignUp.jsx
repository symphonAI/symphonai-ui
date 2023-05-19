import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

export default function SignUp() {
  return (
    <button type="button" className="w-fit px-4 py-1 flex gap-1 justify-center items-center  border-white border hover:bg-white hover:text-red-950">
      Sign Up
      <ChevronDoubleRightIcon className="h-4 w-4" />
    </button>
  );
}
