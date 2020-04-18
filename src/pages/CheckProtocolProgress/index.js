import React, { useState } from "react";
import { Form } from "@unform/web";
import { Input } from "~/components/Form";

import { Container, Content, ViewProgressForm, Title } from "./styles";

export default function CheckProtocolProgress() {
  const [protocol, setProtocol] = useState({});
  const [submitForm, setsubmitForm] = useState(false);

  function handleSubmit({ numberProtocol, cpf }) {
    console.log(`Numero do protocol: ${numberProtocol}`);
    console.log(`CPF: ${cpf}`);
  }

  return (
    <Container>
      <Content>
        <Title>Consulta de Protocolo</Title>
        <Form onSubmit={handleSubmit}>
          <ViewProgressForm display={submitForm ? "none" : "flex"}>
            <div>
              <Input
                type="text"
                label="Numero do Protocolo: "
                name="numberProtocol"
                placeholder="Numero do Protocolo"
              />
            </div>
            <div>
              <Input type="text" label="CPF: " name="cpf" placeholder="CPF" />
            </div>
            <button type="submit">Verificar</button>
          </ViewProgressForm>
        </Form>
      </Content>
    </Container>
  );
}
