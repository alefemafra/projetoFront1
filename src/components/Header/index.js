import React from "react";

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
          <li>Verificar Progresso</li>
        </nav>
      </Content>
    </Container>
  );
}
