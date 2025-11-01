import React from 'react'
import { useNavigate } from "react-router-dom";
const BtnSalir = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    // 🗑️ Eliminar token del localStorage
    localStorage.removeItem("token");

    // Mensaje opcional
    alert("Sesión cerrada correctamente");

    // 🔁 Redirigir al login
    navigate("/");
  };

    


  return (
    <>
    <div class='bg-white  flex justify-center w-full h-[76px] px-10 rounded-md shadow-md 2xl:px-15 '>
      <div class="flex justify-between h-[76px] items-center w-[1468px] bg-white gap-10 p-[16px]">
        <div class="flex gap-2 h-15  text-left w-6x1 justify-between content-center items-center">
          <img class='w-15' src="/public/img/Home.svg" alt="" />
          <div>
            <h1 class='text-[20px]'>Terrenos Cusco</h1>
            <p class='text-[12px]'>Terrenos en el Corazón de los Andes</p>
          </div>
        </div>
        <div class="flex gap-3 h-15 text-center mx-5 items-center">
   
          <buttton id='btncolor' class="bg-[#FEF7F2] text-black p-2 py-1 rounded-sm cursor-pointer relative">
            <img class='w-5' src="/public/img/color.png" alt="" />
          </buttton>
          <div id='temas' class='hidden absolute left-320 top-15 bg-white shadow-md rounded-md p-3 z-10'>
            <table class='flex gap-2 flex-col'>
              <button>Claro</button>
              <button>Oscuro</button>
            </table>
          </div>
          {/* <Temas id='temas'/> */}
          <buttton class="bg-[#FEF7F2] text-black p-2 py-1 rounded-sm cursor-pointer">
            <img class='w-5' src="/public/img/global.png" alt="" />
          </buttton>
          <buttton  onClick={handleLogout} class="bg-[#FEF7F2] text-black p-2 py-1 rounded-sm cursor-pointer">
            <img class='w-5' src="/public/img/ArrowRightStartOnRectangle.svg" alt="" />
          </buttton>
          
        </div>
      </div>
    </div>
    
    </>
  )
}

export default BtnSalir
