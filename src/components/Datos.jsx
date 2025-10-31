import React from 'react'

const Datos = () => {
 
  const ApiList='http://localhost:8080/api/propiedades/listar'
  fetch(ApiList)
    .then((response) => response.json())
    .then((data) => console.log(data))
    // .catch((error) => console.error('Error fetching data:', error));
  
  return (
    

    <div class='flex gap-6 flex-col md:gap-3'>
      <div class='relative overflow-hidden h-40 bg-muted'>
        <span class='absolute py-0.1 left-70 top-1 inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-primary/90 bg-white/90 z-10 text-foreground md:left-3 sm:left-3 2xl:left-3 lg:left-3 xl:left-3'>Disponible</span>
        <img class='sm:w-full object-cover group-hover:scale-105 transition-transform duration-300 z-0  h-[192px] w-[382px] inset-0 text-transparent' src="/public/img/fondo.png" alt="" />
      </div>
      <div class='p-[16px] flex flex-col gap-6'>
         <div class='flex gap-2 items-start justify-between'>
          <h3 class='text-[64px]'>Terreno Residencial en San Blas</h3>
          <span class='py-0.3 inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground :hover:text-accent-foreground shrink-0'>Residencial</span>
         </div>
         <div>
          <p class=' text-sm'>Hermoso terreno ubicado en el tradicional barrio de San Blas, con vista panorámica de la ciudad de.</p>
         </div>
         <div class='flex gap-6 flex-col'>
          <div class='flex gap-6'>
            <img class='w-5 text-xs' src="/public/img/MapPin.svg" alt="" />
            <p>Calle Tandapata 450, San Blas</p>
          </div>
          <div class='flex gap-6'>
            <img class='w-3 text-xs' src="/public/img/arrow.png" alt="" />
            <p class=''>350 m²</p>
          </div>
         </div>
         
      </div>
      <div class='flex gap-6 px-4 pb-4'>
          <svg  class='text-amber-950 ' viewbox="0 0 32 32" width="32" height="32" stroke="currentColor" fill="brown"><path d="M8 21.6c0.3 3.3 3 5.7 7.2 6V30h2.1v-2.4c4.5-0.4 7.4-2.9 7.3-6.6 0-3.2-1.9-5-5.9-6.1l-1.4-0.4V6.9c2.2 0.2 3.8 1.4 4.1 3.3h2.9c-0.3-3.2-3.1-5.5-7-5.8V2H15.2v2.5c-3.9 0.5-6.5 2.9-6.6 6.3 0 2.9 1.9 5 5.4 5.8l1.2 0.3v8.1c-2.3-0.3-3.9-1.6-4.3-3.4H8z m6.8-7.7c-2.1-0.5-3.2-1.6-3.2-3.2 0-1.9 1.4-3.3 3.6-3.7v7l-0.4-0.1z m3.2 3.7c2.6 0.6 3.7 1.7 3.7 3.6 0 2.2-1.7 3.7-4.4 3.8V17.5l0.7 0.1z"  /></svg>
          <p class='text-2xl text-amber-950 font-bold'>USD 250,000</p>
         </div>
    </div>
  )
}

export default Datos
