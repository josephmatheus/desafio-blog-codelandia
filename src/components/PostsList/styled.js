import styled from "styled-components";

export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 56px 32px;
  }

  @media screen and (min-width: 1216px) {
    padding: 80px;
  }
`;
