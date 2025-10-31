
import Datos from './Datos'

const Terreno = () => {

    // const terreno=document.getElementById('btnTerreno');
    // terreno.addEventListener('click',()=>{
    //   console.log('click');
    //   terreno.innerHTML=`<li>hola</li>`
    // })

  // flex gap-6 w-full justify-center
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
                class="rounded-sm w-20 flex justify-center h-6 gap-1 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input  min-w-0 border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium ">
                <option value="" >Todos
                    <svg class='w-4' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" ></path>
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
              <button type='button'>
                <select
                id="opciones"
                class="rounded-sm w-20 flex justify-center h-6 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input  min-w-0 border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium ">
                <option value="" class="p-2">
                    Todos
                    <svg class='w-4' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" ></path>
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
        <p class="w-full pb-5">6 terrenos encontrados</p>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:gap-6 gap-6 2xl:grid-cols-3 xl:grid-cols-3 2xl:gap-6 lg:grid-cols-2 lg:gap-6 md:gap-6 justify-center ">
          <div class="bg-white h-[523px] w-[360px] 2xl:w-[365px] xl:w-[300px] lg:w-[330px]  md:w-[340px] bg-card text-card-foreground flex flex-col gap-3 py-6 rounded-xl border shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group sm:w-[100%]">
            <Datos />
          </div>
          <div class="bg-white h-[523px]  w-[360px] 2xl:w-[365px] xl:w-[300px] lg:w-[330px] md:w-[340px]  bg-card text-card-foreground flex flex-col gap-3 py-6 rounded-xl border  shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group sm:w-[100%]">
            <Datos />
          </div>
          <div class="bg-white h-[523px]  w-[360px] 2xl:w-[365px] xl:w-[300px] lg:w-[330px]  md:w-[340px] sm:w-[100%] bg-card text-card-foreground flex flex-col gap-3 py-6 rounded-xl border  shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
            <Datos />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terreno

//   </section>
//       <section id="Nosotros" class="bg-blue-400  h-full text-4xl p-5">
//         <h2 class='text-center p-5 '>Nosotros</h2>
//         <div class='flex p-10 justify-center items-center gap-10'>
//             <img src="/public/img/depa.png" alt="" class='w-100 text-center' />
//             <p class='p-2 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia libero voluptatibus voluptate nostrum recusandae! Laboriosam provident tempore ullam recusandae ex temporibus repudiandae hic sit, accusamus rem, quis necessitatibus exercitationem nobis! </p>
//         </div>
//       </section>
//       <footer id="Contacto" class="w-full h-full bg-green-300 text-4xl">
//         <h2 class='text-center p-5'>Contacto</h2>
//         <div class='flex flex-col p-10 text-base'>
//             <a href="">youtube</a>
//             <a href="">Instagram</a>
//             <a href="">Web</a>
//             <a href="">Facebook</a>

//         </div>
//       </footer>
//       <div class='h-6 bg-blue-900 text-center'>
//         <p class='text-gray'>
//             Desarrollado por: Kenyo D. Saenz - saenzkenyo@gmail.com
//         </p>
//       </div>
