import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Testimonials() {
  const testimonials = [
    { name: 'Cliente 1', text: 'Excelente sistema!' },
    { name: 'Cliente 2', text: 'Muito profissional e eficiente.' },
    { name: 'Cliente 3', text: 'Atendimento impecável!' }
  ];

  return (
    <section id="testimonials" style={{ backgroundColor: "#F3F4F6", color: "#111827" }} className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Clientes</h2>
      <Swiper spaceBetween={50} slidesPerView={1} loop autoplay={{ delay: 3000 }}>
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <p style={{ fontStyle: "italic", fontSize: "1.125rem" }}>
              "{t.text}" - {t.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}