import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">

        {/* LOGO */}
        <div className="flex items-center">
          <img className="w-16 sm:w-20" src={logo} alt="Moz Systems" />

          <h1 className="text-lg sm:text-2xl font-bold text-[#FF6B00]">
            MOZ <span className="text-white">SYSTEMS</span>
          </h1>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white">
          <button
            onClick={() => scrollTo("principal")}
            className="hover:text-[#FF6B00] transition"
          >
            Principal
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="hover:text-[#FF6B00] transition"
          >
            Soluções
          </button>

          <button
            onClick={() => scrollTo("projects")}
            className="hover:text-[#FF6B00] transition"
          >
            Sistemas
          </button>

          <button
            onClick={() => scrollTo("about")}
            className="hover:text-[#FF6B00] transition"
          >
            Sobre
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="hover:text-[#FF6B00] transition"
          >
            Contacto
          </button>
        </div>

        {/* BOTÃO DESKTOP */}
        <a
          href="https://wa.me/258873465311"
          className="hidden md:flex bg-[#FF6B00] hover:bg-orange-500 transition px-5 py-2 rounded-full font-semibold shadow-lg shadow-orange-500/20"
        >
          Demonstração
        </a>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-6" : "max-h-0"
        } bg-black/95 backdrop-blur-xl`}
      >
        <div className="flex flex-col items-center gap-6 text-white">

         <button
            onClick={() => scrollTo("principal")}
            className="hover:text-[#FF6B00] transition"
          >
            Principal
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="hover:text-[#FF6B00] transition"
          >
            Soluções
          </button>

          <button
            onClick={() => scrollTo("projects")}
            className="hover:text-[#FF6B00] transition"
          >
            Sistemas
          </button>

          <button
            onClick={() => scrollTo("about")}
            className="hover:text-[#FF6B00] transition"
          >
            Sobre
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="hover:text-[#FF6B00] transition"
          >
            Contacto
          </button>

          <a
            href="https://wa.me/258873465311"
            className="bg-[#FF6B00] hover:bg-orange-500 transition px-5 py-2 rounded-full font-semibold shadow-lg shadow-orange-500/20"
          >
            Demonstração
          </a>
        </div>
      </div>
    </nav>
  );
}