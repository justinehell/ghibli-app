import styled from "styled-components";

const NavStyle = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 735px) {
    flex-wrap: wrap;
  }
`;

export default NavStyle;
