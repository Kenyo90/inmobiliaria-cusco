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

  RadioGroup,

} from "@chakra-ui/react";
import React from 'react'

const BtnAgregar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState('inside')

  return (
    <>
        <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
        {/* <Stack direction='row'>
          <Radio value='inside'>inside</Radio>
          <Radio value='outside'>outside</Radio>
        </Stack> */}
      </RadioGroup>

      <Button onClick={onOpen} class="bg-[#952C00] w-[220px] text-2xl">
        {" "}
        <span class="text-2xl "> + </span> Agregar terreno
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {/* ------Modal---- */}
        <ModalContent>
          <ModalHeader>Crear Nuevo Terreno</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl class="flex flex-col gap-1">
              <FormLabel>Titulo</FormLabel>
              <Input type="text" />
              <FormLabel>Descripcion</FormLabel>
              <Textarea placeholder="Descripcion..." />
              <div class="flex flex-row gap-4">
                <div>
                  <FormLabel>Precio</FormLabel>
                  <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </div>
                <div>
                  <FormLabel>Área</FormLabel>
                  <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper  />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </div>
              </div>
              <div class="flex flex-row gap-4">
                <div>
                  <FormLabel>Ubicación</FormLabel>
                  <Input type="text" />
                </div>
                <div>
                  <FormLabel>Distrito</FormLabel>
                  <Input type="text" />
                </div>
              </div>
              <div class="flex flex-row gap-20">
                <div>
                  <FormLabel>Tipo</FormLabel>
                  <Select placeholder="Residencial">
                    {/* <option value="option1">Residencial</option> */}
                    <option value="option2">Comercial</option>
                    <option value="option3">Agricola</option>
                    <option value="option3">Industrial</option>
                  </Select>
                </div>
                <div>
                  <FormLabel>Estado</FormLabel>
                  <Select placeholder="Disponible">
                    {/* <option value="option1">Disponible</option> */}
                    <option value="option2">Reservado</option>
                    <option value="option3">Vendido</option>
                  </Select>
                </div>
              </div>
              <FormLabel>File Imagen</FormLabel>
              <Input type="file" />
              <FormLabel>Caracteristicas</FormLabel>
              <Input type="text" placeholder="Vistas panoramicas, agua, luz"/>
              {/* <FormHelperText>Vistas panoramicas, agua, luz</FormHelperText> */}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bgColor={"cial"} color={"black"} mr={3} onClick={onClose} >
              Cancelar
            </Button>
            <Button variant='ghost' bgColor={'#952C00'} color={"white"}>Guardar</Button>
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
//   Text,
// } from '@chakra-ui/react'

// const BtnAgregar = () => {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//   return (
//     <>
//       <Button onClick={onOpen}>Open Modal</Button>

//       <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text fontWeight="bold" mb="1rem">
//               You can scroll the content behind the modal
//             </Text>
//             <Lorem count={2} />
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={onClose}>
//               Close
//             </Button>
//             <Button variant="ghost">Secondary Action</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

// export default BtnAgregar
