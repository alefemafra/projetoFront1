import React, { useState } from "react";
import { toast } from "react-toastify";
import { Form } from "@unform/web";
import { Input, ImageInput } from "../Form";
import Select from "react-select";
import Modal from "../Modal";
import { Container, StepOne, StepTwo, BudgetValue, Title } from "./styles";
import docCar from "../../assets/documento-veiculo.png";
import cnh from "../../assets/cnh.jpg";
import frontCar from "../../assets/frent-kwid.jpg";
import backCar from "../../assets/traseira-kwid.jpg";
import sideCar from "../../assets/lateral-kwid.jpeg";
import budgetPhoto from "../../assets/orcamento-examplo.jpg";

const yearCarOptions = [
  { value: true, label: "2010 ou mais novo" },
  { value: false, label: "2009 ou mais velho" }
];

const documentInYourNameOptions = [
  { value: true, label: "Sim" },
  { value: false, label: "Não" }
];

const paidCarOptions = [
  { value: true, label: "Quitado" },
  { value: false, label: "Financiado" }
];

const budgetAmountOptions = [
  { value: true, label: "Valor Maximo" },
  { value: false, label: "Solicitar Valor" }
];

const imagesExample = {
  docCar,
  cnh,
  frontCar,
  backCar,
  sideCar,
  budgetPhoto
};

export default function FormScreening() {
  const [aproved, setAproved] = useState(false);
  const [typeValue, settypeValue] = useState(false);
  const [yearCar, setYearCar] = useState(false);
  const [documentInYourName, setYourName] = useState(false);
  const [paidCar, setPaidCar] = useState(false);
  const [budgetAmount, setBudgetAmount] = useState(false);

  function handleChangeStep() {
    if (yearCar.value && documentInYourName.value && paidCar.value) {
      setAproved(true);
    } else {
      toast.error(
        "Infelizmente não podemos prosseguir com o processo, pois não tentede aos requisitos necessarios."
      );
    }
  }

  function handleChangeBudget(e) {
    if (!e.value) {
      setBudgetAmount(e);
      settypeValue(true);
    } else {
      setBudgetAmount(e);
    }
  }

  function handleSubmit() {
    console.log("test");
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <StepOne display={aproved ? "none" : "block"}>
          <div>
            <p> Qual é o ano do seu veículo ?</p>
            <Select
              value={yearCar}
              onChange={e => setYearCar(e)}
              options={yearCarOptions}
              placeholder="Selecionar"
            />
          </div>
          <div>
            <p>O documento do carro está em seu nome ?</p>
            <Select
              value={documentInYourName}
              onChange={e => setYourName(e)}
              options={documentInYourNameOptions}
              placeholder="Selecionar"
            />
          </div>
          <div>
            <p>O carro está quitado ou financiado ?</p>
            <Select
              value={paidCar}
              onChange={e => setPaidCar(e)}
              options={paidCarOptions}
              placeholder="Selecionar"
            />
          </div>
          <a onClick={e => handleChangeStep(e)}>Continuar</a>
        </StepOne>
        <StepTwo display={aproved ? "flex" : "none"}>
          <Title margin="20px 10px 30px">
            Para prosseguimos preencha os dados abaixo:
          </Title>

          <div className="textFiel">
            <Input type="text" label="Nome" name="name" placeholder="Nome" />
          </div>

          <div className="textFiel">
            <Input
              type="email"
              label="Email"
              name="email"
              placeholder="E-mail"
            />
          </div>

          <div className="budgetAmount">
            <div class="selectBudget">
              <p>Qual é o valor que você deseja financiar ?</p>
              <Select
                value={budgetAmount}
                onChange={e => handleChangeBudget(e)}
                options={budgetAmountOptions}
                placeholder="Selecionar"
              />
            </div>
            <BudgetValue display={typeValue ? "flex" : "none"}>
              <Input
                type="text"
                label="Digite o Valor Desejado"
                name="budgetAmountValue"
                placeholder="Digite o Valor Desejado"
              />
            </BudgetValue>
          </div>

          <Title margin="20px 10px 30px">
            Para proseguir adicione as fotos solicitadas:{" "}
          </Title>

          <div className="photo">
            <p>
              Foto do documento do veículo:{" "}
              <Modal>{imagesExample["docCar"]}</Modal>
            </p>
            <ImageInput name="documentCar" />
          </div>
          <div className="photo">
            <p>
              Insira uma foto da sua CNH:
              <Modal>{imagesExample["cnh"]}</Modal>
            </p>
            <ImageInput name="CnhPhoto" />
          </div>

          <Title margin="20px 10px 30px">
            Insira 4 fotos do veículo acidentado:{" "}
          </Title>

          <div className="photo">
            <p>
              Frente:
              <Modal>{imagesExample["frontCar"]}</Modal>
            </p>
            <ImageInput name="frontCar" />
          </div>
          <div className="photo">
            <p>
              Traseira:
              <Modal>{imagesExample["backCar"]}</Modal>
            </p>
            <ImageInput name="backCar" />
          </div>
          <div className="photo">
            <p>
              Lateral 1:
              <Modal>{imagesExample["sideCar"]}</Modal>
            </p>
            <ImageInput name="sideCarOne" />
          </div>
          <div className="photo">
            <p>
              Lateral 2:
              <Modal>{imagesExample["sideCar"]}</Modal>
            </p>
            <ImageInput name="sideCarTwo" />
          </div>

          <Title margin="20px 10px 30px">
            Se você tiver um orçamento da oficina, envie foto:
          </Title>

          <div className="photo">
            <p>
              Foto do Orçamento:
              <Modal>{imagesExample["budgetPhoto"]}</Modal>
            </p>
            <ImageInput name="budgetPhoto" />
          </div>

          <div className="enviar">
            <button type="submit">Enviar</button>
          </div>
        </StepTwo>
      </Form>
    </Container>
  );
}
