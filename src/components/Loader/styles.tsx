import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Section = styled.section`
  padding: 8rem 0;
`;

export const Spinner = styled.span`
  display: block;
  height: 70vh;
  padding: 100px 0;

  &:after {
    content: "";
    display: block;
    margin: 2em auto;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid #1976d2;
    border-color: #1976d2 transparent #1976d2 transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
