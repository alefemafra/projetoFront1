import React from "react";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.png";

import { Container, Content } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="Banco RNX Maxinvest" />
        </div>

        <nav>
          <li>
            <Link to="/protocolo">Verificar Protocolo</Link>
          </li>
        </nav>
      </Content>
    </Container>
  );
}
