import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import React from "react";
import { usePropiedadesFilter } from "../hooks/usePropiedadesFilter";
import { Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,RadioGroup,Stack,Radio,} from "@chakra-ui/react";
// import MultiMedia from "./MultiMedia";

const Terreno = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  console.log(setScrollBehavior)

  const btnRef = React.useRef(null)

  const [propiedades, setPropiedades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const [direction, setDirection] = useState("asc");
  const [totalPages, setTotalPages] = useState(0);

  console.log(setSize, setDirection);
  const { filteredPropiedades, filters, updateFilter } =
    usePropiedadesFilter(propiedades);

  const cargarPropiedadesPage = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:8080/api/propiedades/paginadas",
        {
          params: {
            page,
            size,
            sortBy: "precio",
            direction,
          },
        }
      );

      setPropiedades(response.data.content || []);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error("❌ Error al listar propiedades:", error);
    } finally {
      setLoading(false);
    }
  }, [page, size, direction]); //, tipo, estado, precioMin, precioMax, areaMin, areaMax, distrito

  useEffect(() => {
    cargarPropiedadesPage();
  }, [cargarPropiedadesPage]);

  const [selectedProp, setSelectedProp] = useState(null);


  if (loading) return <p class="text-center p-8">Cargando propiedades...</p>;

  return (
    <div class="grid gap-6 bg-[#FEF7F2] 2xl:w-full 2xl:grid-cols-[280px_1fr] 2xl:gap-6 xl:grid-cols-[280px_1fr] xl:px-0 lg:px-0  2xl:px-0 lg:grid-cols-[280px_1fr] md:grid-cols-1 sm:grid-cols-1  lg:w-full lg:px-auto justify-center items-center md:w-full">
      <section class="w-full lg:sticky top-4 self-start h-fit bg-white p-0 rounded-lg shadow-md">
        <div class=" w-full md:w-[100%] sm:w-[100%] xs:w-[100%] 2xl:w-[280px] lg:w-[280px] bg-white rounded-xl border p-4 shadow-sm overflow-hidden hover:shadow-lg transition-shadow flex flex-col gad-4 ">
          <div class="pb-4 text-lg">
            <h1>Filtros</h1>
          </div>
          <div class="pb-4">
            <label for="opciones">Tipo de Terreno </label>
            <div class="pt-2">
              <select
                placeholder="Todos"
                id="tipo"
                class="!border !border-gray-400 !appearance-none rounded-md w-[95px] bg-transparent px-3 h-[30px] md:w-[95px] sm:w-[95px]"
                value={filters.tipo}
                onChange={(e) => updateFilter("tipo", e.target.value)}
              >
                <option value="" class="text-[14px]">
                  Todos
                </option>
                <option value="TERRENO_URBANO" class="text-[14px]">
                  {" "}
                  Urbano
                </option>
                <option value="TERRENO_AGRICOLA" class="text-[14px]">
                  {" "}
                  Agrícola
                </option>
                <option value="LOTIZACIÓN" class="text-[14px]">
                  Lotización
                </option>
              </select>
            </div>
          </div>
          <div class="pb-4">
            <label for="opciones1">Estados </label>
            <div class="pt-2">
              <select
                placeholder="Todos"
                id="estado"
                class="!border !border-gray-400 !appearance-none rounded-md w-[95px] bg-transparent px-3 md:w-[95px] h-[30px] sm:w-[95px]"
                value={filters.estado}
                onChange={(e) => updateFilter("estado", e.target.value)}
              >
                <option value="" class="text-[14px]">
                  Todos
                </option>
                <option value="DISPONIBLE" class="text-[14px]">
                  Disponible
                </option>
                <option value="RESERVADO" class="text-[14px]">
                  Reservado
                </option>
                <option value="VENDIDO" class="text-[14px]">
                  Vendido
                </option>
              </select>
            </div>
          </div>
          <div class="pb-4">
            <label htmlFor="">Rango</label> <br />
            <div class="grid grid-cols-2 gap-2 pt-2 md:gap-[30px] sm:gap-[30px]">
              <input
                type="number"
                placeholder="Mínimo"
                class="!border !border-gray-500 !appearance-none rounded-md px-3 py-1 h-[36px]"
                // class="border rounded px-3 py-1 h-[30px] "
                value={filters.precioMin}
                onChange={(e) => updateFilter("precioMin", e.target.value)}
                min={0}
              />
              <input
                type="number"
                placeholder="Máximo"
                // class="border rounded px-3 py-1 h-[30px]"
                class="!border !border-gray-500 !appearance-none rounded-md px-3 py-1 h-[36px]"
                value={filters.precioMax}
                onChange={(e) => updateFilter("precioMax", e.target.value)}
                min={0}
              />
            </div>
          </div>

          <div class="pb-4">
            <label htmlFor="areaMax">Área (m²)</label> <br />
            <div class="grid grid-cols-2 gap-2 pt-2 md:gap-[30px] sm:gap-[30px]">
              <input
                type="number"
                placeholder="Mínimo"
                // class=" border rounded px-3 py-1 h-[30px]"
                class="!border !border-gray-500 !appearance-none rounded-md px-3 py-1 h-[36px]"
                value={filters.areaMin}
                onChange={(e) => updateFilter("areaMin", e.target.value)}
                min={0}
              />
              <input
                type="number"
                placeholder="Máximo"
                // class="border rounded px-3 py-1 h-[30px]"
                class="!border !border-gray-500 !appearance-none rounded-md px-3 py-1 h-[36px]"
                value={filters.areaMax}
                onChange={(e) => updateFilter("areaMax", e.target.value)}
                min={0}
              />
            </div>
          </div>
          <div>
            <label htmlFor="distrito">Distrito</label>
            <div class="pt-2">
              <input
                type="text"
                id="distrito"
                placeholder="Todos"
                // class="border rounded px-3 py-1 w-full h-[30px]"
                class="!border !border-gray-500 !appearance-none rounded-md px-3 py-1 h-[36px] w-full"
                value={filters.distrito}
                onChange={(e) => updateFilter("distrito", e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="terrenosUp"
        class="sm:px-0 xl:gap-6 2xl:gap-5 md:px-0 2xl:w-full"
      >
        <p class="w-full pb-5">
          {filteredPropiedades.length} terrenos encontrados
        </p>

        {/* <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
        <Stack direction='row'>
          <Radio value='inside'>inside</Radio>
          <Radio value='outside'>outside</Radio>
        </Stack>
      </RadioGroup> */}

        <Button
          onClick={onOpen}
          ref={btnRef}
          class="grid sm:grid-cols-1 md:grid-cols-2 xl:gap-6 gap-6 2xl:grid-cols-3 xl:grid-cols-3 2xl:gap-6 lg:grid-cols-2 lg:gap-6 md:gap-6 justify-center 2xl:w-full lg:w-full md:justify-center md:items-center sm:justify-center sm:items-center md:w-full  "
        >
          {filteredPropiedades.map((prop) => (
            <div
              key={prop.id}
              onClick={() => {
                setSelectedProp(prop);
                onOpen();
              }}
              class="bg-white h-[523px] w-[360px] xl:w-full md:w-full bg-card text-card-foreground flex flex-col gap-3 py-6 rounded-xl border shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group 2xl:w-full lg:w-full sm:w-full "
            >
              <div class="flex gap-6 flex-col md:gap-3 ">
                <div class="relative overflow-hidden h-40 bg-muted">
                  <span class="absolute py-0.1 left-70 top-1 inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-primary/90 bg-white/90 z-10 text-foreground md:left-3 sm:left-3 2xl:left-3 lg:left-3 xl:left-3">
                    {prop.estado}
                  </span>
                  <img
                    class="sm:w-full object-cover group-hover:scale-105 transition-transform duration-300 z-0  h-[192px] w-[382px] inset-0 text-transparent sm:h-full "
                    src="/public/img/fondo.png"
                    alt="Esperando una foto"
                  />
                </div>
                <div class="p-[16px] flex flex-col gap-6 ">
                  <div class="flex gap-6 items-center justify-between ">
                    <h1 class="text-[15px] px-[0px] w-fit ">{prop.titulo}</h1>
                    <span
                      class="inline-flex items-center text-[10px] px-[5px] w-fit justify-center rounded-md py-1.5 text-xs text-black bg-yellow-100 "
                      // style={{ minWidth: "100px" }}
                    >
                      {prop.tipo === "TERRENO_AGRICOLA" && (
                        <span class="text-[11px] xl:text-[10px] w-fit">
                          Terreno agrícola
                        </span>
                      )}
                      {prop.tipo === "TERRENO_URBANO" && (
                        <span class="text-[11px] xl:text-[10px]">
                          Terreno urbano
                        </span>
                      )}
                      {prop.tipo === "LOTIZACIÓN" && (
                        <span class="text-[11px]"> Lotización</span>
                      )}
                    </span>
                  </div>
                  <div>
                    <p class="text-sm">
                      {prop.descripcion.length > 92
                        ? prop.descripcion.substring(0, 92) + "..."
                        : prop.descripcion}
                    </p>
                  </div>
                  <div class="flex gap-6 flex-col">
                    <div class="flex gap-6">
                      <img
                        class="w-5 text-xs"
                        src="/public/img/MapPin.svg"
                        alt=""
                      />
                      <p>{prop.direccion}</p>
                    </div>
                    <div class="flex gap-6">
                      <img
                        class="w-5 text-xs"
                        src="/public/img/Arrow-Arrow-expand.svg"
                        alt=""
                      />
                      <p class="">{prop.metrosCuadrados} m²</p>
                    </div>
                  </div>
                </div>
                <div class="flex gap-6 px-4 pb-4">
                  <svg
                    class="text-amber-950 "
                    viewbox="0 0 32 32"
                    width="32"
                    height="32"
                    stroke="currentColor"
                    fill="brown"
                  >
                    <path d="M8 21.6c0.3 3.3 3 5.7 7.2 6V30h2.1v-2.4c4.5-0.4 7.4-2.9 7.3-6.6 0-3.2-1.9-5-5.9-6.1l-1.4-0.4V6.9c2.2 0.2 3.8 1.4 4.1 3.3h2.9c-0.3-3.2-3.1-5.5-7-5.8V2H15.2v2.5c-3.9 0.5-6.5 2.9-6.6 6.3 0 2.9 1.9 5 5.4 5.8l1.2 0.3v8.1c-2.3-0.3-3.9-1.6-4.3-3.4H8z m6.8-7.7c-2.1-0.5-3.2-1.6-3.2-3.2 0-1.9 1.4-3.3 3.6-3.7v7l-0.4-0.1z m3.2 3.7c2.6 0.6 3.7 1.7 3.7 3.6 0 2.2-1.7 3.7-4.4 3.8V17.5l0.7 0.1z" />
                  </svg>
                  <p class="text-2xl text-amber-950 font-bold">{prop.precio}</p>
                </div>
              </div>
            </div>
          ))}
        </Button>
        <Modal
          onClose={onClose}
          isOpen={isOpen}
          class="w-[460px] h-[250px] p-[20px]"
          finalFocusRef={btnRef}
          scrollBehavior={scrollBehavior}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            {/* {selectedProp && (
            <ModalHeader class='py-[10px] px-[20px] text-[24px]'>{selectedProp.titulo}</ModalHeader>
            )} */}
            {/* <ModalCloseButton /> */}
            <ModalBody>
              {selectedProp && (
                <div
                  key={selectedProp.id}
                  class="bg-white h-[523px] w-[360px] xl:w-full md:w-full bg-card
                    text-card-foreground flex flex-col gap-3 cursor-pointer" >
                    {/* rounded-xl border shadow-sm overflow-hidden hover:shadow-lg transition-shadow  */}
                  <div>
                    <ModalCloseButton />
                    <ModalHeader class="p-[15px] text-[24px]">
                      {selectedProp.titulo}
                    </ModalHeader>
                  </div>
                  <div class="flex gap-6 flex-col md:gap-3 ">
                    {/* relative overflow-hidden */}
                    <div class=" h-full bg-muted">
                      <img
                        class="w-full h-full object-cover"
                        src="/public/img/fondo.png"
                        alt="Imagen"
                      />
                    </div>

                    <div class="p-[16px] flex flex-col gap-6">
                      <div class="flex gap-2 items-center">
                        <span class="text-[10px] bg-yellow-100 px-2 py-1 rounded">
                          {selectedProp.estado}
                        </span>

                        <span class="text-[10px] bg-yellow-100 px-2 py-1 rounded">
                          {selectedProp.tipo === "TERRENO_AGRICOLA" &&
                            "Terreno agrícola"}
                          {selectedProp.tipo === "TERRENO_URBANO" &&
                            "Terreno urbano"}
                          {selectedProp.tipo === "LOTIZACIÓN" && "Lotización"}
                        </span>
                      </div>
                      <div class="grid grid-cols-2 gap-[15px]">
                        <div class="flex gap-2 items-start">
                          <p class='text-[20px] items-start text-amber-950 '>$</p>
                          <div class="flex flex-col">
                            <p class='text-[15px] text-zinc-400'>precio</p>
                            <p>{selectedProp.precio}</p>
                          </div>
                        </div>
                        <div class="flex gap-2 items-start">
                          <p class='text-[20px] items-start text-amber-950'> 
                            <img src="/public/img/rule.svg" alt="rule" /> 
                          </p>
                          <div class="flex flex-col">
                            <p class='text-[15px] text-zinc-400'>Área</p>
                            <p>{selectedProp.metrosCuadrados} m²</p>
                          </div>
                        </div>
                        <div class="flex gap-2 items-start">
                          <p class='text-[20px] items-start text-amber-950'>$</p>
                          <div class="flex flex-col">
                            <p class='text-[15px] text-zinc-400'>Ubicación</p>
                            <p>{selectedProp.direccion}</p>
                          </div>
                        </div>
                        <div class="flex gap-2 items-start">
                          <p class='text-[20px] items-start text-amber-950'>$</p>
                          <div class="flex flex-col">
                            <p class='text-[15px] text-zinc-400'>Publicado</p>
                            <p class='text-red-800'>Invalid Date</p>
                          </div>
                        </div>
                      </div>

                      <p class="text-sm">{selectedProp.descripcion}</p>

                      <div class="flex flex-col gap-3">
                        <div class="flex gap-2">
                          <img class="w-5" src="/public/img/MapPin.svg" />
                          <p>{selectedProp.direccion}</p>
                        </div>

                        <div class="flex gap-2">
                          <img
                            class="w-5"
                            src="/public/img/Arrow-Arrow-expand.svg"
                          />
                          <p>{selectedProp.metrosCuadrados} m²</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2 px-4 pb-4 items-center">
                      <svg
                        class="text-amber-950"
                        width="32"
                        height="32"
                        fill="brown"
                        viewBox="0 0 32 32"
                      >
                        <path d="M8 21.6c0.3..." />
                      </svg>
                      <p class="text-2xl text-amber-950 font-bold">
                        {selectedProp.precio}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalBody>
            {/* <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter> */}
          </ModalContent>
        </Modal>

        <div class="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => {
              setPage((p) => {
                const newPage = Math.max(p - 1, 0);
                window.scrollTo({ top: 70, behavior: "instant" });
                return newPage;
              });
            }}
            disabled={page === 0}
            class="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Anterior
          </button>

          <span>
            Página {page + 1} de {totalPages}
          </span>

          <button
            onClick={() => {
              setPage((p) => {
                const newPage = Math.min(p + 1, totalPages - 1);
                window.scrollTo({ top: 70, behavior: "instant" });
                return newPage;
              });
            }}
            disabled={page + 1 >= totalPages}
            class="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </section>
    </div>
  );
};

export default Terreno;

// import { useEffect, useState, useCallback } from "react";
// import axios from "axios";

// const Terreno = () => {
//   const [propiedades, setPropiedades] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(0);
//   const [size, setSize] = useState(6);
//   const [direction, setDirection] = useState("asc");
//   const [totalPages, setTotalPages] = useState(0);
//   // const [tipo, setTipo] = useState("TERRENO AGRICOLA"||"TERRENO URBANO"||"LOTIZACIÓN");

//   console.log(setSize, setDirection);

//   // Filtros
//   // const [tipo, setTipo] = useState("");
//   // const [estado, setEstado] = useState("");
//   // const [precioMin, setPrecioMin] = useState("");
//   // const [precioMax, setPrecioMax] = useState("");
//   // const [areaMin, setAreaMin] = useState("");
//   // const [areaMax, setAreaMax] = useState("");
//   // const [distrito, setDistrito] = useState("");

//   const cargarPropiedadesPage = useCallback(async () => {
//     try {
//       setLoading(true);

//       const response = await axios.get(
//         "http://localhost:8080/api/propiedades/paginadas",
//         {
//           params: {
//             page,
//             size,
//             sortBy: "precio",
//             direction,
//             // tipo:"Tipo",
//             // estado,
//             // precioMin,
//             // precioMax,
//             // areaMin,
//             // areaMax,
//             // distrito,
//           },
//         }
//       );

//       setPropiedades(response.data.content || []);
//       setTotalPages(response.data.totalPages || 1);
//     } catch (error) {
//       console.error("❌ Error al listar propiedades:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, [page, size, direction]); // , tipo, estado, precioMin, precioMax, areaMin, areaMax, distrito
//   useEffect(() => {
//     cargarPropiedadesPage();
//   }, [cargarPropiedadesPage]);

//   if (loading)
//     return <p className="text-center p-8">Cargando propiedades...</p>;

//   return (
//     <div class="grid gap-6 bg-[#FEF7F2] 2xl:w-full 2xl:grid-cols-[280px_1fr] 2xl:gap-6 xl:grid-cols-[280px_1fr] xl:px-0 lg:px-0  2xl:px-0 lg:grid-cols-[280px_1fr] md:grid-cols-1 sm:grid-cols-1  lg:w-full lg:px-auto justify-center items-center md:w-full">
//       {/*
//        sticky space-y-4 bg-card rounded-lg border md:px-0 sm:px-0 2xl:px-0 xl:px-0 w-full lg:px-0*/}
//       <section class="w-full lg:sticky top-4 self-start h-fit bg-white p-0 rounded-lg shadow-md">
//         <div class=" w-full md:w-[100%] sm:w-[100%] xs:w-[100%] 2xl:w-[280px] lg:w-[280px] bg-white rounded-xl border p-4 shadow-sm overflow-hidden hover:shadow-lg transition-shadow flex flex-col gad-4 ">
//           <div class="pb-4 text-lg">
//             <h1>Filtros</h1>
//           </div>
//           <div class="pb-4">
//             <label for="opciones">Tipo de Terreno </label>
//             <div class="pt-2">
//               <select
//                 id="opciones"
//                 class="rounded-sm w-20 flex justify-center h-6 gap-1 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input  min-w-0 border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium "
//               >
//                 <option value="">
//                   Todos
//                   <svg
//                     class="w-4"
//                     data-slot="icon"
//                     fill="none"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                     aria-hidden="true"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="m19.5 8.25-7.5 7.5-7.5-7.5"
//                     ></path>
//                   </svg>
//                 </option>
//                 <option value="opcion1">Residencia</option>
//                 <option value="opcion2">Comercial</option>
//                 <option value="opcion3">Agricola</option>
//               </select>
//             </div>
//           </div>
//           <div class="pb-4">
//             <label for="opciones">Estados </label>
//             <div class="pt-2">
//               <button type="button">
//                 <select
//                   id="opciones"
//                   class="rounded-sm w-20 flex justify-center h-6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input  min-w-0 border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium "
//                 >
//                   <option value="" class="p-2">
//                     Todos
//                     <svg
//                       class="w-4"
//                       data-slot="icon"
//                       fill="none"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                       aria-hidden="true"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="m19.5 8.25-7.5 7.5-7.5-7.5"
//                       ></path>
//                     </svg>
//                   </option>
//                   <option value="opcion1">Disponible</option>
//                   <option value="opcion2">Reservado</option>
//                   <option value="opcion3">Vendido</option>
//                 </select>
//               </button>
//             </div>
//           </div>
//           <div class="pb-4">
//             <label htmlFor="">Rango</label> <br />
//             <div class="grid grid-cols-2 gap-2 pt-2 ">
//               <input
//                 class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#8a3a13] focus-visible:ring-[#8a3a13]/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 h-9 text-base"
//                 type="number"
//                 placeholder="  Minimo"
//               />
//               <input
//                 class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#8a3a13] focus-visible:ring-[#8a3a13]/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 h-9 text-base"
//                 type="number"
//                 placeholder="  Maximo"
//               />
//             </div>
//           </div>

//           <div class="pb-4">
//             <label htmlFor="areaMax">Área (m²)</label> <br />
//             <div class="grid grid-cols-2 gap-2 pt-2">
//               <input
//                 id="areaMax"
//                 class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#8a3a13] focus-visible:ring-[#8a3a13]/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 h-9 text-base"
//                 type="number"
//                 placeholder="  Minimo"
//               />
//               <input
//                 id="areaMax"
//                 class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#8a3a13] focus-visible:ring-[#8a3a13]/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 h-9 text-base"
//                 type="number"
//                 placeholder="  Maximo"
//               />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="">Distrito</label>
//             <div class="pt-2">
//               <input
//                 class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#8a3a13] focus-visible:ring-[#8a3a13]/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 h-9 text-base"
//                 type="text"
//                 name=""
//                 id=""
//                 placeholder="   Todos"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section
//         id="terrenosUp"
//         class="sm:px-0 xl:gap-6 2xl:gap-5 md:px-0 2xl:w-full"
//       >
//         <p class="w-full pb-5">{propiedades.length} terrenos encontrados</p>

//         <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:gap-6 gap-6 2xl:grid-cols-3 xl:grid-cols-3 2xl:gap-6 lg:grid-cols-2 lg:gap-6 md:gap-6 justify-center 2xl:w-full lg:w-full md:justify-center md:items-center sm:justify-center sm:items-center md:w-full  ">
//           {propiedades.map((prop) => (
//             <div
//               key={prop.id}
//               class="bg-white h-[523px] w-[360px] xl:w-full md:w-full bg-card text-card-foreground flex flex-col gap-3 py-6 rounded-xl border shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group 2xl:w-full lg:w-full sm:w-full "
//             >
//               <div className="flex gap-6 flex-col md:gap-3 ">
//                 <div className="relative overflow-hidden h-40 bg-muted">
//                   {" "}
//                   {/**/}
//                   <span className="absolute py-0.1 left-70 top-1 inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-primary/90 bg-white/90 z-10 text-foreground md:left-3 sm:left-3 2xl:left-3 lg:left-3 xl:left-3">
//                     {prop.estado}
//                   </span>
//                   <img
//                     class="sm:w-full object-cover group-hover:scale-105 transition-transform duration-300 z-0  h-[192px] w-[382px] inset-0 text-transparent sm:h-full "
//                     src="/public/img/fondo.png"
//                     alt="Esperando una foto"
//                   />
//                 </div>
//                 <div class="p-[16px] flex flex-col gap-6 ">
//                   <div class="flex gap-6 items-center justify-between ">
//                     <h1 class="text-[15px] px-[0px] w-fit ">{prop.titulo}</h1>
//                     <span
//                       class="inline-flex items-center text-[10px] px-[5px] w-fit justify-center rounded-md py-1.5 text-xs text-black bg-yellow-100 "
//                       // style={{ minWidth: "100px" }}
//                     >
//                       {prop.tipo === "TERRENO_AGRICOLA" && (
//                         <span class="text-[11px] xl:text-[10px] w-fit">
//                           Terreno agrícola
//                         </span>
//                       )}
//                       {prop.tipo === "TERRENO_URBANO" && (
//                         <span class="text-[11px] xl:text-[10px]">
//                           Terreno urbano
//                         </span>
//                       )}
//                       {prop.tipo === "LOTIZACIÓN" && (
//                         <span class="text-[11px]"> Lotización</span>
//                       )}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="text-sm">
//                       {prop.descripcion.length > 92
//                         ? prop.descripcion.substring(0, 92) + "..."
//                         : prop.descripcion}
//                     </p>
//                   </div>
//                   <div className="flex gap-6 flex-col">
//                     <div className="flex gap-6">
//                       <img
//                         className="w-5 text-xs"
//                         src="/public/img/MapPin.svg"
//                         alt=""
//                       />
//                       <p>{prop.direccion}</p>
//                     </div>
//                     <div className="flex gap-6">
//                       <img
//                         className="w-5 text-xs"
//                         src="/public/img/Arrow-Arrow-expand.svg"
//                         alt=""
//                       />
//                       <p className="">{prop.metrosCuadrados} m²</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex gap-6 px-4 pb-4">
//                   <svg
//                     className="text-amber-950 "
//                     viewbox="0 0 32 32"
//                     width="32"
//                     height="32"
//                     stroke="currentColor"
//                     fill="brown"
//                   >
//                     <path d="M8 21.6c0.3 3.3 3 5.7 7.2 6V30h2.1v-2.4c4.5-0.4 7.4-2.9 7.3-6.6 0-3.2-1.9-5-5.9-6.1l-1.4-0.4V6.9c2.2 0.2 3.8 1.4 4.1 3.3h2.9c-0.3-3.2-3.1-5.5-7-5.8V2H15.2v2.5c-3.9 0.5-6.5 2.9-6.6 6.3 0 2.9 1.9 5 5.4 5.8l1.2 0.3v8.1c-2.3-0.3-3.9-1.6-4.3-3.4H8z m6.8-7.7c-2.1-0.5-3.2-1.6-3.2-3.2 0-1.9 1.4-3.3 3.6-3.7v7l-0.4-0.1z m3.2 3.7c2.6 0.6 3.7 1.7 3.7 3.6 0 2.2-1.7 3.7-4.4 3.8V17.5l0.7 0.1z" />
//                   </svg>
//                   <p className="text-2xl text-amber-950 font-bold">
//                     {prop.precio}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center items-center gap-4 mt-6">
//           <button
//             onClick={() => {
//               setPage((p) => {
//                 const newPage = Math.max(p - 1, 0);
//                 window.scrollTo({ top: 70, behavior: "instant" }); // 👈 vuelve al inicio
//                 return newPage;
//               });
//             }}
//             disabled={page === 0}
//             className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
//           >
//             Anterior
//           </button>

//           <span>
//             Página {page + 1} de {totalPages}
//           </span>

//           <button
//             onClick={() => {
//               setPage((p) => {
//                 const newPage = Math.min(p + 1, totalPages - 1);
//                 window.scrollTo({ top: 70, behavior: "instant" });
//                 return newPage;
//               });
//             }}
//             disabled={page + 1 >= totalPages}
//             className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
//           >
//             Siguiente
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Terreno;
