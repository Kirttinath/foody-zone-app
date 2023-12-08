import styled  from "styled-components";
import { BASE_URL, Button } from "../../App";

const SearchResult = ({ data}) => {
  return (
    <FoodCardContainer>
        <FoodCards>
     {
      data?.map(({name, image, text, price }) => (
      <FoodCard key={name}>
    
    <div className="food_image">
      <img src={BASE_URL+ image} />
    </div>
    <div className="food_info">
      <div className="info">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
      <Button>₹{price}</Button>
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