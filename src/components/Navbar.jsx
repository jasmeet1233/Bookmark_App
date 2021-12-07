import React from "react";
import { Link } from "react-router-dom";

function Button({ text, bg, padding }) {
  return (
    <div>
      <button
        className={`
          ${padding || "px-6 py-2"} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}

function Navbar() {
  return (
    // <div className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900">
    <nav className="flex container mx-auto h-12 justify-between">
      <h1 className="font-semibold uppercase text-lg text-gray-900">LOGO</h1>
      <div>
        <ul className="flex items-center space-x-10 text-sm">
          <li className="text-gray-900 ">Links</li>
          <li className="text-gray-900 ">Images</li>
          <li className="text-gray-900 ">Text</li>
        </ul>
      </div>
      
      <div>
        <Button
          text="Login"
          bg="bg-gradient-to-r from-purple-500 to-blue-500"
        />
      </div>
    </nav>
    // </div>
  );
}

export default Navbar;
