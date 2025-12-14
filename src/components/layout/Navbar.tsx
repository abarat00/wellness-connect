import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f0f4f2] bg-white/90 backdrop-blur-md px-4 py-3 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo Desktop/Mobile */}
          <img
            src="/logoconscritta.png"
            alt="Wellness Connect Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-6">
            <Link
              className="text-sm font-medium leading-normal text-[#111813] hover:text-primary transition-colors"
              href="#"
            >
              Come funziona
            </Link>
            <Link
              className="text-sm font-medium leading-normal text-[#111813] hover:text-primary transition-colors"
              href="/search"
            >
              Servizi
            </Link>
            <Link
              className="text-sm font-medium leading-normal text-[#111813] hover:text-primary transition-colors"
              href="/dashboard/pro"
            >
              Per i Professionisti
            </Link>
            <Link
              className="text-sm font-medium leading-normal text-[#111813] hover:text-primary transition-colors"
              href="/login"
            >
              Accedi
            </Link>
          </nav>
          <button className="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-sm font-bold leading-normal tracking-[0.015em] text-[#111813] hover:bg-opacity-90 transition-opacity">
            <span className="truncate">Registrati</span>
          </button>
        </div>
        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <button className="text-[#111813]">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;