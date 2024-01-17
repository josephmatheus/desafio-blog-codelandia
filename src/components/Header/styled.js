import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 48px 24px;
  background: #17171A;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  h1 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 24px;
    font-weight: 500;
    text-align: center;

    span {
      color: #e07867;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 64px 32px;
    gap: 48px;

    h1 {
      font-size: 40px;
    }
  }

  @media screen and (min-width: 1216px) {
    padding: 64px 0;
  }
`;

// width: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-direction: column;
//           padding: 64px 0;
//           gap: 48px;
//           background: "#17171A";
