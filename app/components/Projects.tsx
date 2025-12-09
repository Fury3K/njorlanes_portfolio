import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-base-200/50">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 gs-reveal text-base-content"><span className="border-b-4 border-primary pb-2">My Projects</span></h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Project 1: AudioScholar */}
                <div className="card bg-base-100 shadow-xl gs-reveal overflow-hidden group">
                    <figure className="relative overflow-hidden h-48">
                        <img src="/AudioScholar.png" alt="AudioScholar" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                            <a href="https://audioscholar.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Demo</a>
                            <a href="https://github.com/MasuRii/AudioScholar" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-white btn-sm text-white hover:text-black">Code</a>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-base-content">AudioScholar</h2>
                        <p className="text-base-content/70">An AI-powered learning assistant designed to enhance study efficiency.</p>
                        <div className="card-actions justify-end mt-4">
                            <div className="badge badge-outline text-base-content/80">Gemini API</div>
                            <div className="badge badge-outline text-base-content/80">React</div>
                            <div className="badge badge-outline text-base-content/80">AI</div>
                        </div>
                    </div>
                </div>

                {/* Project 2: Brisa Solei Resort Booking */}
                <div className="card bg-base-100 shadow-xl gs-reveal overflow-hidden group">
                    <figure className="relative overflow-hidden h-48">
                        <img src="/BrisaSolei.png" alt="Brisa Solei" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                            <a href="https://brisasolei.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Demo</a>
                            <a href="https://github.com/themarneilx/resort-booking" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-white btn-sm text-white hover:text-black">Code</a>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-base-content">Brisa Solei Resort</h2>
                        <p className="text-base-content/70">A modern, elegant resort booking web application for seamless reservations.</p>
                        <div className="card-actions justify-end mt-4">
                            <div className="badge badge-outline text-base-content/80">Next.js</div>
                            <div className="badge badge-outline text-base-content/80">Tailwind</div>
                            <div className="badge badge-outline text-base-content/80">Full-Stack</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Projects;