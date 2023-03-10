import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 16px;

  div {
    background-color: #b1c2be39;
    width: 114vh;
    height: 40px;
    column-gap: 20px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #c246301a;
    border-radius: 8px;
  }

  #id {
    font-size: larger;
  }

  p, #status {
    align-items: center;
    justify-content: center;
    display: flex;
    height: 40px;
    margin: 0px;
    width: 20%;
    border-radius: 10px;
  }

  #status {
    background: rgba(0, 204, 155, 0.75);
  }

  button {
    align-items: center;
    justify-content: center;
    display: flex;
    height: 40px;
    width: 40%;
    color: #F2FFFC;
    background-color: #036B52;
    border-radius: 8px;
    border: none;
    :hover {
      background-color: #1b9478;
    }
  }
`;

export default Section;
