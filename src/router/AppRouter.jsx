import { Routes, Route } from "react-router-dom"
import Inicio from '../pages/Inicio'
import Dashboard from "../pages/Dashboard"
import Crud from "../pages/Crud"
import MainPage from "../pages/MainPage"

const AppRouter = () => {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/inicio' element={<Inicio/>}></Route>
        <Route path='/admin' element={<Dashboard/>}></Route>
        <Route path='/Crud' element={<Crud/>}></Route>
      </Route>
    </Routes>
  )
}

export default AppRouter
