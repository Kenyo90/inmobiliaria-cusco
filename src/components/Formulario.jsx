import { FormControl, FormLabel, Input } from '@chakra-ui/react'; 
import { useState } from "react";
const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [comentario, setComentario] = useState("");

  const handleSendEmail = () => {
    const subject = "Nuevo mensaje desde el formulario";
    const body = `
Nombre: ${nombre}
Apellido: ${apellido}
E-mail: ${email}
Celular: ${celular}
Comentario: ${comentario}`;

    window.location.href = `mailto:saenzkenyo@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div class="w-full bg-white p-[25px]">
      <p class="text-center pb-[25px] text-black font-extrabold font-mono text-[25px]">
        FORMULARIO
      </p>
      <FormControl isRequired>
        <div className="flex flex-col gap-6 2xl:flex-row 2xl:gap-10 2xl:justify-center 2xl:items-start xl:flex-row xl:gap-10 xl:justify-center xl:items-start">
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full text-black">
                <FormLabel>Nombre</FormLabel>
                <Input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
              </div>
              <div className="w-full text-black">
                <FormLabel htmlFor="apellido">Apellidos</FormLabel>
                <Input  value={apellido} onChange={e => setApellido(e.target.value)} id="apellido" placeholder="Apellido" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full text-black">
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input value={email} onChange={e => setEmail(e.target.value)} id="email" placeholder="Correo" />
              </div>
              <div className="w-full text-black">
                <FormLabel htmlFor="celular">Celular</FormLabel>
                <Input value={celular} onChange={e => setCelular(e.target.value)} id="celular" placeholder="+51 - " />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <textarea
              value={comentario} onChange={e => setComentario(e.target.value)}
              class="!p-2 w-full h-32 outline-2 outline-black outline-offset-2 rounded-sm text-black"
              placeholder="Comentario..."
            />
            <button onClick={handleSendEmail} class="w-full h-10 !text-white !bg-black rounded-sm">
              Enviar
            </button>
          </div>
        </div>
      </FormControl>
    </div>
  );
}

export default Formulario



      {/* <FormControl isRequired>
        <div className='2xl:flex 2xl:gap-10 2xl:justify-center 2xl:items-center xl:flex xl:gap-10 xl:justify-center xl:items-center l'>
          <div className='2xl:w-full  xl:w-full lg:w-full'>
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
          <div className=' flex flex-col gap-3 2xl:w-full xl:w-full lg:w-full'>
            <textarea
              class=" !p-[10px] w-full h-30 outline-2 !text-black outline-offset-2 outline-black rounded-sm"
              name=""
              id=""
              placeholder="Comentario..."
            ></textarea>
            <button className="w-full h-[2rem] !text-[1rem] !text-white !bg-black rounded-sm">
              Enviar
            </button>
          </div>
        </div>
      </FormControl> */}