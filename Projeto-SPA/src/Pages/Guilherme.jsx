import React from "react";
import Guilherme from "/guilherme.png"
import './base.css'

function guilherme() {
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

        </nav>
      </nav>

    </article>
    </>

  );
}

export default guilherme;
