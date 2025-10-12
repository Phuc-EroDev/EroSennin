import { Github, ExternalLink, X } from "lucide-react";

const ProjectDetailComponent = ({
  project,
  selectedIndex,
  resetProjectSelection,
}) => {
  return (
    <div className="col-span-1 md:col-span-2 mt-3 md:mt-4 p-4 md:p-6 bg-[#2a2a2a] rounded-xl border-2 border-[#f6b846] relative animate-fadeIn">
      <button
        onClick={(e) => {
          e.stopPropagation();
          resetProjectSelection();
        }}
        className="absolute top-3 right-3 md:top-4 md:right-4 p-1.5 md:p-2 hover:bg-[#353535] rounded-full transition-colors z-10"
      >
        <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div>
          <span className="text-[#f6b846] font-semibold mb-2 block text-4xl md:text-6xl lg:text-7xl">
            0{selectedIndex + 1}
          </span>
          <img
            src={project.thumb}
            alt={project.title}
            className="w-full h-48 md:h-64 object-cover rounded-lg"
          />
        </div>

        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#f6b846] mb-3 md:mb-4">
            {project.name}
          </h2>
          <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-4 md:mb-6">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#f6b846] mb-2 md:mb-3">
              Tính năng chính:
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="text-sm md:text-base text-gray-300 flex items-start gap-2"
                >
                  <span className="w-2 h-2 bg-[#f6b846] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4 md:mb-6">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#f6b846] mb-2 md:mb-3">
              Ngôn ngữ:
            </h3>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {project.language.map((language, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 md:px-3 md:py-1 bg-[#353535] text-white text-xs md:text-sm rounded-full"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4 md:mb-6">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#f6b846] mb-2 md:mb-3">
              Công nghệ sử dụng:
            </h3>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 md:px-3 md:py-1 bg-[#353535] text-white text-xs md:text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-2 md:gap-3 lg:gap-4">
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 md:gap-2 px-2.5 py-2 md:px-3 md:py-2 lg:px-4 bg-[#353535] hover:bg-[#f6b846] text-white text-xs md:text-sm lg:text-base rounded-lg transition-colors flex-1"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 md:w-5 md:h-5" />
              Source Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 md:gap-2 px-2.5 py-2 md:px-3 md:py-2 lg:px-4 bg-[#f6b846] hover:bg-[#d2ab63] text-white text-xs md:text-sm lg:text-base rounded-lg transition-colors flex-1"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetailComponent;
