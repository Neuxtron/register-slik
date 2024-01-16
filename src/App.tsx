import "./assets/css/global.scss"
import HomePage from "./pages/Home"
import TambahPage from "./pages/Tambah"
import { Route, Routes } from "react-router"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tambah" element={<TambahPage />} />
      </Routes>
    </>
  )
}

export default App
