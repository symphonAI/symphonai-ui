import React from "react";
import { NavLink } from "react-router-dom";

export default function Logo () {
  return (
    <NavLink to="/">
      <div className=" text-white branding">symphonAI</div>
    </NavLink>
  );
}