import LoginComponent from "./components/LoginComponent"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
