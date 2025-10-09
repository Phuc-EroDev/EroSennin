import { Github, ExternalLink, X } from "lucide-react";

const ProjectDetailComponent = ({
  project,
  selectedIndex,
  resetProjectSelection,
}) => {
  return (
    <div className="col-span-2 mt-4 p-6 bg-[#2a2a2a] rounded-xl border-2 border-[#f6b846] relative animate-fadeIn">
      <button
        onClick={(e) => {
          e.stopPropagation();
          resetProjectSelection();
        }}
        className="absolute top-4 right-4 p-2 hover:bg-[#353535] rounded-full transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <span className="text-[#f6b846] font-semibold mb-2 block text-7xl">
            0{selectedIndex + 1}
          </span>
          <img
            src={project.thumb}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#f6b846] mb-4">
            {project.name}
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#f6b846] mb-3">
              Tính năng chính:
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="text-gray-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#f6b846] rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#f6b846] mb-3">
              Ngôn ngữ:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.language.map((language, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#353535] text-white text-sm rounded-full"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#f6b846] mb-3">
              Công nghệ sử dụng:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#353535] text-white text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#353535] hover:bg-[#f6b846] text-white rounded-lg transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5" />
              Source Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#f6b846] hover:bg-[#d2ab63] text-white rounded-lg transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
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
