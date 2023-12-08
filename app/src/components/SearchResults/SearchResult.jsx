import styled  from "styled-components";

const SearchResult = ({ data}) => {
  return (
    <FoodCardContainer>
        <FoodCards>
     {
      data?.map((food) => (
      <FoodCard key={food.name}>
    
    <div className="food-image">
      <img src={food.image} />
    </div>
    

      </FoodCard>
      ))}
        </FoodCards>
      </FoodCardContainer>
  )
}

export default SearchResult;

const FoodCardContainer = styled.section`
height: calc(100vh - 210px);
background-image: url("/bg1.png");
background-size: cover;
`;
const FoodCards = styled.div``;

const FoodCard = styled.div``;