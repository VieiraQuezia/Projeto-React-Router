import { useState } from "react"

import Hayeska from "/hayeska.png"
import './base.css'

function hayeska() {
const [isLogado, setIsLogado] = useState(false);


  return (
    <>
    <article className="container">

      <nav className="header">
        <img
          className="image"
          src={Hayeska}
          alt="Profile"
        />
        <nav className="info">

          <div className="name">hayeska</div>
          <div className="username">@carecaax</div>

          <p>I❤️U @vieiraquezia08</p>
          <p>愛</p>

          <nav className="seguidores">
              <span>92 Seguidores</span>
              <span>248 Seguindo</span>
          </nav>
    
    <button onClick={ () => setIsLogado(!isLogado)}  className={isLogado ? 'seguindo' : 'seguir'} >  {isLogado ? "Seguindo" : "Seguir "} </button> 
    

        </nav>
      </nav>

    </article>
    <h2 className="login">{isLogado ? "Obrigado por me Seguir" : ""}</h2> 

    </>

  );
}

export default hayeska;