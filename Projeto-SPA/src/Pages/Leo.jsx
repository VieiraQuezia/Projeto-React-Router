import React from "react";
import leonardo from '../../public/leonardo.png'
import "./base.css";

function Leo() {
  return (
    <div className="container">
      <div className="header">
        <img
          className="image"
          src={leonardo}
          alt="Profile"
        />
        <div className="info">
          <div className="name">Leonardo M. Vicente</div>
          <div className="username">@leomvic</div>
          <div className="seguidores">
            <div>
              <span>118 </span>
              Seguidores     
            </div>
            <div>
              <span>76 </span>
              Seguindo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leo;
