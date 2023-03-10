import styled from 'styled-components';

const Section = styled.section`
  margin-top: 16px;
  display: flex;
  justify-content: center;

  button {
    border: none;
    background-color: #00000016;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    width: 40vh;
    border-radius: 8px;

    .status {
      height: 9vh;
      width: 18vh;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
    }

    #Pendente {
      background-color: #CCB800BF;
    }

    #Preparando {
      background-color: #66CC00;
    }

    #Entregue {
      background-color: #00CC9B;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 20px;
    }
  }
`;

export default Section;
