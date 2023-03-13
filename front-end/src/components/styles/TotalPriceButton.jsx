import styled from 'styled-components';

const Section = styled.section`
  align-items: center;
  border-radius: 8px;
  bottom: 10%;
  display: flex;
  justify-content: center;
  left: 80%;
  position: fixed;
  color: white;
  font-weight: bold;

  div {
    display: flex;
    border-radius: 8px;
    padding-left: 10px;
    padding-right: 10px;
  }

  p {
    opacity: .3;
    font-size: var(--font-title);
    color: white;
    font-weight: bold;
  }

  button {
    background-color: rgb(8, 34, 0.8);
    color: white;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    font-size: var(--font-title);
  }

  .enable {
    background-color: var(--color-green);
  }

  .disabled {
    background-color: var(--color-grey);
  }

  #total {
    opacity: 1;
  }

`;

export default Section;
