
const API_URL = "http://localhost:8080/api/propiedades";

export async function listarPropiedades() {
  try {
    const response = await fetch(`${API_URL}/listar`);
    if (!response.ok) {
      throw new Error(`Error al listar propiedades: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("❌ Error al obtener propiedades:", error);
    throw error;
  }
}

export async function obtenerPropiedadPorId(id) {
  try {
    const token = localStorage.getItem("token");
    const headers=token 
    ? {"Authorization": `Bearer ${token}`} 
    : {};

    const response = await fetch(`${API_URL}/${id}`,{headers});
    if (!response.ok) throw new Error("Error al obtener propiedad");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function crearPropiedad(data) {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No hay token disponible");
    console.log("Token usado:", token);
    console.log("Datos enviados:", data);

    const response = await fetch(`${API_URL}/crear`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": token,
        "Authorization": `Bearer ${token}`,

      },
      body: JSON.stringify(data),
      
    });

    const text = await response.text();
    let responseData = {};

    try {
      responseData = text ? JSON.parse(text) : {}; // Si hay texto, intenta parsear
    } catch (err) {
      console.warn("No se pudo parsear la respuesta JSON:", err);
      responseData = { message: text || "Respuesta no válida del servidor" };
    }
    if (!response.ok) {
      const errorMessage = responseData?.message || `Error al crear propiedad (status ${response.status})`;
      throw new Error(errorMessage);
    }

    return responseData;
  } catch (error) {
    console.error("Error en crearPropiedad:", error);
    throw error;
  }
}



// export async function crearPropiedad(data) {
//   try {
//     const token = localStorage.getItem("token");
//     if (!token) throw new Error("No hay token disponible");

//     const response = await fetch(`${API_URL}/crear`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(data),
//     });
//     if (!response.ok) {
//       let errorMessage = "Error al crear propiedad";
//       try {
//         const errorData = await response.json();
//         errorMessage = errorData.message || JSON.stringify(errorData);
//       } catch (e) {
//         console.error("No se pudo parsear JSON del error:", e);
//       }
//       throw new Error(errorMessage);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function eliminarPropiedad(id) {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No hay token disponible");

    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    const text = await response.text(); // obtiene la respuesta como texto
    console.log("🔍 Backend response:", response.status, text);

    if (!response.ok) {
      throw new Error(`Error al eliminar propiedad (${response.status}): ${text}`);
    }

    return true;
  } catch (error) {
    console.error("Error en eliminarPropiedad:", error);
    return false;
  }
}



