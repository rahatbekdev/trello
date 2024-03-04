import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import styled from "styled-components";

const AppDiv = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <div>
      <Header />
      <AppDiv>
        <Sidebar />
        <Body />
      </AppDiv>
    </div>
  );
};

export default Home;
