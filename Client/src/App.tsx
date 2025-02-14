import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound.tsx";
import Navbar from "./components/Navbar.tsx";
function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
  )
}

function Main()
{
  return(
    <Routes>
      <Route path = "*" element={<NotFound/>}/>
    </Routes>
  )
}
export default App
