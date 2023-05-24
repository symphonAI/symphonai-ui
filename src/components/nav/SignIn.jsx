import React from "react";
import { useDisplay } from "../DisplayController";

export default function SignIn() {
  const { showSignInModal} = useDisplay()
  return (
    <button onClick={showSignInModal} type="button" className="hover:underline">
      Sign In
    </button>
  );
}
