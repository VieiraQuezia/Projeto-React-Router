import Lado from "../Components/lado.jsx";
import Header from "../components/header.jsx";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar.jsx";
import Instagram from "/instagram.png";
import gmail from "/gmail.png";
import Quezia from "/quezia.png";
import Guilherme from "/guilherme.png";
import Hayeska from "/hayeska.png";
import Leo from "/leonardo.png";

import "../App.css";

function App() {
  return (
    <>
      <Header />
      <article className="meio">
        <NavBar />
        <div className="image">
          <h2> ⬅ Conheça as nossas páginas </h2>
          <img src={Guilherme} />
          <img src={Leo} />
          <img src={Hayeska} />
          <img src={Quezia} />
        </div>

        <Lado val1="Perseverança" val2="Amizade" val3="Responsabilidade" />
        
      </article>

      <Footer
        imgi={Instagram}
        insta="@vieiraquezia08"
        imge={gmail}
        email="vieiraquezia24@gmail.com"
        texto="Responsável pelo desenvolvimento: Quezia Amaral Vieira"
      />
    </>
  );
}

export default App;
