import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: white;

  .container__left,
  .container__right {
    max-width: 47%;
    max-height: 70vh;
    width: 100%;
    background: #1976d212;
    padding: 15px;
    border-radius: 15px;
  }

  .container__right {
    max-height: 70vh;
    overflow: scroll;
  }
`;
