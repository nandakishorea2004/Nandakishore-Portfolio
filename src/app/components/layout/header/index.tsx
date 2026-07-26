"use client";

import Logo from "../logo";

const Header = () => {
  return (
    <header className="navbar top-0 left-0 z-999 w-full absolute">
      <div className="container">
        <nav className="py-7">
          <div className="flex items-center gap-4 sm:gap-8">
            <Logo />

            <a
              href="/resume/resume-nandakishore.pdf"
              download="Nandakishore_A_Resume.pdf"
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full border-2 border-lime-400 text-black font-semibold transition-all duration-500 group hover:text-black hover:shadow-[0_0_25px_rgba(132,204,22,0.8)]"
            >
              <span className="absolute inset-0 w-0 bg-lime-400 transition-all duration-500 ease-out group-hover:w-full"></span>

              <span className="relative flex items-center gap-2">
                Download Resume
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;