import { useEffect, useState } from "react";
import styled from "styled-components";


const BASE_URL = "http://localhost:9000";



const App = () => {

const [data, setData]= useState(null);
const [loading, setloading]  = useState(false);
const [error, setError]  = useState(null);

useEffect(() => {
  const fetchFoodData = async () => {
    setloading(true);
  
  try {
    const response = await fetch(BASE_URL);
  const json = await response.json();
  setloading(false);
  
  setData(json);
    
  } catch (error) {
    setError("Unable to fetch data..");
  }
  };
  fetchFoodData();
});


if(error) return <div>{error}</div>;
if(loading) return <div>Loading...</div>;


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

      <FilterContainer>
        <Button>All</Button>
        <Button>BreakFast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <FoodCardContainer>
        <FoodCards>

        </FoodCards>
      </FoodCardContainer>

    </Container>
  );
};

export default App;

const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
`;
const TopContainer = styled.section`
min-height: 140px;
display: flex;
justify-content: space-between;
padding:16px;
align-items:center;

.search{
      input{
  background-color: transparent;
  border: 1px solid red;
  color:white;
  border-radius:5px;
  height: 40px;
  font-size: 16px;
  padding: 0 10px;
  }
}
`;

const FilterContainer = styled.section`

display: flex;
justify-content: center;
gap: 30px;
padding-bottom: 40px;
`;

const Button = styled.button`
border-radius: 5px;
background: #FF4343;
padding: 6px 12px;
border: none;
color: #FFFFFF;
`;

const FoodCardContainer = styled.section`
height: calc(100vh - 210px);
background-image: url("/bg1.png");
background-size: cover;
`;
const FoodCards = styled.div``;