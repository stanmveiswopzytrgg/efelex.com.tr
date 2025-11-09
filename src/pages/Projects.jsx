import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Otistik EV",
      type: "Discord Topluluk Sunucusu",
      description:
        "İnsanların arkadaş olup birlikte oyun oynamaları için oluşturulmuş, gelişen bir oyun topluluğu.",
      features: [
        "Çeşitli oyunlar için özel kanallara sahip aktif oyun topluluğu",
        "Sunucu yönetimi ve etkileşim için özel Discord botu",
        "Düzenli oyun etkinlikleri ve turnuvaları",
        "Her seviyeden oyuncuyu kucaklayan ortam",
        "Oyun oturumları için optimize edilmiş ses kanalları",
        "Topluluk odaklı içerik ve etkinlikler",
      ],
      size: "Büyüyor.",
      status: "Aktif",
    },
    {
      title: "Otistik EV Bot",
      type: "Discord Bot",
      description:
        "Otistik EV topluluğu için özel olarak tasarlanmış, özel yapım bir Discord botu.",
      features: [
        "Otomatik moderasyon ve sunucu yönetimi",
        "Topluluk katılımı için özel komutlar",
        "Oyun entegrasyonu ve etkinlik takibi",
        "Hoş geldiniz mesajları ve rol yönetimi",
        "Üyeler için eğlenceli etkileşimli özellikler",
        "Topluluk geri bildirimlerine dayalı düzenli güncellemeler",
      ],
      size: "1 Sunucu",
      status: "Aktif.",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-5xl font-extrabold mb-12 text-center">Projeler</h2>
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </section>
  );
}
