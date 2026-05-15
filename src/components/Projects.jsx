import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import ProjectCarousel from "../components/ProjectCarousel";
import dash from "../assets/dashboard.png"
import clientes from "../assets/clientes.png"
import historico from "../assets/historico.png"
import registo from "../assets/registo.png"
import mercadoria from "../assets/mercadoria.png"
import venda from "../assets/venda.png"
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
const projects = [
  {
    id: "lifemar",
    title: "Lifemar Management System",
    subtitle: "Enterprise-grade management platform",
    description:
      "Sistema avançado de gestão operacional com automação e dashboards inteligentes.",

    problem:
      "Antes do sistema, tudo era manual, lento e sem controlo centralizado.",

    solution:
      "Criámos uma plataforma digital com automação, dashboards e controlo total.",

 images: [dash, clientes,historico,registo,venda,mercadoria],


    technologies: ["React", "Spring Boot", "MySQL"],

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
  },

  {
    id: "aquafish",
    title: "Aquafish Stock System",
    subtitle: "Fish production management system",
    description: "Sistema para controlo de stock e produção de peixe.",

    problem: "Gestão manual de produção e stock sem precisão.",

    solution: "Sistema automatizado para controlo completo da produção.",

    images: [a1, a2,a3],

    technologies: ["React", "Spring Boot", "MySQL"],

    features: [
      "Controle de produção",
      "Gestão de stock",
      "Relatórios",
    ],

    results: [
      "Redução de perdas",
      "Maior controlo operacional",
      "Melhor gestão de recursos",
    ],
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="py-28 bg-[#0D0D0D] text-white" id="projects">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">Sistemas Desenvolvidos</h2>
          <p className="text-gray-400 mt-4">
            Soluções empresariais modernas e escaláveis
          </p>
        </div>

        {/* PROJECTS */}
        <div className="space-y-24">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-1 gap-12 items-center justify-center"
            >

              {/* CARROSSEL */}
              <div className="max-w-6xl mx-auto px-6  max-sm:w-100 max-sm:">
                  <ProjectCarousel images={project.images} />
              </div>
            

              {/* CONTENT */}
              <div className=" text-center">
                <h3 className="text-4xl font-bold items-center justify-center ">{project.title}</h3>

                <p className="text-gray-400 mt-4">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap justify-center gap-3 mt-6 text-center">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 text-sm rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
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
        <label className="block mt-5 border-b-2 w-full  border-r-olive-500"> </label>
        <label className="block mt-5 border-b-2 w-full  border-r-olive-500"> </label>
      </section>
             
              
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}