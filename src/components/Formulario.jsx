import { FormControl, FormLabel, Input } from '@chakra-ui/react'; 

const Formulario = () => {
  return (
    <div class="w-full bg-[#FEF7F2] p-[25px]">
      <p class="text-center pb-[25px] text-black font-extrabold font-mono text-[25px]">
        FORMULARIO
      </p>
      <FormControl isRequired>
        <div className='2xl:flex 2xl:gap-10 2xl:justify-center 2xl:items-center'>
          <div className='2xl:w-full '>
            <div class="flex flex-row gap-4 mb-4">
              <div class="w-full text-black">
                <FormLabel >Nombre</FormLabel>
                <Input placeholder="Nombre" />
              </div>
              <div class="w-full text-black">
                <FormLabel for='apellido'>Apellidos</FormLabel>
                <Input id='apellido' placeholder="Apellido" />
              </div>
            </div>
            <div class="flex flex-row gap-4 mb-4">
              <div class="w-full text-black">
                <FormLabel for='email'>E-mail</FormLabel>
                <Input id='email' placeholder="Correo" />
              </div>
              <div class="w-full text-black">
                <FormLabel for='celular'>Celular</FormLabel>
                <Input id='celular' placeholder="+51 - " />
              </div>
            </div>
          </div>
          <div className='2xl:w-full 2xl:flex 2xl:flex-col gap-3 '>
            <textarea
              class=" w-full h-30 outline-2 !text-black outline-offset-2 outline-black rounded-sm"
              name=""
              id=""
              placeholder="Comentario..."
            ></textarea>
            <button className="w-full h-[2rem] !text-[1rem] !text-white !bg-black rounded-sm">
              Enviar
            </button>
          </div>
        </div>
      </FormControl>
    </div>
  );
}

export default Formulario