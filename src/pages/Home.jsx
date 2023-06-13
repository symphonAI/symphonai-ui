import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import mockup from "../image/iphone-mockup.png";
import { useDisplay } from "../components/DisplayController";
import { useAuth } from "../components/AuthProvider";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const { checkLogin, onCallback } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");

  useQuery(["onCallback", code], onCallback, {
    enabled: !!code, // Only enable the query when code is present
    retry: false, // Disable automatic retries
  });

  useEffect(() => {
    if (!code) {
      console.log("No code: Checking login...");
      checkLogin()
        // eslint-disable-next-line no-unused-vars
        .then((resp) => navigate("/main"))
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {
          // Not logged in!
          setLoaded(true);
        });
    }
  }, []);

  const { showSignInModal } = useDisplay();

  return (
    <div>
      {loaded && (
        <div className=" flex flex-row gap-4">
          <div className=" mt-44 ml-6 flex-1 flex flex-col gap-6">
            <h1 className=" text-6xl font-machina">Introducing symphonAI</h1>
            <p className=" text-2xl">
              We&apos;re leveraging power of AI to create tailored playlists
              that resonate with your emotions and preferences. Our web app
              takes your musical prompts and combines them with your listening
              preferences to create a playlist for you.
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
              <img
                className=" block mockup "
                src={mockup}
                alt="Iphone mockup"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
