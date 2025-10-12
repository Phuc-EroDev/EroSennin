import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { User, FileText, Briefcase, FileDown, Mail, Heart } from "lucide-react";
import ButtonIcon from "~/Components/ButtonIcon/ButtonIcon";

const NavMobile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const actions = [
    { label: "ABOUT", path: "/about", icon: User },
    { label: "RESUME", path: "/resume", icon: FileText },
    { label: "PROJECTS", path: "/projects", icon: Briefcase },
    { label: "CV", path: "/cv", icon: FileDown },
    { label: "CONTACT", path: "/contact", icon: Mail },
    { label: "FAVORITE", path: "/favorite", icon: Heart },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#222222] border-t border-[#353535]">
      <div className="flex items-center h-full">
        {actions.map((action, index) => {
          const isActive = location.pathname === action.path;

          return (
            <ButtonIcon
              key={index}
              icon={action.icon}
              // label={action.label}
              onClick={() => handleNavigate(action.path)}
              active={isActive}
              isAfterLine={false}
              showDivider={index !== actions.length - 1}
              className=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default NavMobile;
