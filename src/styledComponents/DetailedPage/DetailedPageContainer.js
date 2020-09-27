import styled from "styled-components";

const DetailedPageContainer = styled.div`
  display: flex;
  background-color: black;
  color: lightskyblue;
  max-width: 70%;
  margin: auto;
  margin-top: 50px;
  @media screen and (max-width: 899px) {
    flex-direction: column;
  }
`;

export default DetailedPageContainer;
