import { useState } from "react";
import logo from "../../public/logo.png";
import leonardo from "/leonardo.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lado from "../components/lado";

import Instagram from "/instagram.png";
import gmail from "/gmail.png";

import "./base.css";

function Leo() {
  const [isLogado, setIsLogado] = useState(false);

  return (
    <>
      <nav className="header_pagina">
        <a
          href="http://localhost:5173/"
          target="_self"
        >
          <img className="logo" src={logo} alt="logo" />
        </a>
      </nav>
      <article className="meio">
        <Navbar />

        <article className="container">
          <nav className="header">
            <img className="image" src={leonardo} alt="Profile" />
            <nav className="info">
              <div className="name">Leonardo Mori Vicente</div>
              <div className="username">@leomvic</div>

              <nav className="seguidores">
                <span>118 Seguidores</span>
                <span>183 Seguindo</span>
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

export default Leo;
