import React from "react";
import Image from "next/image";
import logoGrande from "../../../public/logomaior.png";
import "./styles.css";

export default function Content() {
  return (
    <>
      <div className="content-container">
        <div className="content-image">
          <Image src={logoGrande} alt="logo" />
        </div>
        <div className="info-container">
        <p>Criando momentos de brilho e confiança.</p>
      </div>
      </div>
      
    </>
  );
}
