import NavBar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
// import Quezia from "./Pages/Quezia";
// import Leo from "./Pages/Leo";
// import Hayeska from "./Pages/Hayeska";
// import Gui from "./Pages/Guilherme";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Gui" element={<Gui />} />
          <Route path="/Leo" element={<Leo />} />
          <Route path="/Hayeska" element={<Hayeska />} />
          <Route path="/Quezia" element={<Quezia />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
