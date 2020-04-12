import React from "react";
import Popup from "reactjs-popup";
import { MdHelpOutline } from "react-icons/md";

import { Container } from "./styles";

export default function Modal({ children }) {
  return (
    <Popup
      trigger={
        <button type="button">
          <MdHelpOutline />
        </button>
      }
      modal
      position="center center"
      contentStyle={{
        width: "450px",
        borderRadius: "4px",
        padding: "25px"
      }}
    >
      <Container>
        <img src={children} />
      </Container>
    </Popup>
  );
}
