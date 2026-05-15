import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  LineChart,
  Database,
} from "lucide-react";

const features = [
  {
    icon: <Cpu size={30} />,
    title: "Tecnologia Moderna",
    desc: "Soluções modernas desenvolvidas com tecnologias robustas e escaláveis.",
  },

  {
    icon: <Database size={30} />,
    title: "Sistemas Empresariais",
    desc: "Automação de processos, gestão operacional e controlo empresarial.",
  },

  {
    icon: <LineChart size={30} />,
    title: "Dashboards Inteligentes",
    desc: "Relatórios em tempo real para melhor tomada de decisões.",
  },

  {
    icon: <ShieldCheck size={30} />,
    title: "Segurança",
    desc: "Infraestrutura segura e sistemas com controlo de acesso avançado.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-[#111111] to-[#0D0D0D]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-[#FF6B00] uppercase tracking-widest font-semibold">
            Sobre a Moz Systems
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Tecnologia moderna para empresas que querem crescer.
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mt-10">
            A Moz Systems desenvolve soluções modernas de gestão empresarial,
            automação e transformação digital para empresas em Moçambique.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            Criamos sistemas adaptados à realidade operacional das empresas,
            com foco em controlo, produtividade, segurança e eficiência.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] border border-white/5 rounded-3xl p-8 hover:border-[#FF6B00]/40 transition duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] mb-8">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* EXTRA SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-28">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FF6B00] font-semibold uppercase tracking-wider">
              Transformação Digital
            </span>

            <h3 className="text-5xl font-bold mt-6 leading-tight">
              Sistemas inteligentes para operações modernas.
            </h3>

            <p className="text-gray-400 text-lg mt-8 leading-relaxed">
              Desenvolvemos plataformas empresariais modernas para gestão
              operacional, stock, vendas, dashboards e automação de processos.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FF6B00]" />
                <p className="text-gray-300">
                  Sistemas adaptados à realidade moçambicana
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FF6B00]" />
                <p className="text-gray-300">
                  Dashboards e relatórios inteligentes
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FF6B00]" />
                <p className="text-gray-300">
                  Automação e produtividade empresarial
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FF6B00]" />
                <p className="text-gray-300">
                  Infraestrutura segura e escalável
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute inset-0 bg-[#FF6B00]/20 blur-3xl rounded-full"></div>

            <div className="relative bg-[#1A1A1A] border border-white/5 rounded-3xl p-10">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-[#111111] rounded-2xl p-6 border border-white/5">
                  <h4 className="text-4xl font-bold text-[#FF6B00]">
                    +2
                  </h4>

                  <p className="text-gray-400 mt-3">
                    Sistemas Empresariais
                  </p>
                </div>

                <div className="bg-[#111111] rounded-2xl p-6 border border-white/5">
                  <h4 className="text-4xl font-bold text-[#FF6B00]">
                    100%
                  </h4>

                  <p className="text-gray-400 mt-3">
                    Sistemas Responsivos
                  </p>
                </div>

                <div className="bg-[#111111] rounded-2xl p-6 border border-white/5">
                  <h4 className="text-4xl font-bold text-[#FF6B00]">
                    React
                  </h4>

                  <p className="text-gray-400 mt-3">
                    Frontend Moderno
                  </p>
                </div>

                <div className="bg-[#111111] rounded-2xl p-6 border border-white/5">
                  <h4 className="text-4xl font-bold text-[#FF6B00]">
                    API
                  </h4>

                  <p className="text-gray-400 mt-3">
                    Backend Seguro
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}