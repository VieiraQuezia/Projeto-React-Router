import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Pages/Home";
import Guilherme from './Pages/Guilherme'
import Quezia from './Pages/Quezia'


import "./App.css";



function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Guilherme" element={<Guilherme />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Quezia" element={<Quezia />} />
        
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
