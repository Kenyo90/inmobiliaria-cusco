import Navbar from "../components/Navbar";
import Terreno from "../components/Terreno";
import { usePropiedadesFilter } from "../hooks/usePropiedadesFilter";

const Inicio = () => {
  const { filters, updateFilter } = usePropiedadesFilter([]);
  // bg-[url(/public/img/fondo.png)] bg-cover bg-center bg-no-repeat h-fit
  return (
    <div class="m-0 box-border text-base h-[100vw] bg-[#FEF7F2] ">
      <header class="justify-center flex items-center w-full 2xl:w-full xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%]">
        <Navbar />
      </header>
      <main id="Propiedades" class="flex justify-center bg-[#FEF7F2]">
        <section class=" py-[32px] max-w-[1468px] h-[100%] bg-[#FEF7F2] my-auto flex justify-center flex-col xl:px-[64px] xl:mx-[20px] lg:px-[16px] lg:mx-[20px] 2xl:w-full 2xl:justify-center md:px-[35px] md:mx-[35px] md:items-center sm:px-[35px] sm:mx-[35px] 2xl:mx-auto">
          <div class="max-w-[100%] w-[400px] mx-auto max-h-[48px] flex justify-center py-1 mb-10 items-center 2xl:px-0  xl:w-[100%] xl:px-0 md:px-0 md:w-[100%] lg:w-full bg-[#FEF7F2] lg:px-0 2xl:w-full  sm:w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-[#8a3a13] mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Buscar por ubicación, distrito o características..."
              value={filters.busqueda}
              onChange={(e) => updateFilter("busqueda", e.target.value)}
              class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#8a3a13] focus-visible:ring-[#8a3a13]/50 focus-visible:ring-[5px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 h-10 text-base"
            />
          </div>
          <Terreno />
        </section>
      </main>
    </div>
  );
};

export default Inicio;
