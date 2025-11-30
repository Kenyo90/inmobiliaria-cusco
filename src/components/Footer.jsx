import { FiFacebook } from "react-icons/fi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { RiYoutubeLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { PiTiktokLogo } from "react-icons/pi";
const Footer = () => {
  return (
    <footer class="w-full">
      <div class="mt-10 flex flex-col pl-10 justify-around py-6 bg-orange-300 gap-8 2xl:flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col sm:pl-10 sm:px-[16px] sm:py-[48px]">
        <div>
          <h3 class='text-black !text-[16px] !font-[650] pb-[10px]'>Inmobiliaria Cusco</h3>
          <p>Tu socio inmobiliario de confianza en Cusco</p>
        </div>
        <div>
          <h3 class='text-black !text-[16px] !font-[650] pb-[10px]'>Inicio</h3>
          <p>Todos</p>
          <p>Panel de Administracion</p>
        </div>
        <div>
          <h3 class='text-black !text-[16px] !font-[650] pb-[10px]'>Formulario de Contacto</h3>
          <p>Email: <p>info@cuscoraices.com</p></p>
          <p>Teléfono: <p>+51 984 123 456</p></p>
          <p>Ubicación: <p>Cusco, Perú</p></p>
        </div>
        <div class='flex flex-col gap-3'>
          <h3 class='text-black !text-[16px] !font-[650] pb-[10px]'>Síguenos en Redes Sociales</h3>
          <div class='flex  gap-5 w-10'>
            {/* <span><FaSquareFacebook/></span> */}
            <a class='p-2 cursor-pointer' href="https://www.facebook.com/Ayllulagunahuaypo" target="_blank"><FiFacebook/></a>
            <a class='p-2 cursor-pointer' href="https://www.instagram.com/ayllulagunahuaypo/?igsh=MWw5a2oycThoczFwag%3D%3D#" target="_blank"><FiInstagram/></a>
            {/* <a class='p-2 cursor-pointer' href="" target="_blank"><BsTwitterX/></a> */}
            <a class='p-2 cursor-pointer' href="https://www.tiktok.com/@cusicoyllur_chinchero?_r=1&_t=ZS-91p9gJyLzMI" target="_blank"><PiTiktokLogo/></a>
            <a class='p-2 cursor-pointer' href="https://youtube.com/watch?v=qWZNLsqJZTs&feature=shared" target="_blank"><RiYoutubeLine/></a>
          </div>
        </div>
      </div>
      <div class="h-[2px] bg-black w-full ">
        <p class="text-center py-4 text-black font-mono text-[14px] bg-orange-300">
          &copy; 2024 Proyecto Terrenos. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer