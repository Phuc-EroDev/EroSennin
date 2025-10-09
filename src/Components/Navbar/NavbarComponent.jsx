import React from "react";
import { useNavigate } from "react-router-dom";
import ActionsComponent from "~/Components/Navbar/ActionsComponent";
import logo from "~/assets/logo.jpg";

const NavbarComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-5 flex flex-col justify-end z-10">
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="Ero-Sennin"
        className="absolute top-14 left-20 w-[120px] h-auto object-contain rounded-lg cursor-pointer"
      />
      <ActionsComponent />
    </div>
  );
};

export default NavbarComponent;
