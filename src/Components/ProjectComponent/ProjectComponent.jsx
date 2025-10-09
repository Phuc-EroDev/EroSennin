const ProjectComponent = ({ thumb, name, description, demo }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-[#353535] hover:scale-105 duration-300">
      <div className="relative overflow-hidden">
        <img src={thumb} alt={name} className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70">
          <div className="space-y-3 mb-6">
            <h4 className="text-[#f6b846] text-2xl font-bold">{name}</h4>
            <p className="text-gray-200 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#f6b846] text-black font-semibold rounded-lg hover:bg-[#f6b846]/90 transition-all duration-300 transform hover:scale-105"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="p-4 bg-[#2a2a2a]">
        <h3 className="text-white text-center font-semibold text-2xl">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default ProjectComponent;
