import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function ProjectCarousel({ images }) {
  return (
    <div className="relative w-full h-[480px]">
      
      {/* glow background estilo Apple */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 blur-3xl" />

      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        loop={true}
        centeredSlides={true}
        slidesPerView={1.25}
        speed={900}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2,
          slideShadows: false,
        }}
        className="h-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="h-[450px] flex items-center justify-center  max-sm:w-70">
              
              {/* card estilo Apple */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform transition duration-700 hover:scale-[1.02] max-sm:w-100">
                
                <img
                  src={img}
                  alt={`slide-${i}`}
                  className="w-full h-full object-cover scale-[1.02] max-sm:w-100"
                  loading="eager"
                  draggable={false}
                />

                {/* overlay suave tipo Apple */}
                <div className="absolute inset-0 bg-black/20" />

                {/* highlight glow */}
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(255,107,0,0.15)]" />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}