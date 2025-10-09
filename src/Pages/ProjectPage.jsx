import ContentComponent from "~/Components/ContentComponent/ContentComponent";
import ProjectComponent from "../Components/ProjectComponent/ProjectComponent";
import React, { useState } from "react";
import eroShop from "~/assets/images/project/ero_shop.png";
import ProjectDetailComponent from "../Components/ProjectDetailComponent/ProjectDetailComponent";

const ProjectPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const featuredProjects = [
    {
      thumb: eroShop,
      name: "EroSennin",
      description: "Website portfolio",
      features: ["Animation mượt mà.", "Thiết kế sáng tạo."],
      language: ["Front-end: HTML/SCSS, JavaScript - ReactJS"],
      sourceCode: ["https://github.com/Phuc-EroDev/DoAnFinal"],
      technologies: ["ReactJS, Vite, Tailwind CSS, SASS"],
      demo: "https://erosennin.click/",
    },
    {
      thumb: eroShop,
      name: "EroShop",
      description: "Website bán đồ điện tử online",
      features: [
        "CRUD user, product, order",
        "Đăng ký, quên mật khẩu: dùng mã OTP gửi về mail",
        "Xử lý accessToken, refreshToken, xác thực với JWT",
        "Sử dụng PayPal sandbox để mô phỏng thanh toán",
        "Phân quyền admin/user",
        "Modern UI/UX",
      ],
      language: [
        "Front-end: JavaScript, ReactJS",
        "Back-end: JavaScript, NodeJS",
      ],
      technologies: [
        "Front-end: Redux, React Query, Ant Design",
        "Back-end: ExpressJS, MongoDB, JWT, Nodemailer, Cloudinary",
      ],
      sourceCode: [
        "https://github.com/Phuc-EroDev/FE_Ero_Shop",
        "https://github.com/Phuc-EroDev/BE_Ero_Shop",
      ],
      demo: "https://erosennin.id.vn/",
    },
    {
      thumb: eroShop,
      name: "Ero HomeStay",
      description: "Website HomeStay",
      features: [
        "Phát triển và tối ưu hóa giao diện người dùng cho trang web Homestay.",
        "Đảm bảo trải nghiệm người dùng mượt mà, trực quan và hấp dẫn.",
      ],
      language: ["Front-end: HTML/SCSS, JavaScript - ReactJS"],
      technologies: ["Front-end: ReactJS, SASS, I18N"],
      sourceCode: ["https://github.com/Phuc-EroDev/DoAnFinal"],
      demo: "https://homestay.erosennin.id.vn/",
    },
    {
      thumb: eroShop,
      name: "Ero Commic",
      description: "Website xem anime",
      features: [
        "Số lượng anime phong phú",
        "Thiết kế sáng tạo.",
        "kết hợp sử dung API từ Jikan",
      ],
      language: ["Front-end: HTML/CSS, JavaScript - ReactJS"],
      technologies: ["ReactJS, Vite, Jikan API"],
      sourceCode: ["https://github.com/Phuc-EroDev/WebAnimeBasic"],
      demo: "https://anime-basic.erosennin.id.vn/",
    },
    {
      thumb: eroShop,
      name: "Ero Music",
      description: "Website Máy nghe nhạc",
      features: [
        "Chất lượng nhạc tuyệt vời",
        "Thiết kế cổ điển, hoài niệm.",
        "kết hợp sử dung API và hard Data",
      ],
      language: ["Front-end: HTML/SCSS, JavaScript"],
      technologies: ["SASS, Music API, JSON Server"],
      sourceCode: ["https://github.com/Phuc-EroDev/MusicPlayer"],
      demo: "https://ero-music.erosennin.id.vn/",
    },
  ];

  const handleProjectClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const resetProjectSelection = () => {
    setSelectedIndex(null);
  };

  return (
    <div>
      <ContentComponent label="Personal Projects">
        <div className="px-10 grid grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => {
            const isLeftColumn = index % 2 === 0;
            const isRightColumn = index % 2 === 1;
            const isLastProject = index === featuredProjects.length - 1;
            const shouldShowDetailHere =
              (selectedIndex === index && isRightColumn) ||
              (selectedIndex === index && isLeftColumn && isLastProject) ||
              (selectedIndex === index - 1 && isRightColumn);

            return (
              <React.Fragment key={index}>
                <div
                  onClick={() => handleProjectClick(index)}
                  className="cursor-pointer"
                >
                  <ProjectComponent
                    thumb={project.thumb}
                    name={project.name}
                    description={project.description}
                    demo={project.demo}
                  />
                </div>

                {shouldShowDetailHere && selectedIndex !== null && (
                  <ProjectDetailComponent
                    project={featuredProjects[selectedIndex]}
                    selectedIndex={selectedIndex}
                    resetProjectSelection={resetProjectSelection}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </ContentComponent>
    </div>
  );
};

export default ProjectPage;
