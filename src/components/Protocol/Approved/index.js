import React from "react";

import {
  Container,
  Content,
  Title,
  ProtocolInformation,
  HeaderInformation,
  BodyInformation,
  CardPayment,
  CardInformation,
} from "./styles";

export default function Approved({ protocol }) {
  return (
    <Container>
      <Content>
        <Title>Protocolo Nº {protocol.id}</Title>

        <ProtocolInformation>
          <HeaderInformation>
            <div>
              <p>Nome do requirente: {protocol.name}</p>
            </div>
            <div>
              <p>Status: {protocol.status}</p>
            </div>
          </HeaderInformation>
          <BodyInformation>
            <CardInformation>
              <p>
                O empréstimo foi aprovado no valor de R$ {protocol.aprovedValeu}
              </p>
            </CardInformation>
            <CardInformation>
              <p>Nossas condições para: </p>
            </CardInformation>

            <CardInformation>
              <CardPayment>
                <p>12 meses</p>
                <p>R$ {protocol.firstCondition}</p>
              </CardPayment>
              <CardPayment>
                <p>15 meses</p>
                <p>R$ {protocol.secondCondition}</p>
              </CardPayment>
              <CardPayment>
                <p>18 meses</p>
                <p>R$ {protocol.thirdCondition}</p>
              </CardPayment>
            </CardInformation>
          </BodyInformation>
        </ProtocolInformation>
      </Content>
    </Container>
  );
}
