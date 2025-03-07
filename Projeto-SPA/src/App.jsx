import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Pages/Home";
import Guilherme from './Pages/Guilherme'
import Leo from "./Pages/Leo";
import Quezia from './Pages/Quezia'
import Hayeska from "./Pages/Hayeska";

import "./App.css";



function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Guilherme" element={<Guilherme />} />
          <Route path="/Leo" element={<Leo />} />
          <Route path="/Hayeska" element={<Hayeska />} />
          <Route path="/Quezia" element={<Quezia />} />
        
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
