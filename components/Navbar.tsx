
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Browse Stations', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border-dark bg-[#111722]/95 backdrop-blur-md px-6 py-3 lg:px-10">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="size-8 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined !text-[32px]">radio</span>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight hidden sm:block">RadioDirectory</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-6 lg:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path ? 'text-white' : 'text-[#92a4c9] hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4 lg:gap-8">
        <div className="hidden sm:flex items-center h-10 w-64 rounded-lg bg-surface-lighter ring-1 ring-[#324467] focus-within:ring-2 ring-primary/50 transition-all overflow-hidden">
          <div className="pl-4 text-[#92a4c9]">
            <span className="material-symbols-outlined !text-[20px]">search</span>
          </div>
          <input
            className="w-full bg-transparent border-none text-white focus:ring-0 text-sm placeholder:text-[#92a4c9]"
            placeholder="Search stations..."
          />
        </div>
        <Link 
          to="/submit" 
          className="flex h-10 px-4 items-center justify-center rounded-lg bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold"
        >
          Submit Station
        </Link>
        <div className="size-10 rounded-full border-2 border-border-dark bg-cover bg-center cursor-pointer" style={{ backgroundImage: 'url(https://picsum.photos/seed/user/100/100)' }} />
      </div>
    </header>
  );
};

export default Navbar;
