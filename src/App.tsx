import "./assets/css/global.scss"
import HomePage from "./pages/Home"
import SlikPage from "./pages/Slik"
import { Route, Routes } from "react-router"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tambah" element={<SlikPage />} />
        <Route path="/edit/:idSlik" element={<SlikPage />} />
      </Routes>
    </>
  )
}

export default App
