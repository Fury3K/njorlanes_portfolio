import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 gs-reveal text-base-content"><span className="border-b-4 border-primary pb-2">Get In Touch</span></h2>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8 gs-reveal">
                    <h3 className="text-2xl font-bold text-base-content">Contact Information</h3>
                    
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <i className="fa-solid fa-envelope text-xl"></i>
                        </div>
                        <div>
                            <p className="text-sm text-base-content/60">Email</p>
                            <p className="font-medium text-base-content">n8thanjohn@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <i className="fa-solid fa-phone text-xl"></i>
                        </div>
                        <div>
                            <p className="text-sm text-base-content/60">Phone</p>
                            <p className="font-medium text-base-content">0969 534 3645</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <i className="fa-solid fa-location-dot text-xl"></i>
                        </div>
                        <div>
                            <p className="text-sm text-base-content/60">Location</p>
                            <p className="font-medium text-base-content">Guizo, Mandaue City, Philippines 6014</p>
                        </div>
                    </div>

                    <div className="pt-8">
                        <p className="mb-4 font-medium text-base-content">Connect with me:</p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/n8thanjohn" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-primary text-white" title="Facebook">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/nj.orlanes/" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-primary text-white" title="Instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://github.com/Fury3K" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-primary text-white" title="GitHub">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="/ORLANES_Resume.pdf" download="Nathan_John_Orlanes_Resume.pdf" className="btn btn-circle btn-secondary text-white" title="Download CV">
                                <i className="fa-solid fa-file-arrow-down"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-base-200/50 p-8 rounded-2xl shadow-lg border border-base-content/5 gs-reveal">
                    <h3 className="text-2xl font-bold text-base-content mb-6">Send me a message</h3>
                    <form className="flex flex-col gap-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base-content">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full focus:input-primary bg-base-100 text-base-content" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base-content">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered w-full focus:input-primary bg-base-100 text-base-content" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-base-content">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-32 w-full focus:textarea-primary bg-base-100 text-base-content resize-none" placeholder="How can I help you?"></textarea>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary text-white w-full shadow-md hover:shadow-lg transition-all">
                                Send Message <i className="fa-solid fa-paper-plane ml-2"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;
