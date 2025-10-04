const AboutPage = () => {
    const frontendSkills = [
        { name: 'HTML/CSS' },
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'Tailwind' }
    ];

    const backendSkills = [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'MongoDB' },
        { name: 'API' }
    ];

    return (
        <div className="flex flex-col gap-5 h-full">
            {/* About Me Section */}
            <div className="bg-[#3a3a3a] rounded-lg">
                <div className="bg-[#8B6F6F] text-white px-6 py-4 rounded-t-lg">
                    <h2 className="text-2xl font-semibold">About Me</h2>
                </div>
                <div className="bg-[#7A7A7A] text-white px-6 py-8 rounded-b-lg">
                    <h3 className="text-xl font-bold mb-4">Hello! I'm PhucVo.</h3>
                    <p className="text-sm leading-relaxed font-mono">
                        FullStack Web Developer From Đà Nẵng - Việt Nam.
                    </p>
                </div>
            </div>

            {/* My Skill Section */}
            <div className="bg-[#3a3a3a] rounded-lg flex-1">
                <div className="bg-[#3a3a3a] text-white px-6 py-4">
                    <h2 className="text-2xl font-semibold">My Skill</h2>
                </div>
                <div className="flex gap-6 px-6 pb-8">
                    {/* Front-end Skills */}
                    <div className="flex-1">
                        <h3 className="text-white font-semibold mb-4">Front-end</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {frontendSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center"
                                    title={skill.name}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Back-end Skills */}
                    <div className="flex-1">
                        <h3 className="text-white font-semibold mb-4">Back-end</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {backendSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center"
                                    title={skill.name}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
