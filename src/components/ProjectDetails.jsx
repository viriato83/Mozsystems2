import { motion } from "framer-motion";
import ProjectCarousel from "../components/ProjectCarousel";

import dash from "../assets/dashboard.png";
import clientes from "../assets/clientes.png";
import historico from "../assets/historico.png";
import registo from "../assets/registo.png";
import mercadoria from "../assets/mercadoria.png";
import venda from "../assets/venda.png";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";

const project = {
  title: "Lifemar Management System",
  subtitle: "Enterprise-grade management platform",

  description:
    "Sistema avançado de gestão operacional com automação e dashboards inteligentes.",

  problem:
    "Antes do sistema, tudo era manual, lento e sem controlo centralizado.",

  solution:
    "Criámos uma plataforma digital com automação, dashboards e controlo total.",

  images: [dash, clientes, historico, registo, venda, mercadoria],

  features: [
    "Dashboard em tempo real",
    "Gestão de stock inteligente",
    "Relatórios automáticos",
    "Sistema multiusuário seguro",
  ],

  results: [
    "Redução de 60% no tempo operacional",
    "Aumento de eficiência",
    "Melhor controlo de inventário",
  ],
};

export default function ProjectDetails() {
  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-28 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold"
        >
          {project.title}
        </motion.h1>

        <p className="text-gray-400 mt-4 text-lg">
          {project.subtitle}
        </p>
      </section>

      {/* CARROSSEL */}
      <section className="max-w-6xl mx-auto px-6">
        <ProjectCarousel images={project.images} />
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="max-w-6xl mx-auto px-6 mt-24 grid md:grid-cols-2 gap-10">

        <div className="p-8 bg-[#1A1A1A] rounded-2xl border border-white/10">
          <h2 className="text-red-400 text-xl font-bold mb-4">
            Problema
          </h2>
          <p className="text-gray-300">{project.problem}</p>
        </div>

        <div className="p-8 bg-[#1A1A1A] rounded-2xl border border-white/10">
          <h2 className="text-green-400 text-xl font-bold mb-4">
            Solução
          </h2>
          <p className="text-gray-300">{project.solution}</p>
        </div>

      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-bold text-center mb-10">
          Funcionalidades
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {project.features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-[#1A1A1A] border border-white/10 rounded-xl"
            >
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="max-w-6xl mx-auto px-6 mt-24 mb-32">
        <h2 className="text-3xl font-bold text-center mb-10">
          Resultados
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {project.results.map((r, i) => (
            <div
              key={i}
              className="p-6 text-center bg-[#111] border border-[#FF6B00]/20 rounded-xl"
            >
              <p className="text-[#FF6B00] font-semibold">{r}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}