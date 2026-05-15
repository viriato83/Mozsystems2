const problems = [
  "Perdas de Stock",
  "Falta de Controlo",
  "Processos Manuais",
  "Relatórios Demorados",
  "Desorganização Empresarial",
  "Falta de Dados em Tempo Real",
];

export default function Problems() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Problemas que resolvemos
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Sistemas inteligentes para melhorar organização, produtividade e controlo empresarial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-white/5 hover:border-[#FF6B00]/40 transition rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center mb-6 text-[#FF6B00] text-2xl">
                ⚡
              </div>

              <h3 className="text-2xl font-bold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}