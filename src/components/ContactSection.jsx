// src/components/ContactSection.jsx
import React from "react";
import { FaYoutube, FaInstagram, FaDiscord, FaSpotify } from "react-icons/fa";
import { SiKick } from "react-icons/si";

export default function ContactSection() {
  const links = [
    { name: "YouTube", icon: <FaYoutube size={28} />, username: "@efelexshorts", url: "https://youtube.com/@efelexshorts" },
    { name: "Kick", icon: <SiKick size={28} />, username: "@efelex", url: "https://kick.com/efelex" },
    { name: "Instagram", icon: <FaInstagram size={28} />, username: "@realxqueni", url: "https://instagram.com/realxqueni" },
    { name: "Discord", icon: <FaDiscord size={28} />, username: "@yikilmazruhum, Otistik EV", url: "https://discord.gg/F5aMh6Mmgy" },
    { name: "Spotify", icon: <FaSpotify size={28} />, username: "@efelex", url: "https://open.spotify.com/intl-tr/artist/7xc8Vfy7623Jb6IWeYygB8?si=InIpVHvhT5O3enNS8SCt3A" },
  ];

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Benimle İletişime Geç!</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button w-32 h-32 border border-white flex flex-col items-center justify-center rounded-lg hover:bg-white hover:text-black transition"
            >
              {link.icon}
              <span className="mt-2 font-semibold text-sm">{link.name}</span>
              <span className="text-xs mt-1 text-gray-400">{link.username}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
