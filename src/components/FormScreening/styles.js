import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #002b45;
  padding: 15px 20px;

  form {
    width: 100%;
  }

  a,
  button {
    float: right;
    margin-top: 20px;
    padding: 1.0625rem 1.625rem;
    border: 0.0625em solid transparent;
    border-radius: 0.25em;
    font-weight: 600;
    font-size: 0.875em;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    background-color: #ffffff;
  }
`;

export const StepOne = styled.div`
  width: 100%;
  display: ${props => props.display || 'block'};

  div {
    p {
      color: white;
      font-size: 16px;
      margin: 15px 0;
    }
  }
`;

export const StepTwo = styled.div`
  display: ${props => props.display || 'block'};
  flex-flow: row wrap;
  justify-content: center;

  div {
    &.photo {
      display: flex;
      flex-flow: column;
      align-items: center;
      width: 50%;
      margin-bottom: 20px;
    }

    &.budgetAmount {
      display: flex;
      flex-flow: row;
      width: 98%;
      margin-top: 30px;
      margin-bottom: 15px;

      .selectBudget {
        width: 47%;
        p {
          margin-bottom: 10px;
          font-size: 14px;
          font-weight: bold;
        }
      }
    }

    &.textFiel {
      width: 49%;

      label {
        color: #ffffff;
        width: 100%;
        text-align: left;
      }

      input {
        margin-top: 15px;
      }
    }

    &.enviar {
      justify-content: right;
      width: 100%;
      align-items: inherit;
    }

    p {
      color: white;
      font-size: 20px;
    }
  }
`;

export const Title = styled.p`
  color: white;
  font-size: 25px;
  font-weight: 600;
  width: 100%;
  margin: ${props => props.margin || '0px'};
`;

export const BudgetValue = styled.div`
  display: ${props => props.display || 'block'};
  flex-flow: column;
  width: 50%;
  margin-left: 30px;

  label {
    margin: 0px 0px 10px !important;
    color: #ffffff;
    text-align: left;
    font-size: 14px;
  }
`;
