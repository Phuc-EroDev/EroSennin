import ContentComponent from "~/Components/ContentComponent/ContentComponent";

const ProjectPage = () => {
  const skills = [
    { name: "Lập trình", img: "/path/to/coding.jpg" },
    { name: "Sửa máy tính", img: "/path/to/repair.jpg" },
    { name: "Thổi sáo", img: "/path/to/flute.jpg" },
    { name: "Thể thao", img: "/path/to/gaming.jpg" },
  ];

  const info = [
    { label: "NGÀY SINH:", value: "14/09/2002" },
    { label: "GIỚI TÍNH:", value: "Nam" },
    { label: "TRƯỜNG:", value: "Bách Khoa Đà Nẵng" },
    { label: "ĐỊA CHỈ:", value: "Liên Chiểu, Đà Nẵng" },
  ];

  return (
    <div>
      <ContentComponent label="About Me">
        {/* Your project content goes here */}
      </ContentComponent>
    </div>
  );
};

export default ProjectPage;
