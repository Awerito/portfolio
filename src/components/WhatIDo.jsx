import { Code2, Sigma, BarChart3, Wrench } from "lucide-react";

const roles = [
  {
    title: "Software Dev",
    description: "APIs, web apps, automation.",
    Icon: Code2,
    className: "bg-pink",
  },
  {
    title: "Math Enthusiast",
    description: "Logic-first problem solving.",
    Icon: Sigma,
    className: "bg-cyan",
  },
  {
    title: "Data Scientist",
    description: "Pandas, analysis, insight.",
    Icon: BarChart3,
    className: "bg-yellow",
  },
  {
    title: "Toolsmith",
    description: "Python · React · Docker.",
    Icon: Wrench,
    className: "bg-lime",
  },
];

export default function WhatIDo() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {roles.map(({ title, description, Icon, className }) => (
        <div key={title} className={`nb lift p-5 ${className}`}>
          <Icon className="mb-3 h-8 w-8" />
          <h3 className="display text-lg">{title}</h3>
          <p className="mt-1 text-sm font-medium">{description}</p>
        </div>
      ))}
    </div>
  );
}
