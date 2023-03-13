import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 16px;

  div {
    background-color: #b1c2be39;
    width: 90%;
    height: 44px;
    column-gap: 20px;
    display: flex;
    align-content: center;
    justify-content: center;
    border: 1px solid #00000029;
    border-radius: 8px;
    padding-right: 3px;
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

  #Entregue {
    background: var(--color-green);
    margin-top: 2px;
  }

  #Pendente {
    background-color: var(--color-red);
    margin-top: 2px;
  }

  #em-transito {
    background-color: var(--color-yellow);
    margin-top: 2px;
  }

  button {
    /* display: flex;
    align-items: center;
    justify-content: center; */
    height: 40px;
    width: 25%;
    font-size: 16px;
    color: var(--color-black);
    background-color: var(--color-green-dark);
    border-radius: 8px;
    margin-top: 2px;
    border: none;
    :hover {
      background-color: #1b9478;
    }
  }

  #disabled {
    background-color: var(--color-grey);
  }

  #enable {
    background-color: var(--color-green-dark)
  }
`;

export default Li;
