import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faEarthAmericas,
  faPlus,
  faBell,
  faQuestion,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DivOne = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
`;
const DivTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DivThree = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.p`
  cursor: pointer;
  margin-left: 35px;
  color: #d0c9c9;

  &:hover {
    color: white;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  color: #bbb5b5;
  margin-left: 15px;
`;
const Span = styled.span`
  cursor: pointer;
  font-size: 20px;
  margin-left: 5px;
  color: #bbb5b5;

  &:hover {
    color: white;
  }
`;

const PlusIcon = styled(FontAwesomeIcon)`
  width: 30px;
  height: 30px;
  background-color: blue;
  margin-left: 10px;
`;

const LogLinkDiv = styled.div`
  display: flex;
`;

const LinkOut = styled.h1`
  color: white;
  margin-right: 10px;
  font-size: 20px;
  background-color: blue;
`;

const handleLogOut = () => {
  localStorage.removeItem("userName");
};
const Header = () => {
  return (
    <DivOne>
      <DivTwo>
        <DivThree>
          <Icon icon={faList} />
          <div>
            <Icon icon={faEarthAmericas} />
            <Span>Trello</Span>
          </div>
          <Title>рабочее пространство</Title>
          <Title>недавние </Title>
          <Title>v избранном </Title>
          <Title>больше</Title>
          <PlusIcon icon={faPlus} />
        </DivThree>
        <LogLinkDiv>
          <Link onClick={handleLogOut} to="/">
            <LinkOut>Log out</LinkOut>
          </Link>
          <input type="text" placeholder="поиск" />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faQuestion} />
          <FontAwesomeIcon icon={faUser} />
        </LogLinkDiv>
      </DivTwo>
    </DivOne>
  );
};

export default Header;
