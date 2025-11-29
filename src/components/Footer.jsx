
import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io5";
const Footer = () => {
  return (
    <footer class='w-full'>
        <div class="flex flex-row justify-around py-6 bg-orange-300">
            <img class='w-[50px]' src="/public/img/Home.svg" alt="logo" />
            <aside>
            <ul class='text-black flex flex-col gap-[5px] content-center '>
                <li class='flex flex-row gap-2 justify-center items-center h-[50px]'><FaSquareFacebook class='w-[20px] h-[20px]'/> Facebook </li>
                <li class='flex flex-row gap-2 justify-center items-center h-[50px]'><FiInstagram class='w-[20px] h-[20px]'/> Instagram </li>
                <li class='flex flex-row gap-2 justify-center items-center h-[50px]'><SiTiktok class='w-[20px] h-[20px]'/> TikTok </li>
                <li class='flex flex-row gap-2 justify-center items-center h-[50px]'><AiOutlineWhatsApp class='w-[20px] h-[20px]'/> Whatsapp </li>
                <li class='flex flex-row gap-2 justify-center items-center h-[50px]'><IoLogoTwitter class='w-[20px] h-[20px]'/> Twitter </li>
            </ul>
        </aside>
        {/* <aside>
            <ul>
                <li>hola </li>
                <li>hola </li>
                <li>hola </li>
                <li>hola </li>
                <li>hola </li>
            </ul>
        </aside>
        <aside>
            <ul>
                <li>hola </li>
                <li>hola </li>
                <li>hola </li>
                <li>hola </li>
                <li>hola </li>
            </ul>
        </aside> */}
        </div>
        <div class="h-[2px] bg-black w-full ">
          <p class="text-center py-4 text-black font-mono text-[14px] bg-orange-300">
            &copy; 2024 Proyecto Terrenos. Todos los derechos reservados.
          </p>
        </div>
      </footer>
  )
}

export default Footer