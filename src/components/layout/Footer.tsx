import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#f0f4f2] bg-white px-4 py-10 lg:px-40">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[#111813]">
            <img
              src="/logoconscritta.png"
              alt="Wellness Connect Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="max-w-xs text-sm text-[#61896f]">
            La piattaforma leader per connettere professionisti della salute e
            utenti alla ricerca di benessere.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 md:gap-20">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-[#111813]">Piattaforma</h4>
            <Link
              className="text-sm text-[#61896f] hover:text-primary"
              href="#"
            >
              Servizi
            </Link>
            <Link
              className="text-sm text-[#61896f] hover:text-primary"
              href="#"
            >
              Professionisti
            </Link>
            <Link
              className="text-sm text-[#61896f] hover:text-primary"
              href="#"
            >
              Prezzi
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-[#111813]">Supporto</h4>
            <Link
              className="text-sm text-[#61896f] hover:text-primary"
              href="#"
            >
              Contattaci
            </Link>
            <Link
              className="text-sm text-[#61896f] hover:text-primary"
              href="#"
            >
              FAQ
            </Link>
            <Link
              className="text-sm text-[#61896f] hover:text-primary"
              href="#"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-[#111813]">Social</h4>
            <Link
              className="text-sm text-[#61896f] hover:text-primary"
              href="#"
            >
              Instagram
            </Link>
            <Link
              className="text-sm text-[#61896f] hover:text-primary"
              href="#"
            >
              LinkedIn
            </Link>
            <Link
              className="text-sm text-[#61896f] hover:text-primary"
              href="#"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-[#f0f4f2] pt-6 text-center text-sm text-[#61896f]">
        © 2023 Wellness Connect. Tutti i diritti riservati. Realizzato da Alessandro Barattiero.
      </div>
    </footer>
  );
};

export default Footer;