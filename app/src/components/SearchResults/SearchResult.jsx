import styled  from "styled-components";

const SearchResult = () => {
  return (
    <FoodCardContainer>
        <FoodCards>

        </FoodCards>
      </FoodCardContainer>
  )
}

export default SearchResult

const FoodCardContainer = styled.section`
height: calc(100vh - 210px);
background-image: url("/bg1.png");
background-size: cover;
`;
const FoodCards = styled.div``;