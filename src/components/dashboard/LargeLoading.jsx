import React from "react";

export default function Loading() {
  return (
    <div className="flex-auto w-screen flex justify-center items-center h-[80vh]">
      <div
        className="w-24 h-24 rounded-full animate-spin
                    border-8 border-solid border-white border-t-transparent"
      />
    </div>
  );
}
