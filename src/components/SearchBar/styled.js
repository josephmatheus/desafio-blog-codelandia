import styled, { css } from "styled-components";

export const Form = styled.form`
  width: 375px;
  max-width: 90%;
  margin: 0 auto;
  padding: 16px 24px;
  border-radius: 8px;
  border: 2px solid #252529;
  ${(props) =>
    props.$isSelected &&
    css`
      border: 2px solid #e07b67;
    `}
  background: #202024;
  display: flex;
  align-items: center;
  transition: 0.3s ease-in-out;

  input {
    margin-left: 12px;
    width: 100%;
    font-size: 14px;
    color: #afabb6;
    font-weight: 500;
    line-height: normal;
    border: none;
    outline: none;
    background-color: #fff0;
  }

  .react-icons {
    font-size: 18px;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 768px;

     input {
        margin-left: 16px; 
        font-size: 20px;
     }

     .react-icons {
        font-size: 32px;
     }
  }

  @media screen and (min-width: 1216px) {
    width: 1216px;
  }
`;
