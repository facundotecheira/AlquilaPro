// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Search from './Components/Search'
import Login from './Components/Login'
import Register from './Components/Register'

function App() {

  const herramientas = [
    {
      id: 1,
      nombre: "Taladro",
      descripcion: "Taladro percutor para ta ta ta",
      estadoHerramienta: "semi - nuevo",
      precio: "$1000",
      condicionAlquiler: ["Por dia", "Por mes"],
      imgPrincipal: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgSecundarias: []
    }
  ]

      {/* 🟢 Excelente

🟡 Bueno

🟠 Usado */}

  return (
    <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  
    </>
  )
}

export default App
