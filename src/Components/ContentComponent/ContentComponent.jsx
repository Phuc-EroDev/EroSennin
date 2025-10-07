const ContentComponent = ({ children, label }) => {
  return (
    <div className="ml-8 mb-8 flex flex-col gap-8 h-[100%] bg-[#222222] ">
      <span className="relative p-10 text-4xl font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-[#f6b846] after:to-transparent">
        {label || "Ero-Sennin"}
      </span>
      {children}
    </div>
  );
};

export default ContentComponent;
