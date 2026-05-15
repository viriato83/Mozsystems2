const services = [
  {  title: "Sistema de Gestão",
    desc: "Controle completo de operações, vendas e stock."
  },
  {
    title: "Dashboards Inteligentes",
    desc: "Relatórios e indicadores em tempo real."
  },
  {
    title: "Automação",
    desc: "Reduza processos manuais e aumente produtividade."
  },
  {
    title: "Websites Empresariais",
    desc: "Presença digital moderna e profissional."
  },
  {
    title: "Suporte Técnico",
    desc: "Acompanhamento técnico contínuo."
  },
  {
    title: "Hospedagem",
    desc: "Infraestrutura segura e escalável."
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Nossas Soluções
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-8 hover:-translate-y-2 hover:border-[#FF6B00]/40 transition duration-300"
            >
              <div className="w-16 h-16 bg-[#FF6B00]/10 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🚀
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}