import React from "react";
import {
  BookHeart,
  FileCheck2,
  FileUser,
  Send,
  SquareTerminal,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "~/Components/ButtonIcon/ButtonIcon";

const ActionsComponent = () => {
  const navigate = useNavigate();
  const actions = [
    { icon: User, label: "ABOUT", path: "/about" },
    { icon: FileUser, label: "RESUME", path: "/resume" },
    { icon: SquareTerminal, label: "PROJECTS", path: "/projects" },
    { icon: FileCheck2, label: "CV", path: "/cv" },
    { icon: Send, label: "CONTACT", path: "/contact" },
    { icon: BookHeart, label: "FAVORITE", path: "/favorite" },
  ];
  return (
    <div className="w-[6.5%] min-w-[80px] max-w-[100px] flex-shrink-0 translate-x-5">
      {actions.map((action, index) => (
        <ButtonIcon
          key={index}
          icon={action.icon}
          label={action.label}
          isAfterLine={index !== actions.length - 1}
          onClick={() => navigate(action.path)}
          className={`bg-[#222222] ${index === 0 ? "rounded-t-lg" : ""} ${
            index === actions.length - 1 ? "rounded-b-lg" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default ActionsComponent;
