import { useState } from "react"

import leonardo from "/leonardo.png"
import './base.css'

function Leo() {
const [isLogado, setIsLogado] = useState(false);


  return (
    <>
    <article className="container">

      <nav className="header">
        <img
          className="image"
          src={leonardo}
          alt="Profile"
        />
        <nav className="info">

          <div className="name">Leonardo Mori Vicente</div>
          <div className="username">@leomvic</div>

          <nav className="seguidores">
              <span>118 Seguidores</span>
              <span>183 Seguindo</span>
          </nav>
    
    <button onClick={ () => setIsLogado(!isLogado)}  className={isLogado ? 'seguindo' : 'seguir'} >  {isLogado ? "Seguindo" : "Seguir "} </button> 
    

        </nav>
      </nav>

    </article>
    <h2 className="login">{isLogado ? "Obrigado por me Seguir" : ""}</h2> 

    </>

  );
}

export default Leo;
