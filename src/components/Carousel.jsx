import { Box, Center, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = ({ images = [] }) => {
  // console.log("IMAGENES QUE RECIBE EL CARRUSEL:", selectedProp?.multimedia);
  console.log("IMÁGENES QUE RECIBE EL CARRUSEL:", images);
  
  return (
    <Box w="100%" overflow="hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      //  navigation={true} 
      >
        {images.map((src, index) => {
        return(
          <SwiperSlide key={index} className='flex justify-center'>
            {/*  class='w-full h-fit' objectFit="cover" 380px 100%  */}
            <Image h="380px" w="fit" m={'auto'} src={src} alt={`Slide ${index + 1}`} borderRadius="md" />
          </SwiperSlide>
        )
        })}
      </Swiper>
    </Box>
  );
};

export default Carousel;