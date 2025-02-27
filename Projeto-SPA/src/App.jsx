import NavBar from './components/navBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Quezia from './pages/Quezia';
import Leo from './pages/Leo';
import Hayeska from './pages/Hayeska';
import Gui from '.';

function App() {
  return (
    <>
    

      <BrowserRouter >
      <NavBar/>
      <Routes >
      <Route path="/" element={<Home />}></Route>
      <Route path="/Gui" element={<Gui />}></Route>
      <Route path="/Leo" element={<Leo />}></Route>
      <Route path="/Hayeska" element={<Hayeska />}></Route>
      <Route path="/Quezia" element={<Quezia />}></Route>
      </Routes >
      </BrowserRouter> 

      
    </>
  );
}

export default App;
