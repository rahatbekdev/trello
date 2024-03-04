import React, { useState } from "react";
import { addList, addCard } from "../store/listSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const Errorh1 = styled.h1`
  position: absolute;
  top: 35%;
  left: 40%;
  color: red;
  font-size: 250px;
`;

const AddNew = ({ type, parentId }) => {
  const [inputValue, setInputValue] = useState("");
  const [isFormVisit, setIsFormVisit] = useState(false);
  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const submitHand = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
      return;
    }
    setError(false);
    if (type) {
      dispatch(
        addCard({ id: Math.random(), title: inputValue, parentId: parentId })
      );
    } else {
      dispatch(addList({ id: Math.random(), title: inputValue }));
    }
    setError(false);
    cancelBtn();
    setInputValue("");
  };

  const updateInput = (event) => {
    setInputValue(event.target.value);
  };

  const openForm = () => {
    setIsFormVisit(true);
  };

  const cancelBtn = () => {
    setIsFormVisit(false);
    setError(false);
  };

  return (
    <div>
      <button onClick={openForm}>{type ? "a card" : "add a new card"}</button>
      {isFormVisit && (
        <form onSubmit={submitHand}>
          <input
            type="text"
            value={inputValue}
            onChange={updateInput}
            placeholder={type ? "Dobavit eshye" : "dobavit"}
          />
          {error && (
            <Errorh1>
              <FontAwesomeIcon icon={faTriangleExclamation} />
            </Errorh1>
          )}
          <button onClick={submitHand}>save</button>
          <button onClick={cancelBtn}>cancel</button>
        </form>
      )}
    </div>
  );
};

export default AddNew;
