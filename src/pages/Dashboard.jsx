import Navbar from "../components/Navbar"

const Dashboard = () => {
  return (
    <div class='flex justify-center ' >
      <div class='w-100 h-full flex gap-5 flex-col p-15  justify-center bg-white shadow-md rounded-md '>
        <img  src="/public/img/logo.jpg" alt="Logo" class='w-30 self-center' />
        <form action=""class='flex flex-col text-left px-2 py-5 gap-2 h-80 '>
            <label class='text-ms' htmlFor="">Nombre de usuario o correo:</label>
            <input class='bg-black rounded-md h-8' type="text" />
            <label class='text-ms' htmlFor="">Contraseña:</label>
            <input class='bg-black rounded-md h-8' type="text" />
        </form>
      </div>
    </div>
  )
}

export default Dashboard
