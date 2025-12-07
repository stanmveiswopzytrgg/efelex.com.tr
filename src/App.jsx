import React from "react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ContactSection from "./components/ContactSection";
import { motion } from "framer-motion";

export default function App() {
  const projects = [
    {
      title: "Otistik EV",
      type: "Discord Topluluk Sunucusu",
      description:
        "İnsanların arkadaş edindiği ve birlikte oynadığı gelişen bir oyun topluluğu.",
      features: [
        "Özel kanallara sahip aktif oyun topluluğu",
 	"Etkileşim için özel bot",
 	"Oyun etkinlikleri ve turnuvalar",
 	"Misafirperver ortam",
      ],
      size: "Büyüyor.",
      status: "Aktif",
    },
    {
      title: "Otistik EV Botu",
      type: "Discord Bot",
      description: "Otistik EV topluluğu için özel olarak üretilmiş bot.",
      features: [
        "Moderasyon araçları",
 	"Topluluk komutları",
 	"Oyun entegrasyonları",
 	"Özel eğlence özellikleri",
      ],
      size: "1 Sunucu",
      status: "Aktif",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="font-sans">
      <Navbar />

      {/* 🏠 HOME */}
      <motion.section
        id="home"
        className="flex flex-col items-center justify-center h-screen text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <h1 className="text-6xl font-extrabold mb-4">efelex</h1>
        <p className="text-gray-500 text-xl mb-8">
          Discord Sunucu Yapımcısı, Yazılımcı
        </p>
        <button
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="border border-black px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Projelerimi Görüntüle
        </button>
      </motion.section>

      {/* 🧍 ABOUT */}
      <motion.section
        id="about"
        className="bg-black text-white py-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold mb-8 text-center">Hakkımda</h2>
          <p className="text-lg mb-6 text-gray-300 text-center">
            Tutkulu bir oyuncu ve topluluk oluşturucu olarak,
 	    insanların bağlantı kurabileceği, oyun oynayabileceği ve arkadaşlıklar kurabileceği alanlar yaratıyorum.
          </p>
          <p className="text-lg text-gray-300 text-center">
            Amacım oyuncuları bir araya getirmek ve Discord sunucuları, botlar ve etkinlikler aracılığıyla
 	    ilgi çekici deneyimler yaratmak.
          </p>
        </div>
      </motion.section>

      {/* 💻 PROJECTS */}
      <motion.section
        id="projects"
        className="py-20 px-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold mb-12 text-center">Projelerim</h2>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.section>

      {/* ✉️ CONTACT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <ContactSection />
      </motion.div>

      {/* 🦶 FOOTER */}
      <footer className="bg-black text-gray-500 text-center py-6 border-t border-gray-700">
        © {new Date().getFullYear()} efelex — Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
