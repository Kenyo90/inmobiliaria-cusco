import { Box, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './carousel.css'
// import '../style.css'
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../public/img/fondo.png';
import img2 from '../../public/img/fondo1.png';
import img3 from '../../public/img/fondo2.png';

// Lista de imágenes
const images = [img1, img2,img3
];
const Carousel = () => {
  return (
    <Box>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image h={'580px'} w={'99.9vw'} src={src} alt={`Slide ${index + 1}`} borderRadius="base" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;