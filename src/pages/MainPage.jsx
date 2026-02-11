import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Formulario from '../components/Formulario'
import { AspectRatio} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";


const MainPage = () => {
  
  const navigate = useNavigate();

  const terreno = () => {
    navigate("/inicio");
  };
  const Inicio = () => {
    navigate("/");
  };
   const { colorMode } = useColorMode();

  const fondo =
    colorMode === "light"
      ? "bg-white text-black"
      : "bg-white/10 text-white";

  const fondoSeccion = colorMode === "light" ? "bg-[#FEF7F2]" : "bg-[#101828]";
  // bg-gray-800

  return (
    <div className="flex flex-col justify-center mx-auto overflow-hidden p-0 box-border text-base h-fit w-full">
      <Navbar />
      <div className="bg-[#101828]">
        <ol className=" flex justify-center gap-10 max-sm:gap-1 p-4 text-white font-bold cursor-pointer">
          <li onClick={Inicio} className=" cursor-pointer px-3 py-1 hover:bg-white/10 hover:pt-0 h-40px md:text-red">
            Inicio
          </li>
          <li className=" cursor-pointer px-3 py-1 hover:bg-white/10 hover:pt-0 h-40px">
            <a href="#Nosotros"> Nosotros </a>
          </li>
          <li onClick={terreno} className=" cursor-pointer px-3 py-1 hover:bg-white/10 hover:pt-0 h-40px">
            Terrenos
          </li>
          <li className=" cursor-pointer px-3 py-1 hover:bg-white/10 hover:pt-0 h-40px">
            <a href="#Contacto"> Contacto </a>
          </li>
        </ol>
      </div>
      <section className="flex justify-center items-center w-full">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/img/BannerLaguna.png")`,
            backgroundSize: "cover",
            opacity: 0.8,
            backgroundPosition: "center",
          }}
          className=" h-[500px] w-full flex justify-center items-center relative flex-col gap-5"
        >
          <h1 className="text-white !text-[55px] font-[banner] font-extrabold animate-entrada-suave px-2 text-center">
            AYLLU LAGUNAS INMOBILARIA
          </h1>

          <span className="text-white text-[1.1rem] mx-[3rem] md:mx-[10rem] font-semibold  px-1 text-center">
            Agendar asesoría personalizada para encontrar el terreno ideal en
            Cusco. ¡Contáctanos hoy mismo!
          </span>
          <div class="mt-3">
            <a
              href="https://calendly.com/cusicunasandra/30min"
              target="_blank"
              rel="noopener noreferrer"
              class="px-6 py-2 !text-white !bg-black rounded-md shadow-md hover:bg-gray-800 transition duration-300 ease-in-out text-center font-semibold"
            >
              Agendar Asesoría
            </a>
          </div>
        </div>
      </section>
      <div
        className={`${fondoSeccion} px-[20px]  pt-10 flex  flex-col gap-15 max-sm:px-[20px] sm:px-[20px] md:px-[64px] `}
      >
        <section  className=" flex flex-col justify-center gap-5 ">
           {/* bg-white/10 */}
          <aside id='Nosotros' className={` bg-white/10 flex gap-10 justify-center items-center text-white text-center max-sm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row p-5`} >
            <section  className={` ${fondo} flex flex-col text-center gap-5`}>
              <h1 className=" !text-[2em] font-bold w-fit text-center">
                Nosotros
              </h1>
              <p className="text-[1rem] ">
                Nosotros En Ayllu Lagunas Inmobiliaria creemos que invertir en
                un terreno no es solo una compra, es una decisión que construye
                futuro.Nos dedicamos a ofrecer terrenos en Cusco con seguridad
                legal, ubicaciones estratégicas y acompañamiento constante en
                todo el proceso.Sabemos que tomar esta decisión requiere
                confianza, por eso trabajamos con transparencia, compromiso y
                atención personalizada para que te sientas seguro desde el
                primer contacto hasta la entrega final. 
                Tu inversión es importante. Nuestro compromiso también.
                {/* En Ayllu Lagunas Inmobiliaria nos especializamos en la venta de
              terrenos en Cusco, ofreciendo lotes con documentación saneada,
              ubicados en zonas estratégicas y con alto potencial de
              valorización. Acompañamos a nuestros clientes en todo el proceso,
              brindando asesoría personalizada y transparente. */}
              </p>
            </section>
            <img
              src="../public/img/fondo.png"
              alt="logo"
              className="w-[150px] max-sm:w-full sm:w-full md:w-full lg:h-full lg:w-[450px] xl:w-[550px] 2xl:w-[600px] "
            />
          </aside>
        </section>

        <section
          className=" flex flex-col justify-center gap-5 px-0 
          md:px-0 lg:px-0 xl:px-0 2xl:px-0 "
        >
          <aside id='Terrenos' className="flex gap-5 md:flex-row justify-center items-center text-white text-center bg-white/10 p-3 max-sm:flex-col sm:flex-col">
            <section className={`flex flex-row gap-5 justify-center items-center max-sm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row ${fondo} p-5`}>
              {/* <h1 className="text-white !text-[2em] font-bold text-center w-fit p-2">
                Otra cosa 
              </h1> */}
              <img src="../public/img/laguna1.png" alt="" className='w-[50%] 
              max-sm:w-full sm:w-full md:w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%]' />
              <img src="../public/img/laguna2.png" alt="" className='w-[50%]
              max-sm:w-full sm:w-full md:w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'/>
              {/* <p className="text-[1rem]">
                
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                blanditiis nulla aperiam, quos molestiae natus quae labore
                officiis nam nihil similique tempore earum rerum, quisquam
                doloribus impedit nostrum rem architecto?
              </p> */}
            </section>
          </aside>
        </section>
        <div id="Contacto">
          {/* <h2 className="text-white !text-[2em] font-bold text-center w-fit p-2">
            Contacto
          </h2> */}
          <Formulario />
        </div>
        <div id="ubicacion" className="flex flex-col gap-5">
          <aside className="flex gap-5 justify-center text-white items-center bg-white/10 p-3 max-sm:flex-col sm:flex-col md:flex-row">
            <AspectRatio
              ratio={4 / 3}
              w="full"
              h="350px"
              _before={{ paddingBottom: 0 }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15524.671936285878!2d-72.13976561477021!3d-13.401923066908276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916ddad81f39e86f%3A0x929f13dc0dce648!2sLaguna%20Huaypo!5e0!3m2!1ses!2spe!4v1770618288489!5m2!1ses!2spe"
              />
            </AspectRatio>
          </aside>
        </div>
        <div>
          <Footer className="mt-[-20px] pt-[-10px]" />
        </div>
        <div class=" fixed  bottom-5 right-5 hover:scale-110 transition-transform duration-200 ">
          <a
            class="!hover:bg-amber-400"
            href="https://wa.me/+51984010709?text=Hola%20quiero%20contactame%20contigo"
            target="_blank"
          >
            <img
              // class="w-13 hover:w-15 transition-all duration-200"
              className="w-12 sm:w-14 md:w-16 transition-all duration-200"
              src="../../public/img/whatsapp.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainPage




