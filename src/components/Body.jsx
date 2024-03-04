import React from "react";
// import FilterComponent from "./FilterComponent";
import List from "./List";
import styled from "styled-components";

const DivBody = styled.div`
  width: 100%;
  color: yellow;
`;

const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  /* background-color: red; */
`;
const Body = () => {
  return (
    <DivBody>
      <ListDiv>
        <List />
      </ListDiv>
    </DivBody>
  );
};

export default Body;
