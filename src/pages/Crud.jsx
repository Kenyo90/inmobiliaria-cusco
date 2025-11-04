import { useEffect, useState } from "react";
import BtnAgregar from "../components/BtnAgregar";
import BtnActualizar from "../components/BtnActualizar";
import BtnSalir from "../components/BtnSalir";
import { listarPropiedades, eliminarPropiedad } from "../Services/ApiServices";

const Crud = () => {
  const [propiedades, setPropiedades] = useState([]);
  const [mensaje, setMensaje] = useState("");
  console.log(mensaje)

  // 🔄 Cargar propiedades al iniciar el componente
  const cargarPropiedades = async () => {
    try {
      const datos = await listarPropiedades();
      setPropiedades(datos);
    } catch (error) {
      console.error("Error al listar propiedades:", error);
    }
  };

  useEffect(() => {
    cargarPropiedades();
  }, []);

  // 🧩 Cuando se crea una nueva propiedad, se agrega al listado
  const handlePropiedadCreada = (nuevaProp) => {
    setPropiedades((prev) => [...prev, nuevaProp]);
  };

  // 🧩 Manejar eliminación
  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Estás seguro de eliminar esta propiedad?");
    if (!confirm) return;

    const exito = await eliminarPropiedad(id);
    if (exito) {
      setPropiedades((prev) => prev.filter((prop) => prop.id !== id));
      setMensaje("✅ Propiedad eliminada correctamente");
    } else {
      setMensaje("❌ Error al eliminar propiedad");
    }
  };

  return (
    <div class="flex flex-col gap-6">
      <BtnSalir />

      <main class="container mx-auto px-6 py-8 bg-[#FEF7F2]">
        {/* Header */}
        <div class="flex items-center justify-between mb-[24px] border-b border-red-200">
          <div class="w-[1504px] h-[44px]">
            <h1 class="text-[25px] font-bold">
              Página de Administración de Terrenos
            </h1>
            <p class="text-gray-400 text-sm">
              Gestiona todos los terrenos disponibles
            </p>
          </div>

          <BtnAgregar
            onPropiedadCreada={handlePropiedadCreada}
            class="inline-flex items-center w-[190px] px-4 py-2 justify-center bg-[#952C00] rounded-md text-white hover:bg-[#7a2200] transition-colors"
          />
        </div>

        {/* Tabla de propiedades */}
        <div>
          <table class="w-full caption-bottom text-sm border-collapse md:border-separate md:rounded-lg overflow-hidden">
            <thead>
              <tr className="text-foreground text-center font-medium whitespace-nowrap h-[40px] bg-[#dac6be]">
                <th class="w-[250px] text-left text-[14px] px-5 border border-gray-300">Título</th>
                <th class="w-[300px] text-left text-[14px] px-5 border border-gray-300">Ubicación</th>
                <th class="w-[151px] text-left text-[14px] px-5 border border-gray-300">Tipo</th>
                <th class="w-[111px] text-left text-[14px] px-5 border border-gray-300">Área</th>
                <th class="w-[160px] text-left text-[14px] px-5 border border-gray-300">Precio</th>
                <th class="w-[144px] text-left text-[14px] px-5 border border-gray-300">Estado</th>
                <th class="w-[146px] text-right text-[14px] px-5 border border-gray-300">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {propiedades.length > 0 ? (
                propiedades.map((prop) => (
                  <tr
                    key={prop.id}
                    class="hover:bg-muted/50 border-b transition-colors"
                  >
                    <td class="p-2 flex text-left items-center whitespace-nowrap h-[52px]  max-w-[250px] truncate text-[14px]">
                      {prop.titulo}
                    </td>
                    <td class="text-left p-2 h-[52px] text-[14px]">{prop.direccion}</td>
                    <td class="text-left p-2 h-[52px] text-[14px]">
                      <span
                        class="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs text-black "
                        style={{ minWidth: "90px" }}>
                        {prop.tipo}
                      </span></td>
                    <td class="text-left p-2 h-[52px] text-[14px]">{prop.metrosCuadrados} m²</td>
                    <td class="text-left p-2 h-[52px] text-[14px]">USD {prop.precio}</td>
                    <td class="text-left p-2 h-[52px] text-[14px]">
                      <span
                        class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs  bg-[#952C00]  text-white"
                        style={{ minWidth: "90px" }}
                      >
                        {prop.estado}
                      </span>
                    </td>
                    <td class="p-2 text-center">
                      <div class="flex justify-center gap-4 items-center">
                        {/* 🧩 Botón Editar */}
                        <BtnActualizar
                          propiedad={prop}
                          onActualizado={cargarPropiedades} // 🔄 refresca después de editar
                        />

                        {/* 🧩 Botón Eliminar */}
                        <button
                          onClick={() => handleDelete(prop.id)}
                          class="bg-red-500 text-white p-2 rounded-sm hover:bg-red-600 transition-colors duration-200"
                          title="Eliminar propiedad"
                        >
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
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    class="text-center py-6 text-gray-500 italic"
                  >
                    No hay propiedades registradas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Crud;
