import styled from 'styled-components';

const Section = styled.section`
  align-items: center;
  border-radius: 8px;
  bottom: 10%;
  display: flex;
  justify-content: center;
  left: 85%;
  position: fixed;

  div {
    display: flex;
    border-radius: 8px;
  }

  p {
    opacity: .3;
  }

  button {
    background-color: rgb(8, 34, 0.8);
    border-radius: 8px;
    border: none;
  }

  .enable {
    background-color: rgb(63, 211, 66);
  }

  .disabled {
    background-color: var(--color-grew);
  }

  #total {
    opacity: 1;
  }

`;

export default Section;
