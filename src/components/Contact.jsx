import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Contact() {

  const form = useRef();
  const [ativo, setAtivo] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setAtivo(true);
emailjs.sendForm(
  "service_pagizkb", // ID do serviço criado no EmailJS
  "template_87zgtxi", // ID do template de email
  form.current, // referência do formulário HTML
  "yD--tMpcWRRxG-6yD" // Public Key / API Key da conta EmailJS
)
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      form.current.reset();
      setAtivo(false);
    })
    .catch((error) => {
      console.log(error);
      alert("Erro ao enviar mensagem.");
      setAtivo(false);
    });
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-[#0D0D0D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-[#FF6B00] uppercase tracking-widest font-semibold text-sm sm:text-base">
            Contacto
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Vamos transformar o seu negócio.
          </h2>

          <p className="text-gray-400 text-base sm:text-lg mt-6 sm:mt-8 leading-relaxed">
            Entre em contacto para solicitar uma demonstração,
            orçamento ou parceria tecnológica.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 mt-16 md:mt-24">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >

            {/* TELEFONE */}
            <div className="bg-[#1A1A1A] border border-white/5 rounded-3xl p-5 sm:p-8 flex gap-4 sm:gap-6">

              <div className="min-w-[60px] h-[60px] rounded-2xl bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]">
                <Phone size={26} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Telefone
                </h3>

                <div className="text-gray-400 mt-3 flex flex-col text-sm sm:text-base">
                  <span>+258 87 346 5311</span>
                  <span>+258 85 303 8699</span>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="bg-[#1A1A1A] border border-white/5 rounded-3xl p-5 sm:p-8 flex gap-4 sm:gap-6">

              <div className="min-w-[60px] h-[60px] rounded-2xl bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]">
                <Mail size={26} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Email
                </h3>

                <div className="text-gray-400 mt-3 flex flex-col gap-2 text-sm sm:text-base break-all">
                  <a
                    href="mailto:mozsystems@gmail.com"
                    className="hover:text-[#FF6B00] transition"
                  >
                    mozsystems@gmail.com
                  </a>

                  <a
                    href="mailto:vmubai@aquafish.co.mz"
                    className="hover:text-[#FF6B00] transition"
                  >
                    vmubai@aquafish.co.mz
                  </a>
                </div>
              </div>
            </div>

            {/* LOCALIZAÇÃO */}
            <div className="bg-[#1A1A1A] border border-white/5 rounded-3xl p-5 sm:p-8 flex gap-4 sm:gap-6">

              <div className="min-w-[60px] h-[60px] rounded-2xl bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]">
                <MapPin size={26} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Localização
                </h3>

                <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
                  Bairro Siduava, Talhão nº 229,
                  M-IV, Matola
                </p>
              </div>
            </div>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/258873465311"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 sm:gap-4 bg-[#25D366] hover:scale-[1.02] transition rounded-2xl p-4 sm:p-5 text-base sm:text-lg font-semibold shadow-xl"
            >
              <MessageCircle size={24} />
              Falar no WhatsApp
            </a>
          </motion.div>

          {/* FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] border border-white/5 rounded-3xl p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6"
          >

            {/* NOME */}
            <div>
              <label className="text-sm text-gray-400">
                Nome
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Digite o seu nome"
                className="w-full mt-3 bg-[#111111] border border-white/5 rounded-2xl p-4 sm:p-5 outline-none focus:border-[#FF6B00] transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-400">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Digite o seu email"
                className="w-full mt-3 bg-[#111111] border border-white/5 rounded-2xl p-4 sm:p-5 outline-none focus:border-[#FF6B00] transition"
              />
            </div>

            {/* EMPRESA */}
            <div>
              <label className="text-sm text-gray-400">
                Empresa
              </label>

              <input
                type="text"
                name="company"
                placeholder="Nome da empresa"
                className="w-full mt-3 bg-[#111111] border border-white/5 rounded-2xl p-4 sm:p-5 outline-none focus:border-[#FF6B00] transition"
              />
            </div>

            {/* MENSAGEM */}
            <div>
              <label className="text-sm text-gray-400">
                Mensagem
              </label>

              <textarea
                rows="6"
                name="message"
                required
                placeholder="Fale sobre o projeto ou necessidade da sua empresa"
                className="w-full mt-3 bg-[#111111] border border-white/5 rounded-2xl p-4 sm:p-5 outline-none focus:border-[#FF6B00] transition resize-none"
              />
            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              disabled={ativo}
              className="w-full bg-[#FF6B00] hover:bg-orange-500 transition py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-semibold shadow-2xl shadow-orange-500/20 disabled:opacity-60"
            >
              {ativo ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}