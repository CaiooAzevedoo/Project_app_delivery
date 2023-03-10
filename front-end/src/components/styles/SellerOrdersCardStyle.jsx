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

    #id {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      background-color: white;
      width: 9vh;
      height: 9vh;
      border-radius: 8px;
    }

    .status {
      height: 9vh;
      width: 18vh;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      font-size: 20px;
    }

    #Pendente {
      background-color: #CCB800BF;
    }

    #Preparando {
      background-color: #66CC00;
    }

    #Entregue {
      background-color: #26f0ad;
    }

    #Em-Transito {
      background-color: #00ccbb;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 5px;

      #date, #price {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        height: 20px;
        margin: 0;
        border-radius: 8px;
        min-width: 10vh;
        min-height: 4vh;
      }
    }
  }
`;

export default Section;
