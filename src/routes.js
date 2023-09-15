import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";


function RoutesApp() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/details" element={ <Details /> } />
      </Routes>
    </BrowserRouter>
  )
}
export default RoutesApp;