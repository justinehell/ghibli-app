import styled from "styled-components";

const DetailedPageRelated = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(107 109 120 / 50%);
  color: lightskyblue; //#87cefa
  width: calc(97% / 2);
  margin-top: 25px;
  border-radius: 8px;
  @media screen and (max-width: 899px) {
    width: 100%;
  }
  @media screen and (max-width: 415px) {
    border-radius: 0px;
  }
`;

export default DetailedPageRelated;
