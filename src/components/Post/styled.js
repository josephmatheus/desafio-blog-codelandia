import styled, { css } from "styled-components";

export const Li = styled.li`
  list-style: none;
  width: 375px;
  max-width: 99%;
  padding: 32px 24px;
  margin-bottom: 40px;
  border-radius: 8px;
  border: 2px solid #252529;
  ${props => props.$isFavorite && css`
      border: 2px solid #e07b67;
  `}
  background: #17171a;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    span {
      color: #e07b67;
      font-size: 12px;
    }

    .react-icons {
      color: #e07b67;
      font-size: 20px;
    }
  }

  h3 {
    margin-bottom: 16px;
    font-family: "Space Grotesk", sans-serif;
    font-size: 20px;
  }

  p {
    color: #afabb6;
    font-size: 14px;
    line-height: 160%; /* 22.4px */
  }

  &:hover {
    border: 2px solid #e07b67;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 40px;

    div {
      margin-bottom: 24px;

      span {
        font-size: 14px;
      }
      .react-icons {
        font-size: 24px;
      }
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1216px) {
    width: 1216px;

    div {
      margin-bottom: 20px;

      span {
        font-size: 16px;
      }
      .react-icons {
        font-size: 32px;
      }
    }

    h3 {
      font-size: 24px;
    }

    p {
      font-size: 20px;
    }
  }
`;
