import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { Form } from "@unform/web";
import * as Yup from "yup";
import FormScreening from "../../components/FormScreening";

import { Container, Content } from "./styles";

export default function Home() {
  return (
    <Container>
      <Content>
        <FormScreening />
      </Content>
    </Container>
  );
}
