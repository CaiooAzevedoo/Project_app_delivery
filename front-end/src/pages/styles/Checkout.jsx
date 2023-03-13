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
    width: 75%;
    align-self: center;
    margin-left: 185px;
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

  .rm-item-checkout-btn {
    background-color: rgb(255, 99, 99);
    border: none;
    border-radius: 8px;
    color: rgb(243, 244, 237);
    font-weight: bold;
    cursor: pointer;
    font-size: 18px;
    padding: 18px 16px;
    width: 70%;
  }

  td {
    align-items: center;
    font-size: 16px;
    font-style: normal;
    line-height: 42px;
    text-align: center;
  }

  .rm-item-checkout-btn:hover {
    background-color: #d32f2f;
  }

  .index-table-checkout {
    background-color: rgb(149, 158, 158);
    width: 12%;
    border-radius: 4px;
    color: rgb(243, 244, 237);
  }

  .quantity-table-checkout {
    width: 12%;
    border-radius: 4px;
    color: rgb(27, 26, 23);
  }

  .unit-value-table-checkout {
    width: 12%;
    border-radius: 14px;
    color: rgb(27, 26, 23);
  }

  .sub-total-table-checkout {
    width: 12%;
    border-radius: 8px;
    color: rgb(27, 26, 23);
  }

  .total-value-checkout {
    background-color: rgb(78, 148, 79);
    width: 140%;
    color: rgb(243, 244, 237);
    font-weight: bold;
    border-radius: 8px;
    font-size: 18px;
    padding: 18px 16px;
    align-self: center;
    top: 1%;
    left: 640%;
    position: relative;
  }

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    font-size: 18px;
    margin: 3% auto 1% auto;

    select {
      height: 26px;
      width: 100%;
      border-radius: 8px;
      border: 1px solid rgba(30, 29, 26, 0.357);
      margin-bottom: 4%;
    }

    .inputs {
      display: flex;
      flex-direction: column;
      width: 19.5%;
      column-gap: 505px;

      .adress-input {
        height: 26px;
        width: 100%;
        border-radius: 8px;
        border: 1px solid rgba(30, 29, 26, 0.357);
        margin-bottom: 4%;
      }

      .number-input {
        height: 26px;
        width: 100%;
        border-radius: 8px;
        border: 1px solid rgba(30, 29, 26, 0.357);
        margin-bottom: 4%;
      }
    }

    #finalize-order {
      height: 40px;
      width: 270px;
      border: none;
      background-color: var(--color-green-dark);
      border-radius: var(--border-radius);
      :hover {
        background-color: var(--color-green);
      }
    }

    p {
      margin-bottom: 8px;
      text-align: center;
    }
    
    .main {
      display: flex;
      flex-direction: row;
      justify-content: center;
      column-gap: 20px;
      align-items: center;
      width: 100%;
      margin-bottom: 16px;
    }
  }
`;

export default Main;
