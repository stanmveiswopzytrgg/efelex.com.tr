// src/components/ProjectCard.jsx
import React from "react";

export default function ProjectCard({ title, type, description, features, size, status }) {
  return (
    <div className="project-card border border-gray-300 rounded-xl p-6 mb-8 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">{type}</p>
      <p className="mb-4 text-gray-700">{description}</p>
      <h4 className="font-bold mb-2 text-sm">Key Features</h4>
      <ul className="list-disc pl-6 mb-4 text-gray-700 text-sm space-y-1">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <div className="flex justify-between text-sm font-semibold">
        <p>Community Size: <span className="text-black">{size}</span></p>
        <p>Status: <span className="text-black">{status}</span></p>
      </div>
    </div>
  );
}
