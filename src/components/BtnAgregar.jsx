// import {
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   NumberIncrementStepper,
//   NumberDecrementStepper,
//   Select,
//   RadioGroup,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { crearPropiedad } from "../Services/ApiServices";

// const BtnAgregar = ({ onPropiedadCreada, className }) => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [scrollBehavior, setScrollBehavior] = useState("inside");

//   // --- States para inputs ---
//   const [titulo, setTitulo] = useState("");
//   const [descripcion, setDescripcion] = useState("");
//   const [precio, setPrecio] = useState("");
//   const [metrosCuadrados, setMetrosCuadrados] = useState("");
//   const [direccion, setDireccion] = useState("");
//   const [distrito, setDistrito] = useState("");
//   const [tipo, setTipo] = useState("");
//   const [estado, setEstado] = useState("");
//   const [servicios, setServicios] = useState("");

//   // --- Validación básica ---
//   const validarCampos = () => {
//     if (!titulo || !descripcion || !precio || !metrosCuadrados || !direccion || !distrito || !tipo || !estado) {
//       alert("Todos los campos son obligatorios");
//       return false;
//     }
//     if (isNaN(precio) || isNaN(metrosCuadrados)) {
//       alert("Precio y metros cuadrados deben ser números válidos");
//       return false;
//     }
//     return true;
//   };

//   // --- Manejar creación ---
//   const handleGuardar = async () => {
//     if (!validarCampos()) return;

//     const data = {
//       titulo,
//       descripcion,
//       precio: Number(precio),
//       metrosCuadrados: Number(metrosCuadrados),
//       direccion,
//       distrito,
//       tipo,
//       estado,
//       servicios,
//     };

//     try {
//       const resultado = await crearPropiedad(data);
//       alert("Propiedad creada correctamente");

//       onClose(); // Cerrar modal

//       // Limpiar inputs
//       setTitulo(""); setDescripcion(""); setPrecio(""); setMetrosCuadrados("");
//       setDireccion(""); setDistrito(""); setTipo(""); setEstado(""); setServicios("");

//       // Notificar al padre
//       if (onPropiedadCreada) onPropiedadCreada(resultado);

//     } catch (error) {
//       console.error("Error al crear propiedad:", error);
//       alert("No se pudo crear la propiedad: " + (error.message || error));
//     }
//   };

//   return (
//     <>
//       <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}></RadioGroup>

//       <Button onClick={onOpen} className={className}>
//         <span className="text-2xl"> + </span> Agregar terreno
//       </Button>

//       <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Crear Nuevo Terreno</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <FormControl className="flex flex-col gap-1">
//               <FormLabel>Titulo</FormLabel>
//               <Input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
              
//               <FormLabel>Descripcion</FormLabel>
//               <Textarea placeholder="Descripcion..." value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
              
//               <div className="flex flex-row gap-4">
//                 <div>
//                   <FormLabel>Precio</FormLabel>
//                   <NumberInput value={precio} onChange={(valueString) => setPrecio(valueString)}>
//                     <NumberInputField />
//                     <NumberInputStepper>
//                       <NumberIncrementStepper />
//                       <NumberDecrementStepper />
//                     </NumberInputStepper>
//                   </NumberInput>
//                 </div>
//                 <div>
//                   <FormLabel>Área</FormLabel>
//                   <NumberInput value={metrosCuadrados} onChange={(valueString) => setMetrosCuadrados(valueString)}>
//                     <NumberInputField />
//                     <NumberInputStepper>
//                       <NumberIncrementStepper />
//                       <NumberDecrementStepper />
//                     </NumberInputStepper>
//                   </NumberInput>
//                 </div>
//               </div>

//               <div className="flex flex-row gap-4">
//                 <div>
//                   <FormLabel>Ubicación</FormLabel>
//                   <Input value={direccion} onChange={(e) => setDireccion(e.target.value)} />
//                 </div>
//                 <div>
//                   <FormLabel>Distrito</FormLabel>
//                   <Input value={distrito} onChange={(e) => setDistrito(e.target.value)} />
//                 </div>
//               </div>

//               <div className="flex flex-row gap-20">
//                 <div>
//                   <FormLabel>Tipo</FormLabel>
//                   <Select value={tipo} onChange={(e) => setTipo(e.target.value)}>
//                     <option value="TERRENO_RESIDENCIAL">Residencial</option>
//                     <option value="TERRENO_COMERCIAL">Comercial</option>
//                     <option value="TERRENO_AGRICOLA">Agricola</option>
//                     <option value="TERRENO_INDUSTRIAL">Industrial</option>
//                   </Select>

//                 </div>
//                 <div>
//                   <FormLabel>Estado</FormLabel>
//                   <Select value={estado} onChange={(e) => setEstado(e.target.value)}>
//                     <option value="">Seleccionar</option>
//                     <option value="DISPONIBLE">Disponible</option>
//                     <option value="RESERVADO">Reservado</option>
//                     <option value="VENDIDO">Vendido</option>
//                   </Select>
//                 </div>
//               </div>

//               <FormLabel>Caracteristicas</FormLabel>
//               <Input type="text" placeholder="Vistas panoramicas, agua, luz" value={servicios} onChange={(e) => setServicios(e.target.value)} />
//             </FormControl>
//           </ModalBody>

//           <ModalFooter>
//             <Button bgColor={"cial"} color={"black"} mr={3} onClick={onClose}>
//               Cancelar
//             </Button>
//             <Button variant="ghost" bgColor={"#952C00"} color={"white"} onClick={handleGuardar}>
//               Guardar
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default BtnAgregar;


import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { crearPropiedad } from "../Services/ApiServices";

const BtnAgregar = ({ onPropiedadCreada, className }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // --- States para inputs ---
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [metrosCuadrados, setMetrosCuadrados] = useState("");
  const [direccion, setDireccion] = useState("");
  const [distrito, setDistrito] = useState("");
  const [tipo, setTipo] = useState("");
  const [estado, setEstado] = useState("");
  const [servicios, setServicios] = useState("");

  // --- Validación de campos ---
  const validarCampos = () => {
    if (!titulo || !descripcion || !precio || !metrosCuadrados || !direccion || !distrito || !tipo || !estado) {
      alert("Todos los campos son obligatorios");
      return false;
    }
    if (isNaN(precio) || isNaN(metrosCuadrados)) {
      alert("Precio y metros cuadrados deben ser números válidos");
      return false;
    }
    return true;
  };

  // --- Manejar creación ---
  const handleGuardar = async () => {
    if (!validarCampos()) return;

    const data = {
      titulo,
      descripcion,
      precio:Number(precio),
      metrosCuadrados:Number(metrosCuadrados),
      direccion,
      distrito,
      tipo,
      estado,
      servicios,
    };

    try {
      const nuevaPropiedad = await crearPropiedad(data);
      alert("Propiedad creada correctamente");

      // Limpiar campos
      setTitulo("");
      setDescripcion("");
      setPrecio("");
      setMetrosCuadrados("");
      setDireccion("");
      setDistrito("");
      setTipo("");
      setEstado("");
      setServicios("");

      onClose(); // Cerrar modal

      // Notificar al componente padre
      if (onPropiedadCreada) onPropiedadCreada(nuevaPropiedad);
    } catch (error) {
      console.error("Error al crear propiedad:", error);
      alert("No se pudo crear la propiedad: " + (error.message || error));
    }
  };

  return (
    <>
      <Button onClick={onOpen} className={className}>
        <span className="text-2xl"> + </span> Agregar terreno
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear Nuevo Terreno</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl className="flex flex-col gap-2">
              <FormLabel>Título</FormLabel>
              <Input value={titulo} onChange={(e) => setTitulo(e.target.value)} />

              <FormLabel>Descripción</FormLabel>
              <Textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción..." />

              <div className="flex gap-4">
                <div>
                  <FormLabel>Precio</FormLabel>
                  <NumberInput value={precio} onChange={(value) => setPrecio(value)}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </div>
                <div>
                  <FormLabel>Área (m²)</FormLabel>
                  <NumberInput value={metrosCuadrados} onChange={(value) => setMetrosCuadrados(value)}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </div>
              </div>

              <FormLabel>Dirección</FormLabel>
              <Input value={direccion} onChange={(e) => setDireccion(e.target.value)} />

              <FormLabel>Distrito</FormLabel>
              <Input value={distrito} onChange={(e) => setDistrito(e.target.value)} />

              <FormLabel>Tipo</FormLabel>
              <Select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                <option value="">Seleccionar</option>
                <option value="TERRENO_RESIDENCIAL">Residencial</option>
                <option value="TERRENO_COMERCIAL">Comercial</option>
                <option value="TERRENO_AGRICOLA">Agrícola</option>
                <option value="TERRENO_INDUSTRIAL">Industrial</option>
              </Select>

              <FormLabel>Estado</FormLabel>
              <Select value={estado} onChange={(e) => setEstado(e.target.value)}>
                <option value="">Seleccionar</option>
                <option value="DISPONIBLE">Disponible</option>
                <option value="RESERVADO">Reservado</option>
                <option value="VENDIDO">Vendido</option>
              </Select>

              <FormLabel>Servicios / Características</FormLabel>
              <Input type="text" value={servicios} onChange={(e) => setServicios(e.target.value)} placeholder="Ej: Agua, luz, vistas panorámicas" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>Cancelar</Button>
            <Button colorScheme="orange" onClick={handleGuardar}>Guardar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BtnAgregar;




// import {
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   NumberIncrementStepper,
//   NumberDecrementStepper,
//   Select,
//   RadioGroup,
// } from "@chakra-ui/react";
// import React from 'react'
// import { useState } from "react";
// import { crearPropiedad } from "../Services/ApiServices";
// // import { crearPropiedad } from "../Services/ApiServices";

// const BtnAgregar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [scrollBehavior, setScrollBehavior] = useState('inside')
// //const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  
//   const [titulo,setTitulo]=useState("");
//   const [descripcion,setDescripcion]=useState("");
//   const [precio,setPrecio]=useState(0);
//   const [metrosCuadrados,setMetrosCuadrados]=useState(0);
//   const [direccion,setDireccion]=useState("");
//   const [distrito,setDistrito]=useState("");
//   const [tipo,setTipo]=useState("");
//   const [estado,setEstado]=useState("");
//   const [caracteristicas,setCaracteristicas]=useState("");

//   //manejar creacion
//   const handleGuardar=async()=>{
//     const data ={
//         titulo,
//         descripcion,
//         precio,
//         metrosCuadrados,
//         direccion,
//         distrito,
//         tipo,
//         estado,
//         caracteristicas,
//     };
//     try{
//         const resultado = await crearPropiedad(data);
//         if (resultado){
//             alert("Propiedad creada correctamente");
//             onClose();
//             //
//             setTitulo("");
//             setDescripcion("");
//             setPrecio(0);
//             setMetrosCuadrados(0);
//             setDireccion("");
//             setDistrito("");
//             setTipo("");
//             setEstado("");
//             setCaracteristicas("");

//         }
//     }catch(error){
//         console.error("error",error);
//         alert("No se pudo crear la propiedad")
//     }
//   };


//   return (
//     <>
//       <RadioGroup
//         value={scrollBehavior}
//         onChange={setScrollBehavior}
//       ></RadioGroup>

//       <Button onClick={onOpen} class="bg-[#952C00] w-[220px] text-2xl">
//         {" "}
//         <span class="text-2xl "> + </span> Agregar terreno
//       </Button>

//       <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         {/* ------Modal---- */}
//         <ModalContent>
//           <ModalHeader>Crear Nuevo Terreno</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <FormControl class="flex flex-col gap-1">
//               <FormLabel>Titulo</FormLabel>
//               <Input type="text" />
//               <FormLabel>Descripcion</FormLabel>
//               <Textarea placeholder="Descripcion..." />
//               <div class="flex flex-row gap-4">
//                 <div>
//                   <FormLabel>Precio</FormLabel>
//                   <NumberInput>
//                     <NumberInputField />
//                     <NumberInputStepper>
//                       <NumberIncrementStepper />
//                       <NumberDecrementStepper />
//                     </NumberInputStepper>
//                   </NumberInput>
//                 </div>
//                 <div>
//                   <FormLabel>Área</FormLabel>
//                   <NumberInput>
//                     <NumberInputField />
//                     <NumberInputStepper>
//                       <NumberIncrementStepper />
//                       <NumberDecrementStepper />
//                     </NumberInputStepper>
//                   </NumberInput>
//                 </div>
//               </div>
//               <div class="flex flex-row gap-4">
//                 <div>
//                   <FormLabel>Ubicación</FormLabel>
//                   <Input type="text" />
//                 </div>
//                 <div>
//                   <FormLabel>Distrito</FormLabel>
//                   <Input type="text" />
//                 </div>
//               </div>
//               <div class="flex flex-row gap-20">
//                 <div>
//                   <FormLabel>Tipo</FormLabel>
//                   <Select placeholder="Residencial">
//                     {/* <option value="option1">Residencial</option> */}
//                     <option value="option2">Comercial</option>
//                     <option value="option3">Agricola</option>
//                     <option value="option3">Industrial</option>
//                   </Select>
//                 </div>
//                 <div>
//                   <FormLabel>Estado</FormLabel>
//                   <Select placeholder="Disponible">
//                     {/* <option value="option1">Disponible</option> */}
//                     <option value="option2">Reservado</option>
//                     <option value="option3">Vendido</option>
//                   </Select>
//                 </div>
//               </div>
//               <FormLabel>File Imagen</FormLabel>
//               <Input type="file" />
//               <FormLabel>Caracteristicas</FormLabel>
//               <Input type="text" placeholder="Vistas panoramicas, agua, luz" />
//               {/* <FormHelperText>Vistas panoramicas, agua, luz</FormHelperText> */}
//             </FormControl>
//           </ModalBody>

//           <ModalFooter>
//             <Button bgColor={"cial"} color={"black"} mr={3} onClick={onClose}>
//               Cancelar
//             </Button>
//             <Button variant="ghost" bgColor={"#952C00"} color={"white"}>
//               Guardar
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };
// export default BtnAgregar;
