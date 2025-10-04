import React from "react";
import NavbarComponent from "~/Components/Navbar/NavbarComponent";
import PosterComponent from "~/Components/Poster/PosterComponent";

const DefaultLayout = ({ children, isShowNavbar, isShowPoster }) => {
  return (
    <div className="mt-16 mx-auto px-16 flex min-h-[690px] bg-[#161616] relative">
      {isShowNavbar && <NavbarComponent />}

      {isShowPoster && <PosterComponent />}

      <div className="flex-1 min-w-0 bg-[#202020]">{/* {children} */}</div>
    </div>
  );
};

export default DefaultLayout;
