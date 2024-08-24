import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="text-yellow-400 text-4xl">
            Zumar
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
