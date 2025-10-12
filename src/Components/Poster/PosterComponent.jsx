import React from "react";
import {
  Facebook,
  Linkedin,
  Github,
  Send,
  Phone,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useResponsive } from "~/hooks/useResponsive";
import coverImg from "~/assets/images/cover.png";
import avatar from "~/assets/images/avatar.jpg";
import cvPDF from "~/assets/CV/VoTriPhuc_CV.pdf";

const PosterComponent = () => {
  const { isMobile, isTablet } = useResponsive();

  const socials = [
    { icon: Facebook, link: "https://www.facebook.com/phuc.vo.692470" },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/ph%C3%BAc-v%C3%B5-tr%C3%AD-771966387/",
    },
    { icon: Github, link: "https://github.com/Phuc-EroDev" },
    { icon: Send, link: "https://web.telegram.org/k/" },
    { icon: Phone, link: "https://www.zalo.com/" },
  ];

  if (isMobile) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-[#f6b84628] to-transparent p-2">
        <div className="rounded-lg bg-[#222222] shadow-xl shadow-black/50">
          <div
            className="relative h-[200px] bg-cover bg-center rounded-t-lg"
            style={{ backgroundImage: `url(${coverImg})` }}
          >
            <div className="absolute bottom-[-30px] w-full h-[60px] rounded-t-[100%] bg-[#222222]"></div>
            <img
              src={avatar}
              alt="Avatar"
              className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] object-cover rounded-full border-4 border-[#222222]"
            />
          </div>
          <div className="mt-[40px] pb-[20px] px-4">
            <h2 className="text-center text-[28px] leading-tight">
              Võ Trí Phúc
            </h2>
            <p className="mt-[8px] text-center text-[#f6b846] text-[15px]">
              Web Developer
            </p>

            <div className="flex justify-center gap-4 mt-6">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    to={social.link}
                    target="_blank"
                    className="flex items-center justify-center w-9 h-9 rounded-sm group hover:bg-[#353535] transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5 text-white group-hover:text-[#f6b846] transition-colors duration-300" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex bg-[#353535] h-[60px] md:h-[80px] border-t border-[#f6b846] rounded-b-lg">
            <a
              href={cvPDF}
              download="CV_VoTriPhuc_FullStack.pdf"
              className="relative group w-full flex items-center justify-center gap-2 md:gap-3 bg-[#222222] rounded-bl-lg hover:bg-[#353535] transition-colors duration-300 after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[1px] after:bg-gradient-to-t after:from-transparent after:to-[#f6b846]"
            >
              <span className="text-[12px] md:text-[14px] font-bold group-hover:text-[#f6b846] transition-colors duration-300">
                DOWNLOAD CV
              </span>
              <Download className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-[#f6b846] transition-colors duration-300" />
            </a>
            <a
              href="mailto:Phucvo140902@gmail.com"
              className="relative group w-full flex items-center justify-center gap-2 md:gap-3 bg-[#222222] rounded-br-lg hover:bg-[#353535] transition-colors duration-300 after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:w-[1px] after:bg-gradient-to-t after:from-transparent after:to-[#f6b846]"
            >
              <span className="text-[12px] md:text-[14px] font-bold group-hover:text-[#f6b846] transition-colors duration-300">
                CONTACT ME
              </span>
              <Send className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-[#f6b846] transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-[#f6b84628] to-transparent p-2">
        <div className="rounded-lg bg-[#222222] shadow-xl shadow-black/50">
          <div
            className="relative h-[350px] bg-cover bg-center rounded-t-lg"
            style={{ backgroundImage: `url(${coverImg})` }}
          >
            <div className="absolute bottom-[-40px] w-full h-[80px] rounded-t-[100%] bg-[#222222]"></div>
            <img
              src={avatar}
              alt="Avatar"
              className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[140px] h-[140px] object-cover rounded-full border-4 border-[#222222]"
            />
          </div>
          <div className="mt-[55px] pb-[35px] px-6">
            <h2 className="text-center text-[38px] leading-tight">
              Võ Trí Phúc
            </h2>
            <p className="mt-[12px] text-center text-[#f6b846] text-[18px]">
              Web Developer
            </p>

            <div className="flex justify-center gap-5 mt-10">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    to={social.link}
                    target="_blank"
                    className="flex items-center justify-center w-11 h-11 rounded-sm group hover:bg-[#353535] transition-colors duration-200"
                  >
                    <Icon className="w-6 h-6 text-white group-hover:text-[#f6b846] transition-colors duration-300" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex bg-[#353535] h-[100px] border-t border-[#f6b846] rounded-b-lg">
            <a
              href={cvPDF}
              download="CV_VoTriPhuc_FullStack.pdf"
              className="relative group w-full flex items-center justify-center gap-4 bg-[#222222] rounded-bl-lg hover:bg-[#353535] transition-colors duration-300 after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[1px] after:bg-gradient-to-t after:from-transparent after:to-[#f6b846]"
            >
              <span className="text-[17px] font-bold group-hover:text-[#f6b846] transition-colors duration-300">
                DOWNLOAD CV
              </span>
              <Download className="w-6 h-6 text-white group-hover:text-[#f6b846] transition-colors duration-300" />
            </a>
            <a
              href="mailto:Phucvo140902@gmail.com"
              className="relative group w-full flex items-center justify-center gap-4 bg-[#222222] rounded-br-lg hover:bg-[#353535] transition-colors duration-300 after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:w-[1px] after:bg-gradient-to-t after:from-transparent after:to-[#f6b846]"
            >
              <span className="text-[17px] font-bold group-hover:text-[#f6b846] transition-colors duration-300">
                CONTACT ME
              </span>
              <Send className="w-6 h-6 text-white group-hover:text-[#f6b846] transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[40%] min-w-[400px] max-w-[600px] flex-shrink-0 rounded-xl relative bg-gradient-to-br from-[#f6b84628] to-transparent">
      <div className="absolute top-7 left-8 rounded-lg bg-[#222222] w-full h-full shadow-xl shadow-black/50">
        <div
          className={"relative h-[360px] bg-cover z-[1] rounded-t-lg"}
          style={{ backgroundImage: `url(${coverImg})` }}
        >
          <div className="absolute bottom-[-40px] w-full h-[80px] rounded-t-[100%] bg-[#222222]"></div>
          <img
            src={avatar}
            alt="Avatar"
            className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[160px] h-[160px] object-cover rounded-full outline-solid outline-[#222222]"
          />
        </div>
        <div className="mt-[60px] pb-[40px]">
          <h2 className="text-center text-[40px]/[35px]">Võ Trí Phúc</h2>
          <p className="mt-[10px] text-center text-[#f6b846] text-[17px]/[25px]">
            Web Developer
          </p>
          {/* 
          <div className="flex items-center justify-center md:py-6 sm:py-4 py-2 text-2xl font-bold ">
            <p>Fast, flexible financing for</p>
            <span className="text-[#00df9a] font-bold pl-1">
              <Typewriter
                words={["Mình là Phúc Võ nhé!", "I'm Phúc Võ", "boku wa EroSennin desuyo"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </div> */}

          <div className="flex justify-between mt-10 mx-auto w-md h-[25px]">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  key={index}
                  to={social.link}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 rounded-sm group hover:bg-[#353535] hover:border-1 border-[#f6b846] duration-200"
                >
                  <Icon className="text-[20px] w-7 h-7 text-white group-hover:text-[#f6b846] duration-500 cursor-pointer" />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex bg-[#353535] h-[100px] border-t-1 border-[#f6b846] rounded-b-lg">
          <a
            onClick={(e) => e.stopPropagation()}
            href={cvPDF}
            download="CV_VoTriPhuc_FullStack.pdf"
            className="relative cursor-pointer group w-full flex items-center justify-center gap-5 bg-[#222222] rounded-bl-lg hover:bg-[#353535] duration-500 after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[1px] after:bg-gradient-to-t after:from-transparent after:to-[#f6b846]"
          >
            <span className="text-[17px] font-bold group-hover:text-[#f6b846] duration-500">
              DOWNLOAD CV
            </span>
            <Download className="h-13 text-white group-hover:text-[#f6b846] duration-500" />
          </a>
          <a
            onClick={() => {}}
            href="mailto:Phucvo140902@gmail.com"
            className="relative cursor-pointer group w-full flex items-center justify-center gap-5 bg-[#222222] rounded-br-lg hover:bg-[#353535] duration-500 after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:w-[1px] after:bg-gradient-to-t after:from-transparent after:to-[#f6b846]"
          >
            <span className="text-[17px] font-bold group-hover:text-[#f6b846] duration-500">
              CONTACT ME
            </span>
            <Send className="h-13 text-white group-hover:text-[#f6b846] duration-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PosterComponent;
