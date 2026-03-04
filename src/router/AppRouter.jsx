import { Routes, Route } from "react-router-dom"
import Inicio from '../pages/Inicio'

const AppRouter = () => {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<Inicio/>}></Route>

      </Route>
    </Routes>
  )
}

export default AppRouter
