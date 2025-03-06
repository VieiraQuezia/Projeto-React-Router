import Hayeska from "/hayeska.png";
import React from "react";
import "./base.css";

function hayeska() {
  return (
    <div className="container">
      <div className="header">
        <img className="image" src={Hayeska} />
        <div className="info">
          <div className="name">hayeska</div>
          <div className="username">@carecaax</div>
          <div className="seguidores">

          <p>92 Seguidores</p>
          <p>223 Seguindo</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default hayeska;