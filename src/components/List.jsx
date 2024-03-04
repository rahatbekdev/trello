import React from "react";
import AddNew from "./AddNew";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Card from "./Card";

// const Div1 = styled.div`
//   padding: 1rem;
//   background-color: #ccc;
//   margin-right: 10px; /* Добавляем отступ справа */
// `;

const DivOne = styled.div`
  padding: 10px;
  width: 30%;
`;

const DivTwo = styled.div`
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  border: 1px solid silver;
`;

const DivList = styled.div`
  padding: 10px;
  width: 30%;
`;

const DivListTwo = styled.div`
  padding: 10px;
  background-color: green;
`;

const CardDiv = styled.div`
  margin-top: 10px;
`;

const List = () => {
  const listItem = useSelector((store) => store.listSlice.list);
  return (
    <>
      {listItem.map((list) => (
        <DivOne key={list.id}>
          <DivTwo>
            <div>{list.title}</div>
            {list?.children?.length > 0 &&
              list.children.map((children) => (
                <Card key={children.id} cardInfo={children} />
              ))}
            <CardDiv>
              <AddNew type="card" parentId={list.id} />
            </CardDiv>
          </DivTwo>
        </DivOne>
      ))}

      <DivList>
        <DivListTwo>
          <AddNew />
        </DivListTwo>
      </DivList>
    </>
  );
};

export default List;
