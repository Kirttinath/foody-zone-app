import styled from "styled-components";
import React from "react";

const App = () => {

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder='Seacrh Food...' />
        </div>
      </TopContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
`;
const TopContainer = styled.section``;