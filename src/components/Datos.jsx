import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

const Datos = () => {
  const [propiedades, setPropiedades] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(2);
  const [direccion, setDireccion] = useState("asc");
  const [totalPages, setTotalPages] = useState(0);
  console.log(setSize,setDireccion)

  const fetchPage = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/propiedades/paginadas", {
        params: { page, size, sortBy: "precio", direction: direccion },
      });
      const data = response.data;
      setPropiedades(data.content || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("❌ Error al obtener propiedades:", error);
    }
  }, [page, size, direccion]); // ✅ Dependencias correctas

  useEffect(() => {
    fetchPage();
  }, [fetchPage]); // ✅ No más advertencias

  return (
    <div className="p-4">
      <h2>Propiedades disponibles</h2>
      <ul>
        {propiedades.map((prop) => (
          <li key={prop.id}>
            <strong>{prop.titulo}</strong> — S/.{prop.precio} ({prop.tipo})
          </li>
        ))}
      </ul>

      <div>
        <button onClick={() => setPage((p) => Math.max(p - 1, 0))} disabled={page === 0}>
          Anterior
        </button>
        <span>
          Página {page + 1} de {totalPages}
        </span>
        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))} disabled={page + 1 >= totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Datos;



// import React, { useEffect, useState } from 'react'

// const Datos = () => {
//   const [propiedades, setPropiedades]=useState([]);
//   const [page,setPage]=useState(0);
//   const [size,setSize]=useState(0);
//   const [direccion, setDireccion]=useState("")

//   const ApiPage=`http://localhost:8080/api/propiedades/paginadas?page=${page}&size=${size}&sortBy=precio&direction=${direccion}`
  
//   const FetchPage=async()=> {
//     try {
//       const response = await fetch(ApiPage,{
//          params: {
//           page: setPage,
//           size: setSize,
//           sortBy: 'precio',
//           direction: setDireccion
//         },
//       });
//       setPropiedades(response.data.content);
//       setPage(response.data.setPage);
//       if (!response.ok) {
//         throw new Error(`Error al listar propiedades: ${response.status}`);
//       }

//       return await response.json();
//     } catch (error) {
//       console.error("❌ Error al obtener propiedades:", error);
//       throw error;
//     }
//   }
//   useEffect(()=>{
//     FetchPage()
//   },[page]);
  
//   return (
//     <div>
//       <h2>Propiedades disponibles</h2>
//       <ul>
//         {propiedades.map((prop) => (
//           <li key={prop.id}>
//             <strong>{prop.titulo}</strong> - S/.{prop.precio} ({prop.tipo})
//           </li>
//         ))}
//       </ul>

//       <div>
//         <button onClick={() => setPage((prev) => Math.max(prev - 1, 0))} disabled={page === 0}>
//           Anterior
//         </button>
//         <span>Página {page + 1} de {page}</span>
//         <button onClick={() => setPage((prev) => Math.min(prev + 1, page - 1))} disabled={page + 1 === page}>
//           Siguiente
//         </button>
//       </div>
//     </div>
//   )
// }
// export default Datos


///----------------------------------------------------------------


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Datos = () => {
//   const [propiedades, setPropiedades] = useState([]);
//   const [page, setPage] = useState(0);
//   const [size, setSize] = useState(0);
//   const [direccion,setDireccion]=useState("");

//   const fetchPaginacion = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) throw new Error("No hay token disponible");
//       const response = await axios.get(
//         "http://localhost:8080/api/propiedades/paginadas",
//         {
//           params: {
//             page: page,
//             size: 6,
//             sortBy: "precio",
//             direction: "desc",
//           },
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setPropiedades(response.data.content);
//       setSize(response.data.totalPages);
//     } catch (error) {
//       console.error("Error al cargar propiedades:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPaginacion();
//   }, [page]);

//   return (
//     <div>
//       <h2>Propiedades disponibles</h2>
//       <ul>
//         {propiedades.map((prop) => (
//           <li key={prop.id}>
//             <strong>{prop.titulo}</strong> - S/.{prop.precio} ({prop.tipo})
//           </li>
//         ))}
//       </ul>

//       <div>
//         <button
//           onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
//           disabled={page === 0}
//         >
//           Anterior
//         </button>
//         <span>
//           Página {page + 1} de {totalPages}
//         </span>
//         <button
//           onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
//           disabled={page + 1 === totalPages}
//         >
//           Siguiente
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PropiedadesPaginadas;
