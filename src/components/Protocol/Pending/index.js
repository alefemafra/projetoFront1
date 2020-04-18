import React from "react";

import { Container, Content, Title, ProtocolInformation } from "./styles";

export default function Pending({ protocol }) {
  return (
    <Container>
      <Content>
        <Title>Protocolo Nº {protocol.id}</Title>

        <ProtocolInformation>
          <div>
            Nome do requirente: {protocol.name}
          </div>
          <div>
            Status: {protocol.status}
          </div>
        </ProtocolInformation>
      </Content>
    </Container>
  );
}
