import styled from 'styled-components';

const Main = styled.main`
    color: rgb(27, 26, 23);
    font-family: 'OpenSans';
    font-size: 18px;


  h2 {
    margin-top: 6%;
    text-align: center;
    margin-bottom: 6%;
  }

  table {
    border-collapse: collapse;
    width: 90%;
    align-self: center;
    margin-top: 16px;
  }

  th, td {
    border-bottom: 1px solid rgb(243, 244, 237);
    text-align: center;
    margin-bottom: 2%;
  }

  th {
    background-color: rgb(243, 244, 237);
    padding: 8px;
  }

  tr:nth-child( even ) {
  }

  tr:hover {
    background-color: rgb(243, 244, 237);
  }

  .disabled {
    background-color: var(--color-grey-dark);
    :hover {
      background-color: var(--color-grey-dark);
    }
  }

  td {
    align-items: center;
    font-size: 16px;
    font-style: normal;
    line-height: 42px;
    text-align: center;
  }

  .index-table {
    background-color: rgb(149, 158, 158);
    width: 12%;
    border-radius: 4px;
    color: rgb(243, 244, 237);
  }

  .quantity-table {
    width: 12%;
    border-radius: 4px;
    color: rgb(27, 26, 23);
  }

  .unit-value-table {
    width: 12%;
    border-radius: 14px;
    color: rgb(27, 26, 23);
  }

  .sub-total {
    width: 12%;
    border-radius: 8px;
    color: rgb(27, 26, 23);
  }

  #total-price {
    background-color: rgb(78, 148, 79);
    width: 20%;
    color: rgb(243, 244, 237);
    font-weight: bold;
    border-radius: 8px;
    font-size: 18px;
    padding: 18px 16px;
    align-self: center;
    right: 7%;
    position: relative;
  }

  section {
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
  }
`;

export default Main;
