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
        <div className="grid grid-cols-2 gap-8 px-10">
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-semibold mb-4 text-white">
              <GraduationCap className="w-7 h-7 text-[#f6b846]" />
              Education
            </h3>
            <div className="relative pl-8 border-l-2 border-[#353535]">
              {education.map((item, index) => (
                <div key={index} className="relative mb-8 last:mb-0">
                  <div className="absolute -left-[9px] top-2 w-5 h-5 bg-[#f6b846] rounded-full border-4 border-[#222222]"></div>
                  <div className="ml-4">
                    <span className="inline-block px-5 py-1 mb-3 text-lg font-semibold align-center text-[#f6b846] bg-[#353535] rounded-full">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <ul className="list-disc list-inside">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-lg text-gray-400">
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
            <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6 text-white">
              <Briefcase className="w-7 h-7 text-[#f6b846]" />
              Experience
            </h3>
            <div className="relative pl-8 border-l-2 border-[#353535]">
              {experience.map((item, index) => (
                <div key={index} className="relative mb-8 max-h-50 last:mb-0">
                  <div className="absolute -left-[9px] top-2 w-5 h-5 bg-[#f6b846] rounded-full border-4 border-[#222222]"></div>
                  <div className="ml-4">
                    <span className="inline-block px-5 py-1 mb-3 text-lg font-semibold text-[#f6b846] bg-[#353535] rounded-full">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <ul className="list-disc list-inside">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-lg text-gray-400">
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
        <div className="grid grid-cols-2 gap-8 px-10">
          <div className="border-r-2 border-[#353535]">
            <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6 text-white">
              Front-end
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center"
                  title={skill.name}
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-20 h-20 object-contain rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6 text-white">
              Back-end
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center"
                  title={skill.name}
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-20 h-20 object-contain rounded-full"
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
