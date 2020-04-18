import styled from "styled-components";

export const Container = styled.div`
  max-width: 65%;
  margin: 0 auto;
  padding: 25px 0;
`;

export const Content = styled.div`
  margin-top: 15px;
  padding: 20px;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 15px;
    }
  }
`;

export const ViewProgressForm = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-flow: row;
  align-items: flex-end;
  justify-content: center;

  div {
    label {
      color: white;
    }
    input {
      margin-top: 15px;
    }
  }

  button {
    max-height: 45px;
    height: 100vh;
    padding: 0 25px;
    border-radius: 5px;
    margin-left: 20px;
    font-weight: 600;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 25px;
  font-weight: 600;
  width: 100%;
  margin-bottom: 30px;
`;
