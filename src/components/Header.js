import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-16 bg-gradient-to-r from-fuchsia-800 to-fuchsia-600 text-white p-5">
      <div className="flex items-center">
        <img
          src="/assets/troll-face.png"
          className="h-10 mr-6"
          alt="Troll Face"
        />
        <h2 className="text-base">Mem Generator</h2>
      </div>
    </header>
  );
};

export default Header;
