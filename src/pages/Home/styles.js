import styled from "styled-components";

import colors from "~/styles/colors";

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
