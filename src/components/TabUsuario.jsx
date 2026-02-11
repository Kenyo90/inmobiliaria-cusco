
 import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text, Flex, Box } from "@chakra-ui/react";
 import { useEffect, useState } from "react";
 import { listarContactos } from "../Services/ApiContacto";
 import { useColorMode } from "@chakra-ui/react";

const TabUsuario = () => {
  const { colorMode } = useColorMode();
  const [contacto, setContacto] = useState([]);
  const [showMoreIndex, setShowMoreIndex] = useState(null);
  console.log("Show index",setShowMoreIndex,showMoreIndex);

  const fondo = colorMode === "light" ? "bg-[white] text-black" : "bg-gray-900 text-white";

  useEffect(() => {
    listarContactos()
      .then((res) => {
        const eliminados = JSON.parse(localStorage.getItem("contactos_eliminados") || "[]");
        const leidos = JSON.parse(localStorage.getItem("contactos_leidos") || "[]");

        // Al cargar, inyectamos la propiedad 'leidoLocal' basada en localStorage
        const contactosMapeados = res.data
          .filter(c => !eliminados.includes(c.id))
          .map(c => ({
            ...c,
            leidoLocal: leidos.includes(c.id)
          }));
          
        setContacto(contactosMapeados);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleEliminar = (id) => {
    if (window.confirm("¿Deseas ocultar este contacto?")) {
      const eliminados = JSON.parse(localStorage.getItem("contactos_eliminados") || "[]");
      if (!eliminados.includes(id)) {
        const nuevaLista = [...eliminados, id];
        localStorage.setItem("contactos_eliminados", JSON.stringify(nuevaLista));
        setContacto(contacto.filter(c => c.id !== id));
      }
    }
  };

  // 3. FUNCIÓN OPTIMIZADA PARA OPACIDAD INMEDIATA
  const handleLeido = (id) => {
    const leidos = JSON.parse(localStorage.getItem("contactos_leidos") || "[]");
    let nuevaListaLeidos;
    let ahoraEsLeido;

    if (leidos.includes(id)) {
      nuevaListaLeidos = leidos.filter(item => item !== id);
      ahoraEsLeido = false;
    } else {
      nuevaListaLeidos = [...leidos, id];
      ahoraEsLeido = true;
    }

    localStorage.setItem("contactos_leidos", JSON.stringify(nuevaListaLeidos));
    
    // IMPORTANTE: Actualizamos el estado 'contacto' para que React repinte la opacidad
    setContacto(prev => prev.map(c => 
      c.id === id ? { ...c, leidoLocal: ahoraEsLeido } : c
    ));
  };

  return (
    <main className="mx-auto px-6 py-8 bg-[#FEF7F2]">
      <div className="flex items-center justify-between mb-6 border-b border-red-200">
         <div className="text-[25px]">
           <h1 className="text-[25px] font-bold text-black text-left">
             Panel de Administración de Usuarios
           </h1>
           <p className="text-gray-400 text-[15px] text-left">
             Gestiona todos los usuarios
           </p>
         </div>
         <span className="text-gray-900 text-[14px]">
           {contacto.length} Visibles
         </span>
       </div>
      <section>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
        >
          {contacto.map((contac, index) => (
            <Card
              key={contac.id || index}
              // USAMOS contac.leidoLocal para aplicar la opacidad
              opacity={contac.leidoLocal ? 0.4 : 1}
              filter={contac.leidoLocal ? "grayscale(40%)" : "none"}
              className={`${fondo} p-3 flex flex-col justify-between gap-5 transition-all duration-300`}
              boxShadow="lg"
              p="15px"
            >
              <Flex justify="space-between">
                <button onClick={() => handleEliminar(contac.id)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="red"
                    strokeWidth="2"
                  >
                    <path d="M18 6l-12 12M6 6l12 12" />
                  </svg>
                </button>
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer accent-green-600"
                  checked={!!contac.leidoLocal}
                  onChange={() => handleLeido(contac.id)}
                />
              </Flex>
              <CardHeader p="5px" textAlign="center">
                <Heading as="h2" size="md" fontSize="18px" pb="5px">
                  {contac.nombre} {contac.apellidos}
                </Heading>
                <Text fontSize="10px" fontWeight="600" color="gray.400">
                  {contac.email}
                </Text>
              </CardHeader>
              <CardBody px="15px" textAlign="center">
                {contac.comentario.length > 100 ? (
                  <>
                    <Text fontSize="14px" px="10px" py="2">
                      {showMoreIndex === index
                        ? contac.comentario
                        : contac.comentario.slice(0, 100) + "..."}
                    </Text>
                    <Button
                      size="sm"
                      variant="link"
                      colorScheme="blue"
                      onClick={() =>
                        setShowMoreIndex(showMoreIndex === index ? null : index)
                      }
                    >
                      {showMoreIndex === index ? "Ver menos" : "Ver más"}
                    </Button>
                  </>
                ) : (
                  <Text fontSize="14px" px="10px" py="2">
                    {contac.comentario}
                  </Text>
                )}
              </CardBody>
              <CardFooter pt="2px" pb="2px" justifyContent="center">
                <div className="w-[100%]">
                  <a
                    href={`https://wa.me/+51${contac.celular}? text=Hola%20quiero%20contactarme%20contigo`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      w="fit"
                      display="flex"
                      justifyContent="center"
                      px={"10px"}
                      gap="2"
                      bg="#EDF2F7"
                      py="1"
                      borderRadius="sm"
                    >
                      <img
                        className="w-5 m-1 transition-all duration-200"
                        src="/img/whatsapp.png"
                        alt="WhatsApp"
                      />
                      <span className="font-semibold text-black w-fit ">
                        +51 {contac.celular}
                      </span>
                    </Button>
                    <span className="flex justify-center py-2 text-sm text-gray-500">
                      {new Date(contac.fechaRegistro).toLocaleString()}
                    </span>
                  </a>
                </div>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </section>
    </main>
  );
 };

 export default TabUsuario;

