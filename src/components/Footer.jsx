import { FiFacebook } from "react-icons/fi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { RiYoutubeLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { PiTiktokLogo } from "react-icons/pi";
import { Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useIdioma } from "../components/IdiomaContext";
import { textos } from "../components/traductor/textos";

const Footer = () => {
  const { idioma } = useIdioma();

  const { colorMode } = useColorMode();

  // const fondo = colorMode === "light"
  //   ? "bg-[#FEF7F2] text-black"
  //   : "bg-gray-900 text-white";

  // const fondoSeccion = colorMode === "light"
  //   ? "bg-[#FEF7F2]"
  //   : "bg-gray-800";
  
  const fondoFooter = colorMode === "light"
   ? "bg-orange-300"
   : "bg-gray-800"

  return (
    <footer class="w-full">
        <div class={`mt-10 flex flex-col pl-10 justify-between py-6  gap-5 2xl:flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row md:p-5 sm:flex-col sm:px-[16px] sm:py-[48px] text-[14px] ${fondoFooter}`}>
          {/* bg-orange-300 */}
        <div>
          <h3 class={`!text-[16px] !font-[650] pb-[10px] ${fondoFooter}`}>{textos[idioma].footer.inmobiliario}</h3>
          <p>{textos[idioma].footer.cusco}</p>
        </div>
        <div>
          <h3 class={`!text-[16px] !font-[650] pb-[10px] ${fondoFooter}`}>{textos[idioma].footer.inicio}</h3>
          <p>{textos[idioma].footer.todo}</p>
          <p>{textos[idioma].footer.panel}</p>
        </div>
        <div>
          <h3 class={`!text-[16px] !font-[650] pb-[10px] ${fondoFooter}`}>{textos[idioma].footer.formulario}</h3>
          <p>Email: <p>info@cuscoraices.com</p></p>
          <p>{textos[idioma].footer.telefono}: <p>+51 984 123 456</p></p>
          <p>{textos[idioma].footer.ubicacion}: <p>{textos[idioma].footer.ciudad}</p></p>
        </div>
        <div class='flex flex-col gap-3'>
          <h3 class={`!text-[16px] !font-[650] pb-[10px] ${fondoFooter}`}>{textos[idioma].footer.redes}</h3>
          <div class='flex  gap-2  justify-start'>
            <a class='p-2 cursor-pointer' href="https://www.facebook.com/Ayllulagunahuaypo" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook hover:stroke-blue-900"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></a>
            <a class='p-2 cursor-pointer' href="https://www.instagram.com/ayllulagunahuaypo/?igsh=MWw5a2oycThoczFwag%3D%3D#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram hover:stroke-blue-900"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg></a>
            {/* <a class='p-2 cursor-pointer' href="" target="_blank"><BsTwitterX/></a> */}
            <a class='p-2 cursor-pointer' href="https://www.tiktok.com/@cusicoyllur_chinchero?_r=1&_t=ZS-91p9gJyLzMI" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok hover:stroke-blue-900"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg></a>
            <a class='p-2 cursor-pointer' href="https://youtube.com/watch?v=qWZNLsqJZTs&feature=shared" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube hover:stroke-blue-900"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" /><path d="M10 9l5 3l-5 3z" /></svg></a>
          </div>
        </div>
      </div>
      <div class="h-[2px] w-full">
        {/* bg-black bg-orange-300 */}
        <p class={`text-center py-1.0 text-black font-mono text-[12px] ${fondoFooter}`}>
          &copy; 2024 {textos[idioma].footer.derechos}
        </p>
      </div>  
    </footer>
  );
}

export default Footer