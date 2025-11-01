import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const API_Login = "http://localhost:8080/auth/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function Login(e) {
    e.preventDefault(); // Evita que la página se recargue
    try {
      const respuesta = await fetch(API_Login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!respuesta.ok) {
        throw new Error("Error en Login:" + respuesta.status);
      }

      const datos = await respuesta.json();
      console.log("Token o respuesta del login:", datos);

      if (datos.token) {
        localStorage.setItem("token", datos.token);
      }

      // Puedes redirigir al usuario a otra página o cambiar el estado de sesión
      alert("Login exitoso");
      navigate("/crud");
 
    } catch (error) {
      console.error("❌ Error al iniciar sesión:", error);
      alert("Login fallido");
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-100 h-full flex gap-5 flex-col p-15 justify-center bg-white shadow-md rounded-md">
        <img
          src="/public/img/logo.jpg"
          alt="Logo"
          className="w-30 self-center"
        />
        <form
          onSubmit={Login}
          className="flex flex-col text-left px-2 py-5 gap-5 h-80"
        >
          <div className="flex flex-col gap-3">
            <label className="text-ms" htmlFor="email">
              e-mail:
            </label>
            <input
              id="email"
              className="bg-green-200 rounded-md h-8 text-black"
              placeholder="Ejemplo@gmail.com"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-ms" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              className="bg-green-200 rounded-md h-8 text-black"
              placeholder="********"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="shadow-md rounded-md h-9 bg-red-500"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;

// import { useState } from "react";
// const Dashboard = () => {
//   const API_Login='http://localhost:8080/auth/login';

//   const [email, setEmail]=useState("");
//   const [password,setPassword]=useState("");

//   async function Login(e) {
//     e.preventDefault();
//     try {
//       const respuesta = await fetch(API_Login,{
//         method:"POST",
//         headers:{
//           "Content-Type":"application/json",
//         },
//         body:JSON.stringify({email,password }),
//       });
//       if(!respuesta.ok){
//         throw new Error("Error en Login:"+ respuesta.status)
//       }
//       const datos = await respuesta.json();
//       console.log("Token o respuesta del login:",datos);
//       console.log(datos)
//       //Guardar Token en LocalStorade
//       if(datos.token){
//         localStorage.setItem("token", datos.token);
//       }
//       return datos

//     } catch (error) {
//       console.error("❌ Error al obtener la API:", error);
//     }
//   }


//   return (
//     <div class='flex justify-center ' >
//       <div class='w-100 h-full flex gap-5 flex-col p-15  justify-center bg-white shadow-md rounded-md '>
//         <img  src="/public/img/logo.jpg" alt="Logo" class='w-30 self-center' />
//         <form action=""class='flex flex-col text-left px-2 py-5 gap-5 h-80 '>
//             <div class='flex flex-col gap-3'>
//               <label class='text-ms' htmlFor="" >e-mail:</label>
//               <input class='bg-green-200 rounded-md h-8 text-black' placeholder=" Ejemplo@gmail.com" type="text" /> 
//             </div>
//             <div class='flex flex-col gap-3'>
//               <label class='text-ms' htmlFor="">Password:</label>
//               <input class='bg-green-200 rounded-md h-8 text-black' placeholder=" ******** " type="password" />
//             </div>
//             <button class="shadow-md rounded-md h-9 bg-red-500" type="submit">Entrar</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Dashboard
