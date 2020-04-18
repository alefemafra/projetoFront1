import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #ebebeb;
  padding: 15px 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row;

  /* div {
    img {
      filter: invert(99%) sepia(0%) saturate(4%) hue-rotate(163deg)
        brightness(102%) contrast(105%);
    }
  } */

  nav {
    margin-left: 50px;
    display: flex;
    align-items: center;

    li {
      list-style: none;
      color: #000000;
      font-size: 17px;
      padding: 0 15px;

      &:first-child {
        padding: 0 15px 0 0;
      }
      a {
        color: #000000;
        text-decoration: none;
      }
    }
  }
`;
