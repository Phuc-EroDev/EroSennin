import React from "react";

const ButtonIcon = ({ icon: Icon, label, onClick, isAfterLine, className }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer group relative aspect-square w-full flex flex-col items-center justify-center gap-1 ${className} hover:bg-[#353535] duration-500 hover:translate-x-2 ${
        isAfterLine
          ? " after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:to-[#f6b846]"
          : ""
      }`}
    >
      {Icon && (
        <Icon className="w-15 h-15 text-white group-hover:text-[#f6b846] duration-500" />
      )}

      {label && (
        <span className="text-[13px] text-white font-bold group-hover:text-[#f6b846] duration-500">
          {label}
        </span>
      )}
    </button>
  );
};

export default ButtonIcon;
