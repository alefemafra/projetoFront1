import React from "react";

import { Container, Content, Title, ProtocolInformation } from "./styles";

export default function Pending({ protocol }) {
  return (
    <Container>
      <Content>
        <Title>Protocolo Nº {protocol.id}</Title>

        <ProtocolInformation>
          <div>
            <p>Nome do requirente: {protocol.name}</p>
          </div>
          <div>
            <p>Status: {protocol.status}</p>
          </div>
        </ProtocolInformation>
      </Content>
    </Container>
  );
}
