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
            <div>
              <span>238</span>
              Seguidores
            </div>
            <div>
              <span>223</span>
              Seguindo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
