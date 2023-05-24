import styled from 'styled-components';

const Table = styled.table`
  width: 90%;
  margin: auto;
  height: 20px;

  table {
    border-collapse: collapse;
    width: 90%;
    align-self: center;
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

  td {
    align-items: center;
    font-size: 16px;
    font-style: normal;
    line-height: 42px;
    text-align: center;
  }

  .index-table-checkout {
    background-color: rgb(149, 158, 158);
    width: 12%;
    border-radius: 4px;
    color: var(--text-color-white);
  }

  .quantity-table-checkout {
    width: 12%;
    /* border-radius: 4px; */
    color: var(--text-color-black);
  }

  .unit-value-table-checkout {
    width: 12%;
    /* border-radius: 14px; */
    color: var(--text-color-black);
  }

  .sub-total-table-checkout {
    width: 12%;
    /* border-radius: 8px; */
    color: var(--text-color-black);
  }

  .total-value-details {
    background-color: var(--color-green);
    width: 140%;
    color: var(--text-color-white);
    font-weight: bold;
    border-radius: 8px;
    font-size: 18px;
    padding: 18px 16px;
    align-self: center;
    top: 1%;
    left: 100%;
    position: sticky;
  }

  form {
    display: flex;
    margin-top: 6%;
    text-align: center;
    margin-bottom: 20%;
    flex-wrap: wrap;
    width: 75%;
    column-gap: 5px;
    justify-content: space-evenly;
    align-items: center;
    color: var(--text-color-black);
    font-size: 18px;
    border: 1px solid red;

    select {
      height: 26px;
      width: 100%;
      border-radius: 8px;
      border: 1px solid rgba(30, 29, 26, 0.357);
      margin-bottom: 4px;
    }

    div {
      display: flex;
      flex-direction: column;
      width: 20%;
      column-gap: 505px;

      .adress-input {
      height: 26px;
      width: 100%;
      border-radius: 8px;
      border: 1px solid rgba(30, 29, 26, 0.357);
      margin-bottom: 4px;
      }

    .number-input {
      height: 26px;
      width: 100%;
      border-radius: 8px;
      border: 1px solid rgba(30, 29, 26, 0.357);
      margin-bottom: 4px;

    }
    }

    p {
      margin-bottom: 8px;
      text-align: center;
    }
  }
`;

export default Table;
