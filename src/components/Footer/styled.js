import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  padding: 48px 24px;
  background-color: #17171a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  p {
    font-size: 14px;
    text-align: center;
    font-weight: 500;

    a {
      color: #e07b67;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 64px 32px;

    p {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1216px) {
    p {
      font-size: 20px;
    }
  }
`;
