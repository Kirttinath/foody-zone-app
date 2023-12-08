import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from './components/SearchResults/SearchResult';

export const BASE_URL = "http://localhost:9000";



const App = () => {

const [data, setData]= useState(null);
const [filteredData, setFilteredData] = useState(null);
const [loading, setloading]  = useState(false);
const [error, setError]  = useState(null);
const [selectedbtn, setSelectedBtn] = useState("all");

useEffect(() => {
  const fetchFoodData = async () => {
    setloading(true);
  
  try {
    const response = await fetch(BASE_URL);
  const json = await response.json();
  
  setData(json);
  setFilteredData(json);
  setloading(false);
    
  } catch (error) {
    setError("Unable to fetch data..");
  }
  };
  fetchFoodData();
}, []);

const searchFood = (e) => {
  const searchValue  = e.target.value;

  if(searchValue===""){
    setFilteredData(null);
  }
  const filter = data?.filter((food)=> food.name.toLowerCase().includes(searchValue.toLowerCase()));
  setFilteredData(filter);
};

const filterFood = (type) =>{
   if(type==="all"){
  setFilteredData(data);
  setSelectedBtn("all");
  return;
   }
   const filter = data?.filter((food)=> food.type.toLowerCase().includes(type.toLowerCase()));
  setFilteredData(filter);
  setSelectedBtn(type);
};

const filterBtns = [
  {
    name: "All",
    type: "all",
  },
  {
    name: "Breakfast",
    type: "breakfast",
  },
  {
    name: "Lunch",
    type: "lunch",
  },
  {
    name: "Dinner",
    type: "dinner",
  },
];

if(error) return <div>{error}</div>;
if(loading) return <div>Loading...</div>;


  return (
    <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="search">
          <input onChange={searchFood} type="text" placeholder='Seacrh Food...' />
        </div>
      </TopContainer>

      <FilterContainer>
        {
          filterBtns.map((value) => 
          <Button isSelected={selectedbtn===value.type} key={value.name} onClick={()=> filterFood(value.type)}>{value.name}</Button>)
        }
      </FilterContainer>
     
    </Container>
    <SearchResult data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
`;
const TopContainer = styled.section`
height: 140px;
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
  &::placeholder{
    color: white;
  }
  }
}

@media (0 < width < 600px){
  flex-direction: column;
  height: 120px;
}
`;

const FilterContainer = styled.section`

display: flex;
justify-content: center;
gap: 30px;
padding-bottom: 40px;
`;

export const Button = styled.button`
border-radius: 5px;
background: ${({isSelected})=>(isSelected ? "#f22222" : "#FF4343")};
outline:1px solid ${({isSelected})=>(isSelected ? "white" : "#FF4343")};
padding: 6px 12px;
border: none;
color: #FFFFFF;
cursor: pointer;
&:hover {
  background-color: #f22f2f;
}
`;

