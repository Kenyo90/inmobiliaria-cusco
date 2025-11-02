import { useEffect, useState } from "react";
import BtnAgregar from "../components/BtnAgregar";
import BtnActualizar from "../components/BtnActualizar";
import BtnSalir from "../components/BtnSalir";
import { listarPropiedades } from "../Services/ApiServices";
import { eliminarPropiedad } from "../Services/ApiServices";

const Crud = () => {
  const [propiedades, setPropiedades] = useState([]);

  // Esta función se ejecutará cuando se cree una nueva propiedad
  const handlePropiedadCreada = (nuevaProp) => {
    setPropiedades((prev) => [...prev, nuevaProp]);
  };

  // Función para manejar la eliminación de un post con token
  const [mensaje, setMensaje]=useState("");
  console.log(mensaje)

  const handleDelete = async (id)=>{
    const confirm = window.confirm("Estas seguro..?");
    if(!confirm) return;
    const exito = await eliminarPropiedad(id);
    if(exito){
      setPropiedades(prev=> prev.filter(prop=>prop.id !==id));
      setMensaje("Propiedad eliminar correcto");
    }else{
      setMensaje("Error al eliminar propiedad")
    }
  };
  // Cargar propiedades al iniciar el componente
  useEffect(() => {
    async function cargarPropiedades() {
      try {
        const datos = await listarPropiedades();
        setPropiedades(datos);
      } catch (error) {
        console.error(error);
      }
    }
    cargarPropiedades();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <BtnSalir />
      <main className="container mx-auto px-6 py-8 bg-[#FEF7F2]">
        <div className="flex items-center justify-between mb-[24px] border-b border-red-200">
          <div className="w-[1504px] h-[44px]">
            <h1 className="text-3xl font-bold">
              Página de Administración de Terrenos
            </h1>
            <p className="text-gray-400 text-sm">
              Gestiona todos los terrenos disponibles
            </p>
          </div>
          <BtnAgregar
            onPropiedadCreada={handlePropiedadCreada} // ✅ Esto ahora funciona
            className="inline-flex items-center w-[190px] px-4 py-2 justify-center bg-[#952C00] rounded-md text-white hover:bg-[#7a2200] transition-colors"
          />


        </div>
        <div>
          <table className="w-full caption-bottom text-sm border-collapse md:border-separate md:rounded-lg overflow-hidden">
  <thead>
    <tr className="text-foreground px-2 text-center align-middle font-medium whitespace-nowrap h-[40px] bg-[#dac6be]">
      <th className="w-[304px] border border-gray-300">Titulo</th>
      <th className="w-[228px] border border-gray-300">Ubicacion</th>
      <th className="w-[151px] border border-gray-300">Tipo</th>
      <th className="w-[111px] border border-gray-300">Área</th>
      <th className="w-[160px] border border-gray-300">Precio</th>
      <th className="w-[144px] border border-gray-300">Estado</th>
      <th className="w-[146px] border border-gray-300">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {propiedades.map((prop) => (
      <tr key={prop.id} className="hover:bg-muted/50 border-b transition-colors">
        <td className="p-2 align-middle whitespace-nowrap font-medium max-w-[200px] truncate">
          {prop.titulo}
        </td>
        <td className="flex justify-center p-2 align-middle whitespace-nowrap">
          {prop.direccion}
        </td>
        <td className="p-2 align-middle whitespace-nowrap">{prop.tipo}</td>
        <td className="flex justify-center p-2 align-middle whitespace-nowrap">
          {prop.metrosCuadrados} m²
        </td>
        <td className="p-2 align-middle whitespace-nowrap">USD {prop.precio}</td>
        <td className="flex justify-center p-2 align-middle whitespace-nowrap">
          <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-[#952C00] text-white">
            {prop.estado}
          </span>
        </td>
        <td className="p-2 align-middle whitespace-nowrap">
          <div className="flex justify-center gap-5 items-center">
            <BtnActualizar />
            <button
              onClick={() => handleDelete(prop.id)}
              className="bg-red-500 text-white px-2 py-1 rounded-sm hover:bg-red-600 transition-colors duration-200"
            >
              {/* Ícono eliminar */}
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="red"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                ></path>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      </main>
    </div>
  );
};

export default Crud;



// import { useEffect,useState } from "react";
// import BtnAgregar from "../components/BtnAgregar";
// import BtnActualizar from "../components/BtnActualizar";
// import BtnSalir from "../components/BtnSalir";
// import { eliminarPropiedad, listarPropiedades } from "../Services/ApiServices";

// const Crud = ({id}) => {

//   const [propiedades, setPropiedades] = useState([]);

//   //Esta funcion se ejecutara cuando se cree una nueva propiedad
//   const handlePropiedadCreada=(nuevaProp)=>{
//     setPropiedades((prev)=>[...prev, nuevaProp]);
//   }
//   //Delete
 
//   const [cargando, setCargando] = useState(false);
//   const [mensaje, setMensaje] = useState("");
  
//   const handleEliminar = async () => {
//     setCargando(true);
//     setMensaje("");
//     try {
//       const exito = await eliminarPropiedad(id);
//       if (exito) {
//         setMensaje("Propiedad eliminada correctamente.");
//         console.log(`Propiedad con id ${id} ${mensaje} eliminada..`);
//       } else {
//         setMensaje("No se pudo eliminar la propiedad");
//       }
//     } catch (error) {
//       setMensaje("Ocurrio un error al eliminar la propiedad");
//       console.error(error);
//     } finally {
//       setCargando(false);
//     }
//   };
  
//   useEffect(() => {
//       async function cargarPropiedades() {
//         try{
//           const datos=await listarPropiedades()
//           setPropiedades(datos);      
//           console.log("pro",datos)
//         }catch(error){
//           console.error(error)
//         }
//       }
//       cargarPropiedades()
//     }, []);

//   return (
//     <div class="flex flex-col gap-6">
//       <BtnSalir />
//       <main class="container mx-auto px-6 py-8 bg-[#FEF7F2]">
//         <div class="flex items-center justify-between mb-[24px] border-b border-red-200">
//           <div class="w-[1504px] h-[44px]">
//             <h1 class="text-3xl font-bold ">
//               Página de Administración de Terrenos
//             </h1>
//             <p class="text-gray-400 text-sm">
//               {" "}
//               Gestiona todos los terrenos disponibles
//             </p>
//           </div>
//           <span class="inline-flex items-center w-[190px] px-1 py-1 justify-center bg-[#952C00] rounded-md text-white hover:bg-[#7a2200] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#952C00] cursor-pointer    ">
//             <button class="flex items-center gap-2 content-center justify-center">
//               <BtnAgregar onPropiedadCreada={handlePropiedadCreada}/>
//             </button>
//           </span>
//         </div>
//         <div>
        
//           <table class="w-full caption-bottom text-sm border-collapse md:border-separate md:rounded-lg overflow-hidden ">
//             <thead>
//               <tr class="text-foreground px-2 text-center align-middle     font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&> [role=checkbox]] :translate-y-[2px] h-[40px] bg-[#dac6be]">
//                 <th class="w-[304px] border border-gray-300 ">Titulo</th>
//                 <th class="w-[228px] border border-gray-300 ">Ubicacion</th>
//                 <th class="w-[151px] border border-gray-300">Tipo</th>
//                 <th class="w-[111px] border border-gray-300">Área</th>
//                 <th class="w-[160px] border border-gray-300">Precio</th>
//                 <th class="w-[144px] border border-gray-300">Estado</th>
//                 <th class="w-[146px] border border-gray-300">Acciones</th>
//               </tr>
//             </thead>
//             {propiedades.map((prop) => (
//             <tbody key={prop.id}
//             class="[&_tr:last-child]:border-0 ">
//               <tr class="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
//                 <td class="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] font-medium max-w-[200px] truncate ">
//                   {prop.titulo}
//                 </td>
//                 <td class="flex justify-center p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
//                   {prop.direccion}
//                 </td>
//                 <td class=" p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
//                   {prop.tipo}
//                 </td>
//                 <td class="flex justify-center p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
//                   {prop.metrosCuadrados} m²
//                 </td>
//                 <td class=" p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
//                   USD {prop.precio}
//                 </td>
//                 <td class="flex justify-center p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
//                   <span class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90 bg-[#952C00] text-white">
//                     {prop.estado}
//                   </span>
//                 </td>
//                 <td class=" p-2 align-middle whitespace-nowrap flex justify-center flex-row gap-5 items-center ">
//                   <BtnActualizar />
//                     <button onClick={handleEliminar}  disabled={cargando} class="bg-red-500 text-white px-2 py-1 rounded-sm hoverz:bg- transition-colors duration-200 ">
//                       <svg
//                         data-slot="icon"
//                         fill="none"
//                         stroke-width="1.5"
//                         stroke="red"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                         aria-hidden="true"
//                         class="w-5 h-5"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//                         ></path>
//                       </svg>
//                     </button>
//                   {/* <div class="flex justify-center flex-row gap-5 items-center">
//                     <BtnActualizar />
//                     <button onClick={handleEliminar}  disabled={cargando} class="bg-red-500 text-white px-2 py-1 rounded-sm hoverz:bg- transition-colors duration-200 ">
//                       <svg
//                         data-slot="icon"
//                         fill="none"
//                         stroke-width="1.5"
//                         stroke="red"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                         aria-hidden="true"
//                         class="w-5 h-5"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//                         ></path>
//                       </svg>
//                     </button>
//                   </div> */}
//                 </td>
//               </tr>
//             </tbody>
//             ))}
         
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Crud;
