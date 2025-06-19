import React, { useState } from "react";
import Logo from "../assets/13.png";
import { Menu, X } from "lucide-react"; // ✅ Icon import from lucide-react

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // ✅ Typo fixed

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto flex h-14 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img src={Logo} alt="logo.png" className="w-36" />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 text-lg font-medium">
            <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</a>
            <a href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</a>
            <a href="#testimonials" className="transition-colors hover:text-foreground/80 text-foreground/60">Testimonials</a>
            <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">About</a>
              <a href="#projects" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Projects</a>
              <a href="#testimonials" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Testimonials</a>
              <a href="#contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Contact</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;