import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-base-200/50">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 gs-reveal text-base-content"><span className="border-b-4 border-primary pb-2">About Me</span></h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                <div className="space-y-6 gs-reveal">
                    <h3 className="text-2xl font-bold text-base-content">My Journey</h3>
                    <p className="text-base-content/70 leading-relaxed">
                        I am a highly motivated Full-Stack Developer with a strong foundation in building scalable web and mobile applications. 
                        My expertise lies in developing robust backend services using Java (Spring Boot) and creating modern, responsive user interfaces with Next.js, React 19, and Tailwind CSS.
                    </p>
                    <p className="text-base-content/70 leading-relaxed">
                        Beyond web development, I have demonstrated experience in mobile development using Kotlin and Jetpack Compose, as well as leveraging cloud technologies like AWS and the Gemini API to build innovative solutions.
                    </p>
                    
                    <div className="flex gap-2 flex-wrap mt-4">
                        <div className="badge badge-primary badge-lg p-4 text-white">Full-Stack Dev</div>
                        <div className="badge badge-secondary badge-lg p-4 text-white">Mobile Dev</div>
                        <div className="badge badge-accent badge-lg p-4 text-white">Cloud Services</div>
                    </div>
                </div>

                <div className="gs-reveal">
                    <h3 className="text-2xl font-bold text-base-content mb-6 text-center md:text-left">Education</h3>
                    <ol className="relative border-l border-primary/30 ml-3 space-y-8">
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full -left-3 ring-4 ring-base-100">
                                <i className="fa-solid fa-graduation-cap text-primary text-xs"></i>
                            </span>
                            <div className="bg-base-100 p-4 rounded-lg shadow-md border border-base-200">
                                <h4 className="font-bold text-lg text-base-content">BS Information Technology</h4>
                                <time className="block mb-1 text-sm font-normal leading-none text-primary">2022 - Present</time>
                                <p className="text-base font-normal text-base-content/70">Cebu Institute of Technology - University</p>
                            </div>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full -left-3 ring-4 ring-base-100">
                                <i className="fa-solid fa-school text-primary text-xs"></i>
                            </span>
                            <div className="bg-base-100 p-4 rounded-lg shadow-md border border-base-200">
                                <h4 className="font-bold text-lg text-base-content">BS Computer Engineering</h4>
                                <time className="block mb-1 text-sm font-normal leading-none text-primary">2021 - 2022</time>
                                <p className="text-base font-normal text-base-content/70">University of San Carlos</p>
                            </div>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full -left-3 ring-4 ring-base-100">
                                <i className="fa-solid fa-school text-primary text-xs"></i>
                            </span>
                            <div className="bg-base-100 p-4 rounded-lg shadow-md border border-base-200">
                                <h4 className="font-bold text-lg text-base-content">Senior High School</h4>
                                <time className="block mb-1 text-sm font-normal leading-none text-primary">2019 - 2021</time>
                                <p className="text-base font-normal text-base-content/70">Saint Louis College Cebu</p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>

             <div className="gs-reveal max-w-5xl mx-auto">
                <h3 className="text-2xl font-bold text-base-content mb-8 flex items-center justify-center gap-2">
                    <i className="fa-solid fa-trophy text-yellow-500"></i> Awards & Certifications
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <a href="https://drive.google.com/file/d/1cU-frAdqfDmDhpwRfEqBH7W_KNexFwsy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="card bg-base-100 shadow-md hover:shadow-lg transition-all border border-base-200 hover:border-primary/50 group h-full">
                        <div className="card-body p-6 flex flex-col items-center text-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                                <i className="fa-solid fa-award text-2xl text-primary group-hover:text-white"></i>
                            </div>
                            <div className="flex-grow flex flex-col justify-center">
                                <h4 className="font-bold text-lg text-base-content group-hover:text-primary transition-colors mb-1">Certificate of Participation</h4>
                                <p className="text-sm text-base-content/70">Proweaver Hackathon PromptQuest (2025)</p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                                    <span className="text-xs font-bold text-primary flex items-center gap-1">
                                        View Certificate <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                            </div>
                        </div>
                    </a>

                    <a href="https://www.credly.com/badges/a57bd9de-4b29-4fa9-8bd1-c799e93da891" target="_blank" rel="noopener noreferrer" className="card bg-base-100 shadow-md hover:shadow-lg transition-all border border-base-200 hover:border-primary/50 group h-full">
                        <div className="card-body p-6 flex flex-col items-center text-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors shrink-0">
                                <i className="fa-brands fa-aws text-3xl text-orange-500 group-hover:text-white"></i>
                            </div>
                            <div className="flex-grow flex flex-col justify-center">
                                <h4 className="font-bold text-lg text-base-content group-hover:text-orange-500 transition-colors mb-1">AWS Cloud Foundations</h4>
                                <p className="text-sm text-base-content/70">Amazon Web Services (2025)</p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                                    <span className="text-xs font-bold text-orange-500 flex items-center gap-1">
                                        Verify Badge <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                            </div>
                        </div>
                    </a>

                    <a href="https://www.credly.com/badges/2163b9d2-be43-4313-83f1-c2e11972d829/public_url" target="_blank" rel="noopener noreferrer" className="card bg-base-100 shadow-md hover:shadow-lg transition-all border border-base-200 hover:border-primary/50 group h-full">
                        <div className="card-body p-6 flex flex-col items-center text-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors shrink-0">
                                <i className="fa-brands fa-aws text-3xl text-orange-500 group-hover:text-white"></i>
                            </div>
                            <div className="flex-grow flex flex-col justify-center">
                                <h4 className="font-bold text-lg text-base-content group-hover:text-orange-500 transition-colors mb-1">AWS Cloud Architecture</h4>
                                <p className="text-sm text-base-content/70">Amazon Web Services (2025)</p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                                    <span className="text-xs font-bold text-orange-500 flex items-center gap-1">
                                        Verify Badge <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;