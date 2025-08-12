import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (

<header className="bg-gradient-to-r from-slate-900 from-0% via-violet-950 via-40% to-cyan-400 to-100% text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold">Portfolio</div>

        <button
          className="text-white text-3xl md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/#home" className="hover:text-slate-900">Home</Link>
          <Link to="/#education" className="hover:text-slate-900">Education</Link>
          <Link to="/#contact" className="hover:text-slate-900">Contact</Link>
          <Link to="/project" className="hover:text-slate-900">Project</Link>  
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white text-black">
          <Link to="/#home" className="block py-2 text-lg hover:text-cyan-400" onClick={() => setMenuOpen(!menuOpen)}>Home</Link>
          <Link to="/#education" className="block py-2 text-lg hover:text-cyan-400" onClick={() => setMenuOpen(!menuOpen)}>Education</Link>
          <Link to="/#contact" className="block py-2 text-lg hover:text-cyan-400" onClick={() => setMenuOpen(!menuOpen)}>Contact</Link>
          <Link to="/project" className="block py-2 text-lg hover:text-cyan-400">Project</Link>
        </div>
      )}
    </header>
  )
}

export default Header