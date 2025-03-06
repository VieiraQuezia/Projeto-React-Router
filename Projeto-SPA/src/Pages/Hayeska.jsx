import { useState } from "react";
import logo from "../../public/logo.png";
import Hayeska from "/hayeska.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lado from "../components/lado";

import Instagram from "/instagram.png";
import gmail from "/gmail.png";

import "./base.css";

function guilherme() {
  const [isLogado, setIsLogado] = useState(false);

  return (
    <>
      <nav className="header_pagina">
        <a
          href="http://localhost:5173/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src={logo} alt="logo" />
        </a>
      </nav>
      <article className="meio">
        <Navbar />

        <article className="container">
          <nav className="header">
            <img className="image" src={Hayeska} alt="Profile" />
            <nav className="info">
              <div className="name">hayeska</div>
              <div className="username">@carecaax</div>

              <p>I❤️U @vieiraquezia08 <br />
              愛
              </p>



              <nav className="seguidores">
                <span>92 Seguidores</span>
                <span>248 Seguindo</span>
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

export default guilherme;
