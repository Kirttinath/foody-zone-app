import styled from "styled-components";
import React from "react";

const App = () => {

  return (
    <Maincontainer>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder='Seacrh Food...' />
        </div>
      </TopContainer>
    </Maincontainer>
  );
}

export default App;

const Maincontainer = styled.div`

background-color: #323334;
`;
const TopContainer = styled.section``;