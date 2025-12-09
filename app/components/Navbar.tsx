"use client";
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const localTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (localTheme) {
        return localTheme;
      } else if (prefersDark) {
        return 'dark';
      }
    }
    return 'light'; // Default theme if no preference or not on client
  });

  useEffect(() => {
    // Set the data-theme attribute on the html element
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]); // Rerun when theme changes

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="navbar bg-base-100/90 backdrop-blur-md fixed top-0 z-50 shadow-sm px-4 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl font-bold">Nathan John</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle" onClick={toggleTheme}>
          {theme === 'light' ? (
             <i className="fa-solid fa-moon text-xl"></i>
          ) : (
             <i className="fa-solid fa-sun text-xl"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;