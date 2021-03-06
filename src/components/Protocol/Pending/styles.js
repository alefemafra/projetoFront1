import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: transparent;
  border: 2px solid #ebebeb;
  border-radius: 5px;
  padding: 30px 20px 50px;
  margin-top: 50px;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  color: white;
  font-size: 25px;
  font-weight: 600;
  width: 100%;
  margin: 10px 0 35px;
`;

export const ProtocolInformation = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-top: 50px;

  p {
    color: white;
    font-size: 16px;
  }
`;
