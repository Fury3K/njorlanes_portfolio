import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[var(--color-dark-bg)] overflow-hidden">
      {/* Top gradient line divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent"></div>

      <div className="pt-12 pb-8 container-custom text-center relative z-10">
        <div className="inline-block group cursor-pointer">
          <p className="font-mono text-sm text-gray-500 mb-2 transition-colors duration-300">
            Designed &amp; Built by
          </p>
          <p className="font-bold text-lg md:text-xl text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-secondary)] transition-all duration-500" style={{ fontFamily: 'var(--font-display)' }}>
            Nathan John Orlanes
          </p>
        </div>
        
        <div className="mt-6 flex justify-center items-center gap-1 text-xs font-mono text-gray-600">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="mx-1 text-[var(--color-primary)]/50">•</span>
          <span className="flex items-center gap-1 group">
            Made with <i className="fa-solid fa-heart text-[var(--color-accent)]/80 text-[10px] group-hover:animate-ping"></i>
          </span>
        </div>
      </div>
      
      {/* Bottom accent line edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-30"></div>
    </footer>
  );
};

export default Footer;