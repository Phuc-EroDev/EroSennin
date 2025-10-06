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
import coverImg from "~/assets/cover.png";
import avatar from "~/assets/avatar.jpeg";

const PosterComponent = () => {
  const socials = [
    { icon: Facebook, link: "https://www.facebook.com/" },
    { icon: Linkedin, link: "https://www.linkedin.com/" },
    { icon: Github, link: "https://www.github.com/" },
    { icon: Send, link: "https://www.send.com/" },
    { icon: Phone, link: "https://www.phone.com/" },
  ];

  return (
    <div className="w-[40%] min-w-[400px] max-w-[600px] flex-shrink-0 rounded-xl relative bg-gradient-to-br from-[#f6b84628] to-transparent">
      <div className="absolute top-7 left-8 rounded-lg bg-[#222222] w-full h-full">
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
          <div className="flex justify-between mt-10 mx-auto w-md h-[25px]">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  to={social.link}
                  key={index}
                  className="flex items-center justify-center w-10 h-10 rounded-sm group hover:bg-[#353535] hover:border-1 border-[#f6b846] duration-200"
                >
                  <Icon className="text-[20px] w-7 h-7 text-white group-hover:text-[#f6b846] duration-500 cursor-pointer" />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex bg-[#353535] h-[100px] border-t-1 border-[#f6b846] rounded-b-lg">
          <button
            onClick={() => {}}
            className="relative cursor-pointer group w-full flex items-center justify-center gap-5 bg-[#222222] rounded-bl-lg hover:bg-[#353535] duration-500 after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[1px] after:bg-gradient-to-t after:from-transparent after:to-[#f6b846]"
          >
            <span className="text-[17px] font-bold group-hover:text-[#f6b846] duration-500">
              DOWNLOAD CV
            </span>
            <Download className="h-13 text-white group-hover:text-[#f6b846] duration-500" />
          </button>
          <button
            onClick={() => {}}
            className="relative cursor-pointer group w-full flex items-center justify-center gap-5 bg-[#222222] rounded-br-lg hover:bg-[#353535] duration-500 after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:w-[1px] after:bg-gradient-to-t after:from-transparent after:to-[#f6b846]"
          >
            <span className="text-[17px] font-bold group-hover:text-[#f6b846] duration-500">
              CONTACT ME
            </span>
            <Send className="h-13 text-white group-hover:text-[#f6b846] duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PosterComponent;
