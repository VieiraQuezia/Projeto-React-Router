import Quezia from "/quezia.png";
import React from "react";
import "./base.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <img className="image" src={Quezia} alt="Profile" />
        <div className="info">
          <div className="name">Seu Nome</div>
          <div className="username">@seuusuario</div>
          <div className="seguidores">

          <p>238 Seguidores</p>
          <p>223 Seguindo</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
