import { React } from "react";
import Logo from "./Logo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Header() {
  return (
    <nav>
      <ul className=" flex items-center" >
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
