import styled from "styled-components";

const ElementPerPage = styled.div`
  width: 20%;
  padding: 25px;
  @media screen and (max-width: 1250px) {
    width: 40%;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export default ElementPerPage;
