import { useEffect,useState } from "react";
import { listarPropiedades } from "../Services/ApiServices";

const Terreno = () => {
  const [propiedades, setPropiedades] = useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    async function cargarPropiedades() {
      try{
        const datos=await listarPropiedades()
        setPropiedades(datos);      
        console.log("pro",datos)
      }catch(error){
        console.error(error)
      }
      finally{
        setLoading(false)
      }
    }
    cargarPropiedades()
  }, []);

  if(loading) return <p>Cargando Propiedades.... </p>


  return (
    <div class="grid gap-6 bg-[#FEF7F2] 2xl:w-[1440px] 2xl:grid-cols-[280px_1fr] 2xl:gap-6 xl:grid-cols-[280px_1fr] xl:px-0 lg:px-0  2xl:px-0 lg:grid-cols-[280px_1fr] md:grid-cols-1 sm:grid-cols-1 sm:px-5 md:w-[740px] sm:w-[590px] lg:w-full">
      <section class="sticky space-y-4 bg-card rounded-lg border md:px-0 sm:px-0 2xl:px-0 xl:px-0 w-full lg:px-0">
        <div class=" w-full md:w-[100%] sm:w-[100%] xs:w-[100%] 2xl:w-[280px] lg:w-[280px] bg-white rounded-xl border p-4 shadow-sm overflow-hidden hover:shadow-lg transition-shadow flex flex-col gad-4 ">
          <div class="pb-4 text-lg">
            <h1>Filtros</h1>
          </div>
          <div class="pb-4">
            <label for="opciones">Tipo de Terreno </label>
            <div class="pt-2">
              <select
                id="opciones"
                class="rounded-sm w-20 flex justify-center h-6 gap-1 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input  min-w-0 border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium "
              >
                <option value="">
                  Todos
                  <svg
                    class="w-4"
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </option>
                <option value="opcion1">Residencia</option>
                <option value="opcion2">Comercial</option>
                <option value="opcion3">Agricola</option>
              </select>
            </div>

            {/* <label htmlFor="">Tipo de Terreno</label>
            <div class="pt-2">
              <button id='btnTerreno' class=" rounded-sm w-20 flex justify-center gap-1.5 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input  min-w-0 border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium" type="button">
                Todos
                <svg class='w-4' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" ></path>
                </svg>
              </button>
            </div> */}
          </div>
          <div class="pb-4">
            <label for="opciones">Estados </label>
            <div class="pt-2">
              <button type="button">
                <select
                  id="opciones"
                  class="rounded-sm w-20 flex justify-center h-6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input  min-w-0 border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium "
                >
                  <option value="" class="p-2">
                    Todos
                    <svg
                      class="w-4"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      ></path>
                    </svg>
                  </option>
                  <option value="opcion1">Disponible</option>
                  <option value="opcion2">Reservado</option>
                  <option value="opcion3">Vendido</option>
                </select>
              </button>
            </div>
            {/* <label htmlFor="">Estados</label>
            <div class="pt-2">
              <button
                class="rounded-sm w-20 flex justify-center gap-1.5 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input  min-w-0 border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium"
                type="button"
              >
                Todos
                <svg
                  class="w-4"
                  data-slot="icon"
                  fill="none"
                  stroke-width="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </button>
            </div> */}
          </div>
          <div class="pb-4">
            <label htmlFor="">rango</label> <br />
            <div class="grid grid-cols-2 gap-2 pt-2 ">
              <input
                class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#8a3a13] focus-visible:ring-[#8a3a13]/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 h-9 text-base"
                type="number"
                placeholder="  Maximo"
              />
              <input
                class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#8a3a13] focus-visible:ring-[#8a3a13]/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 h-9 text-base"
                type="number"
                placeholder="  Minimo"
              />
            </div>
          </div>

          <div class="pb-4">
            <label htmlFor="areaMax">Área (m²)</label> <br />
            <div class="grid grid-cols-2 gap-2 pt-2">
              <input
                id="areaMax"
                class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#8a3a13] focus-visible:ring-[#8a3a13]/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 h-9 text-base"
                type="number"
                placeholder="  Maximo"
              />
              <input
                id="areaMax"
                class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#8a3a13] focus-visible:ring-[#8a3a13]/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 h-9 text-base"
                type="number"
                placeholder="  Minimo"
              />
            </div>
          </div>
          <div>
            <label htmlFor="">Distrito</label>
            <div class="pt-2">
              <input
                class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#8a3a13] focus-visible:ring-[#8a3a13]/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 h-9 text-base"
                type="text"
                name=""
                id=""
                placeholder="   Todos"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="sm:px-0 xl:gap-6 2xl:gap-5 md:px-0 ">
        <p class="w-full pb-5">{propiedades.length} terrenos encontrados</p>
        
        <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:gap-6 gap-6 2xl:grid-cols-3 xl:grid-cols-3 2xl:gap-6 lg:grid-cols-2 lg:gap-6 md:gap-6 justify-center ">
          {propiedades.map((prop) => (
            <div
              key={prop.id}
              class="bg-white h-[523px] w-[360px] 2xl:w-[365px] xl:w-[300px] lg:w-[330px]  md:w-[340px] bg-card text-card-foreground flex flex-col gap-3 py-6 rounded-xl border shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group sm:w-[100%]"
            >
              <div className="flex gap-6 flex-col md:gap-3">
                <div className="relative overflow-hidden h-40 bg-muted">
                  {" "}
                  {/**/}
                  <span className="absolute py-0.1 left-70 top-1 inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-primary/90 bg-white/90 z-10 text-foreground md:left-3 sm:left-3 2xl:left-3 lg:left-3 xl:left-3">
                    {prop.estado}
                  </span>
                  <img
                    class="sm:w-full object-cover group-hover:scale-105 transition-transform duration-300 z-0  h-[192px] w-[382px] inset-0 text-transparent"
                    src="/public/img/fondo.png"
                    alt="Esperando una foto"
                  />
                </div>
                <div class="p-[16px] flex flex-col gap-6">
                  <div class="flex gap-4 items-center justify-between ">
                    <h3 class="text-[64px] px-[5px] w-[245px]">{prop.titulo}</h3>
                    <span class="inline-flex items-center text-[10px] px-[5px]  justify-center rounded-md py-0.5 text-xs text-black bg-yellow-200 "
                        // style={{ minWidth: "100px" }}
                        >
                      {prop.tipo}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm">
                      {prop.descripcion.length > 92
                        ? prop.descripcion.substring(0, 92) + "..."
                        : prop.descripcion}
                    </p>
                  </div>
                  <div className="flex gap-6 flex-col">
                    <div className="flex gap-6">
                      <img
                        className="w-5 text-xs"
                        src="/public/img/MapPin.svg"
                        alt=""
                      />
                      <p>{prop.direccion}</p>
                    </div>
                    <div className="flex gap-6">
                      <img
                        className="w-5 text-xs"
                        src="/public/img/Arrow-Arrow-expand.svg"
                        alt=""
                      />
                      <p className="">{prop.metrosCuadrados} m²</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 px-4 pb-4">
                  <svg
                    className="text-amber-950 "
                    viewbox="0 0 32 32"
                    width="32"
                    height="32"
                    stroke="currentColor"
                    fill="brown"
                  >
                    <path d="M8 21.6c0.3 3.3 3 5.7 7.2 6V30h2.1v-2.4c4.5-0.4 7.4-2.9 7.3-6.6 0-3.2-1.9-5-5.9-6.1l-1.4-0.4V6.9c2.2 0.2 3.8 1.4 4.1 3.3h2.9c-0.3-3.2-3.1-5.5-7-5.8V2H15.2v2.5c-3.9 0.5-6.5 2.9-6.6 6.3 0 2.9 1.9 5 5.4 5.8l1.2 0.3v8.1c-2.3-0.3-3.9-1.6-4.3-3.4H8z m6.8-7.7c-2.1-0.5-3.2-1.6-3.2-3.2 0-1.9 1.4-3.3 3.6-3.7v7l-0.4-0.1z m3.2 3.7c2.6 0.6 3.7 1.7 3.7 3.6 0 2.2-1.7 3.7-4.4 3.8V17.5l0.7 0.1z" />
                  </svg>
                  <p className="text-2xl text-amber-950 font-bold">
                    {prop.precio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Terreno


