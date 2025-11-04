import React, { useEffect, useState } from "react";
import axios from "axios";

const PropiedadesPaginadas = () => {
  const [propiedades, setPropiedades] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchPropiedades = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No hay token disponible");
      const response = await axios.get(
        "http://localhost:8080/api/propiedades/paginadas",
        {
          params: {
            page: page,
            size: 6,
            sortBy: "precio",
            direction: "desc",
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPropiedades(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error al cargar propiedades:", error);
    }
  };

  useEffect(() => {
    fetchPropiedades();
  }, [page]);

  return (
    <div>
      <h2>Propiedades disponibles</h2>
      <ul>
        {propiedades.map((prop) => (
          <li key={prop.id}>
            <strong>{prop.titulo}</strong> - S/.{prop.precio} ({prop.tipo})
          </li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
        >
          Anterior
        </button>
        <span>
          Página {page + 1} de {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={page + 1 === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default PropiedadesPaginadas;
