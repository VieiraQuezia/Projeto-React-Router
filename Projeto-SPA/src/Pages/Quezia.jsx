import { useState } from "react";

import Quezia from "/quezia.png";
import "./base.css";

function quezia() {
  const [isLogado, setIsLogado] = useState(false);

  return (
    <>
      <article className="container">
        <nav className="header">
          <img className="image" src={Quezia} alt="Profile" />
          <nav className="info">
            <div className="name">Quezia Amaral Vieira</div>
            <div className="username">@vieiraquezia08</div>
            <p>Your love set me free ❤️ <br/>
            I❤️U @carecaax <br/>
            16y</p>
            
            <nav className="seguidores">
              <span>238 Seguidores</span>
              <span>223 Seguindo</span>
            </nav>

            <button
              onClick={() => setIsLogado(!isLogado)}
              className={isLogado ? "seguindo" : "seguir"}
            >
              {" "}
              {isLogado ? "Seguindo" : "Seguir "}{" "}
            </button>
          </nav>
        </nav>
      </article>
      <h2 className="login">{isLogado ? "Obrigado por me Seguir" : ""}</h2>
    </>
  );
}

export default quezia;
