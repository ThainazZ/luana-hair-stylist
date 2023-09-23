import React from "react";
import Image from "next/image";
import logoPequena from "../../../public/logomenor.png";
import "./styles.css";

export default function Header() {
  return (
    <div className="nav-container">
      <Image src={logoPequena} alt="Logo" />
      <div className="menu-container">
        <ul className="menu">
          <li>Início</li>
          <li>Procedimentos</li>
          <li>Contato</li>
        </ul>
      </div>
    </div>
  );
}
