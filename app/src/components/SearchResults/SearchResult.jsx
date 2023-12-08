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
      <Button>₹{price.toFixed(2)}</Button>
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

const FoodCard = styled.div`
width: 340px;
height: 167px;
border: 0.66px solid;
border-image-source: radial-gradient(
  80.69% 208.78% at 108.28% 112.58%,
  #eabfff 0%,
  rgba(135, 38, 183, 0) 100%
),
radial-gradient(
  80.38% 222.5% at -13.75% -12.36%,
  #98f9ff 0%,
  rgba(255, 255, 255, 0) 100%
);
`;