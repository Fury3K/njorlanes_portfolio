import React from 'react';

const Skills = () => {
  const languages = [
    { name: "Java", icon: "fa-brands fa-java", color: "text-orange-500" },
    { name: "Python", icon: "fa-brands fa-python", color: "text-blue-400" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-400" },
    { name: "TypeScript", icon: "fa-solid fa-code", color: "text-blue-600" },
    { name: "Kotlin", icon: "fa-brands fa-android", color: "text-purple-500" },
    { name: "PHP", icon: "fa-brands fa-php", color: "text-indigo-400" },
    { name: "SQL", icon: "fa-solid fa-database", color: "text-gray-500 dark:text-gray-400" },
    { name: "HTML5", icon: "fa-brands fa-html5", color: "text-orange-600" },
    { name: "CSS", icon: "fa-brands fa-css3-alt", color: "text-blue-500" },
    { name: "C", icon: "fa-solid fa-c", color: "text-blue-700" },
  ];

  const technologies = [
    { name: "Spring Boot", icon: "fa-solid fa-leaf", color: "text-green-500" },
    { name: "Next.js", icon: "fa-solid fa-n", color: "text-base-content" },
    { name: "React", icon: "fa-brands fa-react", color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: "fa-solid fa-wind", color: "text-cyan-500" },
    { name: "DaisyUI", icon: "fa-solid fa-palette", color: "text-pink-400" },
    { name: "Android", icon: "fa-brands fa-android", color: "text-green-400" },
    { name: "Jetpack Compose", icon: "fa-solid fa-mobile-screen", color: "text-green-600" },
    { name: "AWS", icon: "fa-brands fa-aws", color: "text-orange-500" },
    { name: "Firebase", icon: "fa-solid fa-fire", color: "text-yellow-500" },
    { name: "Git", icon: "fa-brands fa-git-alt", color: "text-red-500" },
    { name: "GitHub", icon: "fa-brands fa-github", color: "text-base-content" },
    { name: "Gemini API", icon: "fa-solid fa-brain", color: "text-blue-500" },
    { name: "Maven/Gradle", icon: "fa-solid fa-scroll", color: "text-red-400" },
  ];

  return (
    <section id="skills" className="py-20 bg-base-100">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 gs-reveal text-base-content"><span className="border-b-4 border-primary pb-2">My Skills</span></h2>

            <div className="space-y-12">
                
                {/* Programming Languages */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-10 flex items-center justify-center gap-3 text-base-content gs-reveal">
                        <i className="fa-solid fa-code text-primary"></i>
                        Programming Languages
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {languages.map((skill, index) => (
                            <div key={index} className="gs-bubble group flex items-center justify-center gap-2 bg-base-200 hover:bg-base-100 border border-base-300 hover:border-primary/50 shadow-lg hover:shadow-xl hover:shadow-primary/20 rounded-full p-3 h-16 min-w-[4rem] hover:min-w-max hover:px-6 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] cursor-default overflow-hidden">
                                <i className={`${skill.icon} text-3xl ${skill.color} shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}></i>
                                <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 whitespace-nowrap transition-all duration-500 ease-out font-bold text-base-content text-sm">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technologies & Frameworks */}
                <div>
                    <h3 className="text-2xl font-bold text-center mb-10 flex items-center justify-center gap-3 text-base-content gs-reveal">
                        <i className="fa-solid fa-layer-group text-secondary"></i>
                        Technologies & Frameworks
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((skill, index) => (
                            <div key={index} className="gs-bubble group flex items-center justify-center gap-2 bg-base-200 hover:bg-base-100 border border-base-300 hover:border-secondary/50 shadow-lg hover:shadow-xl hover:shadow-secondary/20 rounded-full p-3 h-16 min-w-[4rem] hover:min-w-max hover:px-6 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] cursor-default overflow-hidden">
                                <i className={`${skill.icon} text-3xl ${skill.color} shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}></i>
                                <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 whitespace-nowrap transition-all duration-500 ease-out font-bold text-base-content text-sm">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Skills;