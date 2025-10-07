import React from "react";

const ButtonIcon = ({
  icon: Icon,
  label,
  onClick,
  active,
  isAfterLine,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        active
          ? `cursor-pointer relative aspect-square w-full flex flex-col items-center justify-center gap-1 ${className} bg-[#353535] translate-x-2 ${
              isAfterLine
                ? " after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:to-[#f6b846]"
                : ""
            }`
          : `cursor-pointer group relative aspect-square w-full flex flex-col items-center justify-center gap-1 ${className} hover:bg-[#353535] duration-500 hover:translate-x-2 ${
              isAfterLine
                ? " after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:to-[#f6b846]"
                : ""
            }`
      }
    >
      {Icon && (
        <Icon
          className={
            active
              ? "w-15 h-15 text-[#f6b846]"
              : "w-15 h-15 text-white group-hover:text-[#f6b846] duration-500"
          }
        />
      )}

      {label && (
        <span
          className={
            active
              ? "text-[13px] font-bold text-[#f6b846]"
              : "text-[13px] text-white font-bold group-hover:text-[#f6b846] duration-500"
          }
        >
          {label}
        </span>
      )}
    </button>
  );
};

export default ButtonIcon;
