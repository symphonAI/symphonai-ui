import { React } from "react";
import Logo from "./Logo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Header() {
  return (
    <nav>
      <ul className=" px-4 py-2 flex gap-4 items-center" >
        <li >
          <Logo />
        </li>
        <li className=" ml-auto">
          <SignIn />
        </li>
        <li>
          <SignUp />
        </li>
      </ul>
    </nav>
  );
}
