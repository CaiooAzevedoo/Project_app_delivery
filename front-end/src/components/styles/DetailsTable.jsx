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
    height: 40px;
    column-gap: 20px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #00000029;
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

  #Entregue {
    background: var(--color-green);
  }

  #Pendente {
    background-color: var(--color-yellow);
  }

  #em-transito {
    background-color: var(--color-red);
  }

  button {
    align-items: center;
    justify-content: center;
    display: flex;
    height: 40px;
    width: 40%;
    color: #F2FFFC;
    background-color: var(--color-green-dark);
    border-radius: 8px;
    border: none;
    :hover {
      background-color: #1b9478;
    }
  }

  #disabled {
    background-color: var(--color-grew);
  }

  #enable {
    background-color: var(--color-green-dark)
  }
`;

export default Li;
