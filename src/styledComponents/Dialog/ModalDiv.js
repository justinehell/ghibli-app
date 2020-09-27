import styled from "styled-components";

const ModalDiv = styled.div`
  background-color: white;
  position: fixed;
  top: 5%;
  left: 30%;
  right: 30%;
  zindex: 1000;
  padding: 30px;
  letter-spacing: 1px;
  line-height: 1.6;
  max-height: 90vh;
  overflow-y: auto;
  @media screen and (max-width: 1465px) {
    left: 20%;
    right: 20%;
  }
  @media screen and (max-width: 1024px) {
    left: 0;
    right: 0;
  }
`;

export default ModalDiv;
