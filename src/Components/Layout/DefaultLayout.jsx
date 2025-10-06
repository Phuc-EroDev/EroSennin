import React from "react";
import NavbarComponent from "~/Components/Navbar/NavbarComponent";
import PosterComponent from "~/Components/Poster/PosterComponent";

const DefaultLayout = ({ children, isShowNavbar, isShowPoster }) => {
  return (
    <div className="mt-16 mx-auto px-16 flex h-[680px] min-h-[600px] bg-[#161616] relative">
      {isShowNavbar && <NavbarComponent />}

      {isShowPoster && <PosterComponent />}

      {/* div content */}
      <div className="flex-1 min-w-0 flex flex-col py-14 pb-5">
        <div className="h-full bg-[#222222] rounded-lg overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
