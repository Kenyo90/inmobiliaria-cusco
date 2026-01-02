// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Temas from "./Temas";
import Idioma from "./Idioma";
import { Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const Navbar = () => { 
  const navigate=useNavigate()
  const { colorMode } = useColorMode();

  const fondo = colorMode === "light"
    ? "bg-white text-black"
    : "bg-gray-900 text-white";

  // const fondoSeccion = colorMode === "light"
  //   ? "bg-[#FEF7F2]"
  //   : "bg-gray-800";
  //   console.log("fondoSeccion",fondoSeccion);


  const handlePanel= () => {
    navigate("Crud");
  }

  return (
    // display={'flex'} justifyContent={'center'} flexDir={'row'} bg-white
    <div class={`flex w-full px-[30px] h-[76px] 2xl:px-10 sm:px-[60px] md:px-[32px] ${fondo}`}>

      <div class={`flex justify-between  h-[76px] px-0 items-center w-[1468px] gap-10 p-[16px] 2xl:px-[64px] xl:px-[60px] lg:px-[10px] md:px-[32px] sm:px-0 ${fondo}`}>
        {/* LOGO */}
        <div class="flex gap-2 h-15 flex-row text-left w-6x1 justify-between content-center items-center">
          {/* <img class="w-[35px] h-[35px]" src="/public/img/Home.svg" alt="" /> */}
          <img class="w-[70px] h-[70px]" src="/public/img/logo_sinfondo.png" alt="Logo" />
          <div >
            <h1 class={`text-[12px] lg:text-[18px] xl:text-[18px] ${fondo}`}>
              Terrenos Cusco
            </h1>
            <p class={`text-[8px] lg:text-[8px] xl:text-[8px] ${fondo}`}>
              Terrenos en el Corazón de los Andes
            </p>
          </div>
        </div>
        
        {/* BOTONES DERECHA */}
        <div class="relative flex gap-6 h-15 flex-row text-center mx-5 items-center ">
          {/* BOTÓN COLOR */}
          {localStorage.getItem("token") && (
            <button
              onClick={handlePanel}
              class="!bg-[#FEF7F2] !text-[#0e0d0d] !p-1 rounded-sm cursor-pointer shadow-sm shadow-black"
            >
              Administrador
            </button>
          )}
          <div class="flex gap-3  ">
            <Temas/>
            <Idioma/> 
          </div>                  
        </div>
      </div>
    </div>
  );
}

export default Navbar;
