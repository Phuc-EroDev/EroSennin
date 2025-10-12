import React from "react";

const ButtonIcon = ({
  icon: Icon,
  label,
  onClick,
  active,
  isAfterLine,
  className,
  showDivider = false, // Prop mới để hiện vạch ngăn
}) => {
  return (
    <button
      onClick={onClick}
      className={
        active
          ? `cursor-pointer relative aspect-square w-full flex flex-col items-center justify-center gap-1 md:gap-1 gap-0.5 ${className} bg-[#353535] md:translate-x-2 translate-x-0 ${
              isAfterLine
                ? " after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:to-[#f6b846]"
                : ""
            } ${
              showDivider
                ? " before:content-[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-[60%] before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-[#353535] before:to-transparent md:before:hidden"
                : ""
            }`
          : `cursor-pointer group relative aspect-square w-full flex flex-col items-center justify-center gap-1 md:gap-1 gap-0.5 ${className} hover:bg-[#353535] duration-500 md:hover:translate-x-2 hover:translate-x-0 ${
              isAfterLine
                ? " after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:to-[#f6b846]"
                : ""
            } ${
              showDivider
                ? " before:content-[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-[60%] before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-[#353535] before:to-transparent md:before:hidden"
                : ""
            }`
      }
    >
      {Icon && (
        <Icon
          className={
            active
              ? "w-7 h-7 md:w-15 md:h-15 text-[#f6b846]"
              : "w-7 h-7 md:w-15 md:h-15 text-white group-hover:text-[#f6b846] duration-500"
          }
        />
      )}

      {label && (
        <span
          className={
            active
              ? "text-[10px] md:text-[13px] font-bold text-[#f6b846]"
              : "text-[10px] md:text-[13px] text-white font-bold group-hover:text-[#f6b846] duration-500"
          }
        >
          {label}
        </span>
      )}
    </button>
  );
};

export default ButtonIcon;
