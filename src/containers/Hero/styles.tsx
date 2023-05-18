import styled from "styled-components";

export const Section = styled.section`
  padding: 8rem 0;

  input {
    border-color: white;
    color: white;
    background: #1976d212;
    padding: 15px;
    border-radius: 15px;
    border: none;
    max-width: 280px;
    width: 100%;
    margin: 0 auto;
    display: block;

    margin-top: 100px;
  }
  h1 {
    text-align: center;
    color: white;
    margin-bottom: 30px;
  }

  .btn-container {
    margin-top: 35px;

    > button {
      margin: 0 auto;
      display: block;
    }
  }
`;
