import React, { useState } from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  cursor: pointer;
  padding: 8px;
  margin-top: 8px;
  background-color: #90ee90;
  color: black;
  border-radius: 5px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const CardDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Mdiv = styled.div`
  /* position: fixed; */
  border: 1px solid red;
  background-color: silver;
  left: 390px;
`;

const ModalCard = ({ closeModal }) => {
  return (
    <Mdiv>
      <h1>ok ok ok</h1>
      <h2>22 222 222 222</h2>
      <h3>33 33 33 33 33</h3>
      <button onClick={closeModal}>back</button>
    </Mdiv>
  );
};

const Card = ({ cardInfo }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <CardDiv>
      <CardDiv2>
        {cardInfo.title}
        <span onClick={openModal}>...</span>
        {modal && <ModalCard closeModal={closeModal} />}
      </CardDiv2>
    </CardDiv>
  );
};

export default Card;
