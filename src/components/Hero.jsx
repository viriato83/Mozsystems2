import { motion } from "framer-motion";
import dash from"../assets/dashboard.png"
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-black via-[#111111] to-[#1F1F1F]" id="principal">

      <div className="absolute w-[500px] h-[500px] bg-[#FF6B00]/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6 pt-28 relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-[#FF6B00]/20 border border-[#FF6B00]/30 text-[#FF6B00] px-4 py-2 rounded-full text-sm">
            Soluções Empresariais Inteligentes
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-8">
            Transformamos empresas com tecnologia moderna.
          </h1>

          <p className="text-gray-400 text-lg mt-8 leading-relaxed max-w-xl">
            Desenvolvemos sistemas avançados de gestão empresarial, controlo operacional, dashboards inteligentes e automação de processos para empresas em Moçambique.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://wa.me/258873465311"
              className="bg-[#FF6B00] hover:bg-orange-500 transition px-8 py-4 rounded-xl font-semibold shadow-2xl shadow-orange-500/20"
            >
              Solicitar Demonstração
            </a>

            <a
              href="#projects"
              className="border border-white/10 hover:border-[#FF6B00] hover:text-[#FF6B00] transition px-8 py-4 rounded-xl font-semibold"
            >
              Ver Sistemas
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-6 shadow-2xl">

            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-xl">Lifemar Management System</h3>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                Online
              </span>
            </div>

            <div className="space-y-4 ">

              <div className="bg-[#111]  rounded-xl h- flex items-center justify-center border border-white/5 text-gray-500 bg-cover">
                <img className="bg-cover   rounded-2xl" src={dash}></img>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#111]/300 p-4 rounded-xl border border-white/5">
                  <p className="text-gray-400 text-sm">Vendas</p>
                  <h2 className="text-3xl font-bold mt-2">+24%</h2>
                </div>

                <div className="bg-[#111]/300  p-4 rounded-xl border border-white/5">
                  <p className="text-gray-400 text-sm">Stock</p>
                  <h2 className="text-3xl font-bold mt-2">98%</h2>
                </div>
              </div>

              {/* <div className="bg-[#111] rounded-xl h-48 flex items-center justify-center border border-white/5 text-gray-500">
                ESPAÇO PARA GRÁFICOS E RELATÓRIOS
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}