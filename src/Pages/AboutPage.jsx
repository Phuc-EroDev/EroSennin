import ContentComponent from "~/Components/ContentComponent/ContentComponent";
import codding from "~/assets/images/coding.jpg";
import repair from "~/assets/images/repair.png";
import flute from "~/assets/images/flute.jpg";
import batminton from "~/assets/images/batminton.jpg";

const AboutPage = () => {
  const skills = [
    { name: "Lập trình", img: codding },
    { name: "Sửa máy tính", img: repair },
    { name: "Thổi sáo", img: flute },
    { name: "Thể thao", img: batminton },
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
        <div className="px-10">
          <h3 className="text-[17px] font-semibold mb-4">
            Xin chào! Mình là Phúc Võ — bí danh: EroSennin 🌀
          </h3>
          <div className="flex flex-col gap-3 text-[15px] text-gray-400 leading-relaxed font-mono text-justify">
            <p>
              Hiện tại, mình là một FullStack Web Developer, thuộc thế hệ coder
              trẻ nhưng trái tim lại mang tinh thần lãng tử như thầy Jiraiya —
              chuyên biến ý tưởng thành những dòng code lung linh như nhẫn
              thuật!
            </p>
            <p>
              Mình cực kỳ hâm mộ Jiraiya trong truyện Naruto — không chỉ vì thầy
              bá đạo, mà còn luôn sống hết mình và tự do. Nên đôi khi code cũng…
              phóng khoáng và khó đoán như thầy.
            </p>
            <p>
              Khi không ở trước màn hình máy tính, bạn sẽ bắt gặp mình đang tháo
              tung một chiếc máy tính hoặc điện thoại để sửa, hoặc thổi sáo như
              một ẩn sĩ bên hồ nước 🎶
            </p>
            <p>
              Mình tin rằng lập trình cũng giống như viết truyện — mỗi Project
              là một chương trong cuộc phiêu lưu.
            </p>
            <p>
              Rất vui được gặp bạn — hãy cùng nhau tạo nên những chương truyện
              thật ý nghĩa nhé!
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-[15px] font-mono">
            {info.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-gray-400 uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-gray-500">. . . .</span>
                <span className="text-white">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg bg-gray-800"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">
                    {skill.name === "Lập trình" && "💻 Lập trình"}
                    {skill.name === "Sửa máy tính" && "🔧 Sửa máy tính"}
                    {skill.name === "Thổi sáo" && "🎶 Thổi sáo"}
                    {skill.name === "Thể thao" && "🏸 Thể thao"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentComponent>
    </div>
  );
};

export default AboutPage;
