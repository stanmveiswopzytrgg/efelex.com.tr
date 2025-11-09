import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-6xl font-extrabold mb-4">efelex</h1>
      <p className="text-gray-500 text-xl mb-8">Discord Sunucu Yapımcısı, Yazılımcı</p>
      <div className="space-x-4">
        <Link
          to="/projects"
          className="border border-black px-5 py-2 rounded hover:bg-gray-100"
        >
          Projeleri Görüntüle
        </Link>
        <a
          href="#contact"
          className="bg-black text-white px-5 py-2 rounded hover:opacity-80"
        >
          İletişime geç!
        </a>
      </div>
    </div>
  );
}
