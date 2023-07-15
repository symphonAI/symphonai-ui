import React from "react";

export default function Footer() {
  return (
    <footer className="footer-msg text-white w-full p-4 md:flex relative">
      <div className="absolute p-4 left-0">Version 0.1.0</div>
      <div className="absolute p-4 right-0">
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
