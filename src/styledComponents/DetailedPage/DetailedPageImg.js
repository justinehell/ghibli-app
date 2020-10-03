import styled from "styled-components";

const DetailedPageImg = styled.img`
  height: 100%;
  width: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  object-fit: cover;
  @media screen and (max-width: 899px) {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 0px;
  }
  @media screen and (max-width: 415px) {
    border-radius: 0px;
  }
`;

export default DetailedPageImg;
