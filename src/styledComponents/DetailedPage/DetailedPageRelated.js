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
  @media screen and (max-width: 899px) {
    width: 100%;
  }
`;

export default DetailedPageRelated;
