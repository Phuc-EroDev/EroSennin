import React from "react";
import ActionsComponent from "~/Components/Navbar/ActionsComponent";
import logo from "~/assets/Logo.jpg";

const NavbarComponent = () => {
  return (
    <div className="mb-5 flex flex-col justify-end z-10">
      <img
        src={logo}
        alt="Ero-Sennin"
        className="absolute top-14 left-20 w-[120px] h-auto object-contain rounded-lg cursor-pointer"
      />
      <ActionsComponent />
    </div>
  );
};

export default NavbarComponent;
