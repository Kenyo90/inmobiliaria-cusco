// import Temas from './Temas';

const Navbar = () => {

const color=document.getElementById('btncolor');
console.log(color);
const tema= document.getElementById('temas');
console.log(tema);
// color.addEventListener('click',()=>{
// console.log('click');
// });

  return (
    // 
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
        </div>
      </div>
    </div>
  );
}

export default Navbar

// import { useState } from 'react';
// import BtnInicio from './BtnInicio';
// import BtnAdmin from './BtnAdmin';

// const Navbar = () => {
//   const [showTemas, setShowTemas] = useState(false);

//   return (
//     <div className="flex justify-center w-full h-[76px] px-10 rounded-md shadow-md">
//       <div className="flex justify-between h-[76px] items-center w-[1468px] bg-white gap-10 p-[16px]">
//         {/* Left side */}
//         <div className="flex gap-2 h-15 text-left w-6x1 justify-between content-center items-center">
//           <img className="w-15" src="/img/Home.svg" alt="Home Icon" />
//           <div>
//             <h1 className="text-[20px]">Terrenos Cusco</h1>
//             <p className="text-[12px]">Terrenos en el Corazón de los Andes</p>
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="flex gap-3 h-15 text-center mx-5 items-center relative">
//           <BtnInicio />
//           <BtnAdmin />

//           {/* Color button */}
//           <button
//             id="btncolor"
//             onClick={() => setShowTemas(!showTemas)}
//             className="bg-[#FEF7F2] text-black p-2 py-1 rounded-sm cursor-pointer"
//           >
//             <img className="w-5" src="/img/color.png" alt="Color Theme" />
//           </button>

//           {/* Theme options */}
//           {showTemas && (
//             <div
//               id="temas"
//               className="absolute right-0 top-[60px] bg-white shadow-md rounded-md p-3 z-10"
//             >
//               <div className="flex flex-col gap-2">
//                 <button className="hover:text-blue-500">Claro</button>
//                 <button className="hover:text-blue-500 ">Oscuro</button>
//               </div>
//             </div>
//           )}

//           {/* Global button */}
//           <button className="bg-[#FEF7F2] text-black p-2 py-1 rounded-sm cursor-pointer">
//             <img className="w-5" src="/img/global.png" alt="Global" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
