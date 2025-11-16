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
const images = [img1, img2,img3];

const Carousel = () => {

  const ApiMulti='http://localhost:8080/api/usuarios'

  const subirMulti = async ()=>{

    const archivo = document.querySelector('#archivo').files[0];
    const descripcion = document.querySelector('#descripcion').value;
    const propiedadId = document.querySelector('#descripcion').value;

     const formData = new FormData();
    formData.append('archivo', archivo);        // debe coincidir con el nombre esperado en tu backend
    formData.append('descripcion', descripcion);
    formData.append('propiedadId', propiedadId);
  

    const respuesta = await fetch(ApiMulti, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!respuesta.ok) {
      throw new Error(`Error del servidor: ${respuesta.status}`);
    }
    const data = await respuesta.json();
    console.log("Respuesta del servidor :", data);
  }
  
  subirMulti()

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