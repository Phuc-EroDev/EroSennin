import ContentComponent from "~/Components/ContentComponent/ContentComponent";
import { GraduationCap, Briefcase } from "lucide-react";
import React from "react";
import html from "~/assets/images/skill/html.png";
import scss from "~/assets/images/skill/scss.png";
import javascript from "~/assets/images/skill/js.png";
import reactjs from "~/assets/images/skill/react.png";
import redux from "~/assets/images/skill/redux.png";
import reactQuery from "~/assets/images/skill/react-query.png";
import antd from "~/assets/images/skill/antd.png";
import tailwind from "~/assets/images/skill/tailwind.png";
import bootstrap from "~/assets/images/skill/bootstrap.png";
import nodejs from "~/assets/images/skill/node.png";
import express from "~/assets/images/skill/express.png";
import jwt from "~/assets/images/skill/jwt.png";
import mongodb from "~/assets/images/skill/mongodb.png";

const ResumePage = () => {
  const education = [
    {
      period: "10/2020 - Nay",
      title: "Đại học Bách Khoa Đà Nẵng",
      description: ["Sinh viên ngành Công nghệ Thông tin"],
    },
  ];

  const experience = [
    // {
    //   period: "01/2023 - 03/2023",
    //   title: "Thực tập sinh tại Sun* Inc",
    //   description: [
    //     "Thực tập FullStack, học hỏi và làm việc với team",
    //     "Tham gia các dự án thực tế của công ty",
    //     "Sử dụng các công nghệ như ReactJS, NodeJS, MongoDB",
    //   ],
    // },
    // {
    //   period: "05/2023 - 09/2023",
    //   title: "Thực tập sinh tại Haibazo",
    //   description: [
    //     "Thực tập ReactJS, học hỏi và làm việc với team",
    //     "Tham gia các dự án thực tế của công ty",
    //   ],
    // },
    {
      period: "11/2023 - 03/2024",
      title: "Thực tập sinh tại Pandosima",
      description: [
        "Tìm hiểu và triển khai hệ thống OpenStack",
        "Thực tập phát triển web, học hỏi và làm việc với team",
      ],
    },
  ];

  const frontendSkills = [
    { name: "HTML", image: html },
    { name: "SCSS", image: scss },
    { name: "JavaScript", image: javascript },
    { name: "ReactJS", image: reactjs },
    { name: "Redux", image: redux },
    { name: "React Query", image: reactQuery },
    { name: "Ant Design", image: antd },
    { name: "Tailwind CSS", image: tailwind },
    { name: "Bootstrap", image: bootstrap },
  ];

  const backendSkills = [
    { name: "JavaScript", image: javascript },
    { name: "NodeJS", image: nodejs },
    { name: "Express.js", image: express },
    { name: "JWT", image: jwt },
    { name: "MongoDB", image: mongodb },
  ];

  return (
    <div>
      <ContentComponent label="Timeline">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-10">
          <div>
            <h3 className="flex items-center gap-2 md:gap-3 text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4 text-white">
              <GraduationCap className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#f6b846]" />
              Education
            </h3>
            <div className="relative pl-6 md:pl-8 border-l-2 border-[#353535]">
              {education.map((item, index) => (
                <div key={index} className="relative mb-6 md:mb-8 last:mb-0">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 md:w-5 md:h-5 bg-[#f6b846] rounded-full border-4 border-[#222222]"></div>
                  <div className="ml-3 md:ml-4">
                    <span className="inline-block px-3 py-1 md:px-5 md:py-1 mb-2 md:mb-3 text-sm md:text-base lg:text-lg font-semibold align-center text-[#f6b846] bg-[#353535] rounded-full">
                      {item.period}
                    </span>
                    <h4 className="text-base md:text-lg lg:text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <ul className="list-disc list-inside">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-sm md:text-base lg:text-lg text-gray-400"
                        >
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2 md:gap-3 text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6 text-white">
              <Briefcase className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#f6b846]" />
              Experience
            </h3>
            <div className="relative pl-6 md:pl-8 border-l-2 border-[#353535]">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="relative mb-6 md:mb-8 max-h-50 last:mb-0"
                >
                  <div className="absolute -left-[9px] top-2 w-4 h-4 md:w-5 md:h-5 bg-[#f6b846] rounded-full border-4 border-[#222222]"></div>
                  <div className="ml-3 md:ml-4">
                    <span className="inline-block px-3 py-1 md:px-5 md:py-1 mb-2 md:mb-3 text-sm md:text-base lg:text-lg font-semibold text-[#f6b846] bg-[#353535] rounded-full">
                      {item.period}
                    </span>
                    <h4 className="text-base md:text-lg lg:text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <ul className="list-disc list-inside">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-sm md:text-base lg:text-lg text-gray-400"
                        >
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentComponent>

      <ContentComponent label="Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-6 lg:px-10">
          <div className="md:border-r-2 md:border-[#353535] pb-6 md:pb-0">
            <h3 className="flex items-center gap-2 md:gap-3 text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6 text-white">
              Front-end
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-3 md:gap-4">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center"
                  title={skill.name}
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2 md:gap-3 text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6 text-white">
              Back-end
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-3 md:gap-4">
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center"
                  title={skill.name}
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentComponent>
    </div>
  );
};

export default ResumePage;
