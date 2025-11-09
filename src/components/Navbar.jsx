import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        <h1
          className="text-lg font-bold cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          efelex
        </h1>
        <div className="space-x-6 text-sm">
          <button onClick={() => scrollTo("about")} className="hover:underline">
            Hakkımda
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="hover:underline"
          >
            Projelerim
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="hover:underline"
          >
            İletişim
          </button>
        </div>
      </div>
    </nav>
  );
}
