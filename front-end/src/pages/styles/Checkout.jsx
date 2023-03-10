import styled from 'styled-components';

const Main = styled.main`
  table {
    border-collapse: collapse;
    margin: 16px auto;
    max-width: 800px;
    width: 100%;
  }

  th, td {
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    padding: 8px;
  }

  tr:nth-child( even ) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  .rm-item-checkout-btn {
    background-color: #f44336;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: 14px;
    padding: 18px 16px;
    width: 100%;
  }

  td {
    align-items: center;
    font-family: Arial , Helvetica , sans-serif;
    font-size: 16px;
    font-style: normal;
    line-height: 42px;
    text-align: center;
  }

  .rm-item-checkout-btn:hover {
    background-color: #d32f2f;
  }

  .index-table-checkout {
    background-color: #2fc18c;
    border-radius: 4px;
    color: white;
  }

  .quantity-table-checkout {
    background-color: #036b52;
    border-radius: 4px;
    color: white;
  }

  .unit-value-table-checkout {
    background-color: #421981;
    border-radius: 4px;
    color: white;
  }

  .sub-total-table-checkout {
    background-color: #056cf9;
    border-radius: 4px;
    color: white;
  }

  .total-value-checkout {
    background-color: #036b52;
    border-radius: 4px;
    color: white;
    padding: 10px 0.01px;
  }

  form {
    section {
      background-color: #ddd;
      display: flex;
      column-gap: 5px;
      justify-content: center;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;
        width: 20%;

        select, input {
          width: 80%;
          height: 30px;
          border: none;
          border-radius: 8px;
        }
      }
    }
  }
`;

export default Main;
