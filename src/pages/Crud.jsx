import React from "react";
import Navbar from "../components/Navbar";
import BtnAgregar from "../components/BtnAgregar";
import BtnActualizar from "../components/BtnActualizar";
import BtnSalir from "../components/BtnSalir";

const Crud = () => {
  return (
    <div class="flex flex-col gap-6">
      <BtnSalir />
      <main class="container mx-auto px-6 py-8 bg-[#FEF7F2]">
        <div class="flex items-center justify-between mb-[24px] border-b border-red-200">
          <div class="w-[1504px] h-[44px]">
            <h1 class="text-3xl font-bold ">
              Página de Administración de Terrenos
            </h1>
            <p class="text-gray-400 text-sm">
              {" "}
              Gestiona todos los terrenos disponibles
            </p>
          </div>
          {/* <button class='text-white cursor-pointer w-[180px] gap-1 inline-flex items-center justify-center bg-[#952C00] px-2 py-1 rounded-sm '> <span class='w-0.2 bg-[#952C00] '> + </span>  Agregar   terreno
                    </ button> */}
          {/* 
                    <button class='inline-flex items-center w-[180px] justify-center bg-[#952C00] px-1 py-2 rounded-md text-white hover:bg-[#7a2200] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#952C00] cursor-pointer '>
                        <span class='bg-[#952C00] mx2 my-3'>+ Agregar terreno</span>
                    </button> */}

          <span class="inline-flex items-center w-[190px] px-1 py-1 justify-center bg-[#952C00] rounded-md text-white hover:bg-[#7a2200] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#952C00] cursor-pointer    ">
            <button class="flex items-center gap-2 content-center justify-center">
              <BtnAgregar />
            </button>
          </span>
        </div>
        <div>
          <table class="w-full caption-bottom text-sm border-collapse md:border-separate md:rounded-lg overflow-hidden ">
            <thead>
              <tr class="text-foreground px-2 text-center align-middle     font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&> [role=checkbox]] :translate-y-[2px] h-[40px] bg-[#dac6be]">
                <th class="w-[304px] border border-gray-300 ">Titulo</th>
                <th class="w-[228px] border border-gray-300 ">Ubicacion</th>
                <th class="w-[151px] border border-gray-300">Tipo</th>
                <th class="w-[111px] border border-gray-300">Área</th>
                <th class="w-[160px] border border-gray-300">Precio</th>
                <th class="w-[144px] border border-gray-300">Estado</th>
                <th class="w-[146px] border border-gray-300">Acciones</th>
              </tr>
            </thead>
            <tbody class="[&_tr:last-child]:border-0 ">
              <tr class="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                <td class="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] font-medium max-w-[200px] truncate ">
                  Terreno Residencial en San Blas
                </td>
                <td class="flex justify-center p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  Calle Tandapata 450, San Blas
                </td>
                <td class=" p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  Residencial
                </td>
                <td class="flex justify-center p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  350 m²
                </td>
                <td class=" p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  USD 250,000
                </td>
                <td class="flex justify-center p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <span class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90 bg-[#952C00] text-white">
                    Disponible
                  </span>
                </td>
                {/* flex justify-end gap-2*/}
                <td class=" p-2 align-middle whitespace-nowrap items-center  ">
                  <div class="flex justify-center flex-row gap-5 items-center">
                    <BtnActualizar />
                    {/* <button class="bg-blue-500 text-white px-2 py-1 rounded-sm hoverz:bg- transition-colors duration-200">
                    <svg
                      data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"class="w-5 h-5">
                      <path
                        stroke-linecap="round"stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      ></path>
                    </svg>
                  </button> */}
                    <button class="bg-red-500 text-white px-2 py-1 rounded-sm hoverz:bg- transition-colors duration-200 ">
                      <svg
                        data-slot="icon"
                        fill="none"
                        stroke-width="1.5"
                        stroke="red"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Crud;
