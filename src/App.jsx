import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage.jsx"
import About from "./pages/About.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
