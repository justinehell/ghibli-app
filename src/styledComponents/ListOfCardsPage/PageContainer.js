import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  margin-right: 10%;
  margin-left: 10%;
  justify-content: center;
  //padding: 50px 0;
  @media screen and (max-width: 415px) {
    margin-right: 0;
    margin-left: 0;
  }
`;

export default PageContainer;
