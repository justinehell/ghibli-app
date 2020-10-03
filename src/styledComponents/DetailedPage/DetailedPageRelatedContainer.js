import styled from "styled-components";

const DetailedPageRelatedContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 899px) {
    flex-direction: column;
  }
  @media screen and (max-width: 415px) {
    width: 100%;
  }
`;

export default DetailedPageRelatedContainer;
