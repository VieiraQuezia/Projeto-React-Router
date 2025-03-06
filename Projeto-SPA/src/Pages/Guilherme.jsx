import { useState } from "react"

import Guilherme from "/guilherme.png"
import './base.css'

function guilherme() {
const [isLogado, setIsLogado] = useState(false);


  return (
    <>
    <article className="container">

      <nav className="header">
        <img
          className="image"
          src={Guilherme}
          alt="Profile"
        />
        <nav className="info">

          <div className="name">Guilherme Gabriel Santana</div>
          <div className="username">@Guih.sdl</div>

          <nav className="seguidores">
              <span>346 Seguidores</span>
              <span>80 Seguindo</span>
          </nav>
    
    <button onClick={ () => setIsLogado(!isLogado)}  className={isLogado ? 'seguindo' : 'seguir'} >  {isLogado ? "Seguindo" : "Seguir "} </button> 
    

        </nav>
      </nav>

    </article>
    <h2 className="login">{isLogado ? "Obrigado por me Seguir" : ""}</h2> 

    </>

  );
}

export default guilherme;
