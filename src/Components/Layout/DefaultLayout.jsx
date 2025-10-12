import NavbarComponent from "~/Components/Navbar/NavbarComponent";
import PosterComponent from "~/Components/Poster/PosterComponent";
import NavMobile from "~/Components/Navbar/NavMobile/NavMobile";
import { useResponsive } from "~/hooks/useResponsive";
import logo from "~/assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";
import "~/Components/Layout/Layout.scss";

const DefaultLayout = ({ children, isShowNavbar, isShowPoster }) => {
  const { isMobile, isTablet } = useResponsive();
  const navigate = useNavigate();

  const isMobileOrTablet = isMobile || isTablet;

  if (isMobileOrTablet) {
    isShowNavbar = false;
  }

  if (!isMobileOrTablet) {
    return (
      <div className="mt-16 mx-auto px-16 flex h-[680px] min-h-[600px] bg-[#161616] relative">
        {isShowNavbar && <NavbarComponent />}
        {isShowPoster && <PosterComponent />}

        <div className="flex-1 min-w-0 flex flex-col py-14 pb-5">
          <div className="h-full bg-[#222222] rounded-lg overflow-y-auto custom-scrollbar">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#161616] pb-[70px]">
      <div className="relative h-4">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Ero-Sennin"
          className="absolute top-2 left-6 w-[100px] h-auto object-contain rounded-lg hover:border-[1px] border-[#FFB800] cursor-pointer z-10"
        />
      </div>

      {isShowPoster && (
        <div className="my-6 px-2">
          <PosterComponent />
        </div>
      )}

      <div className="px-4 pb-4">
        <div className="bg-[#222222] rounded-lg overflow-y-auto custom-scrollbar min-h-[calc(100vh-400px)]">
          {children}
        </div>
      </div>

      <NavMobile />
    </div>
  );
};

export default DefaultLayout;
