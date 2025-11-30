import { FiFacebook } from "react-icons/fi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
const Footer = () => {
  return (
    <footer class="w-full">
      <div class="mt-10 flex flex-col pl-10 justify-around py-6 bg-orange-300 gap-8 2xl:flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col sm:pl-10 sm:px-[16px] sm:py-[48px]">
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
          <div class='flex  gap-3 w-10'>
            {/* <span><FaSquareFacebook/></span> */}
            <span class='size-5'><FiFacebook/></span>
            <span><FiInstagram/></span>
            <span><BsTwitterX/></span>
            <span><FiLinkedin/></span>
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