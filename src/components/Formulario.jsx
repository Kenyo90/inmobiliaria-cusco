import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react'

const Formulario = () => {
  return (
    <div class='w-full bg-[#8a3a13] p-[25px]'>
      <p class="text-center pb-[25px] text-white font-extrabold font-mono text-[25px]">FORMULARIO</p>
      <FormControl isRequired>
        <div class='flex flex-row gap-4 mb-4'>
          <div class="w-full text-white">
            <FormLabel>Nombre</FormLabel>
            <Input placeholder="First name" />
          </div>
          <div class="w-full text-white">
            <FormLabel>Apellidos</FormLabel>
            <Input placeholder="First name" />
          </div>
        </div>

        <div class='flex flex-row gap-4 mb-4'>
          <div class="w-full text-white">
            <FormLabel>E-mail</FormLabel>
            <Input placeholder="First name" />
          </div>
          <div class="w-full text-white">
            <FormLabel>Mensaje</FormLabel>
            <Input placeholder="First name" />
          </div>
        </div>
      </FormControl>
    </div>
  );
}

export default Formulario