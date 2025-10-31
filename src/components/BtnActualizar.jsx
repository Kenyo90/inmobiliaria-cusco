import React from 'react'
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
const BtnActualizar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <Button onClick={onOpen} class="bg-[#952C00] w-[20px] text-2xl flex justify-center flex-row gap-5 items-center ">
        <svg
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          ></path>
        </svg>
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
                      <NumberIncrementStepper />
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
              <Input type="text" placeholder="Vistas panoramicas, agua, luz" />
              {/* <FormHelperText>Vistas panoramicas, agua, luz</FormHelperText> */}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bgColor={"cial"} color={"black"} mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="ghost" bgColor={"#952C00"} color={"white"}>
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BtnActualizar
