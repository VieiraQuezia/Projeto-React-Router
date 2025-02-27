import guilherme from "/guilherme.png";
import hayeska from "/hayeska.png";
import leonardo from "/leonardo.png";
import quezia from "/quezia.png";

import Instagram from "/instagram.png"
import gmail from '/gmail.png'



import Usuarios from "./components/Usuarios.jsx";
import Lado from "./components/lado.jsx";
import Cabecalho from "./components/header.jsx";
import Rodape from './components/Footer.jsx'


import "./App.css";

function App() {
  return (
    <>

<Cabecalho/>
    <aside>
    <article className="blocos">
        <Usuarios nome="Guilherme G. Santana" img={guilherme} hobby="Sair com a namorada"/>
        <Usuarios nome="Hayeska L. A. Machado" img={hayeska} hobby="Jogar vôlei"/>
        <Usuarios nome="Leonardo M. Vicente" img={leonardo} hobby="Tocar piano"/>
        <Usuarios nome="Quezia A. Vieira" img={quezia} hobby="Jogar vôlei"/>
      </article>


      <Lado val1='Perseverança' val2='Amizade' val3='Responsabilidade'/>
    
      </aside>

      <Rodape imgi={Instagram} insta="@vieiraquezia08" imge={gmail} email="vieiraquezia24@gmail.com" texto="Responsável pelo desenvolvimento: Quezia Amaral Vieira" />


    </>
  );
}

export default App;



