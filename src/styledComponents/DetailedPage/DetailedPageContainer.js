import styled from "styled-components";

const DetailedPageContainer = styled.div`
  display: flex;
  background-color: lightskyblue;
  color: #282c34;
  max-width: 70%;
  margin: auto;
  margin-top: 50px;
  @media screen and (max-width: 899px) {
    flex-direction: column;
  }
  @media screen and (max-width: 415px) {
    max-width: 100%;
  }
`;

export default DetailedPageContainer;
