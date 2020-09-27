import styled from "styled-components";

const DetailedPageRelatedContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 899px) {
    flex-direction: column;
  }
`;

export default DetailedPageRelatedContainer;
