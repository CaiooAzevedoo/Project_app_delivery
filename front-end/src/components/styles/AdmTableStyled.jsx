import styled from 'styled-components';

export const Section = styled.table`
    border-collapse: collapse;
    width: 90%;
    margin: auto;
    height: 20px;
    align-self: center;
    font-family: 'OpenSans';

  table {
    border-collapse: collapse;
    align-self: center;
    background-color: var(--color-white);
    
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

  .Field-item{
    width: 12%;
    color: var(--color-black);
    
  }
  .Field-name{
    width: 12%;
    color: var(--color-black);
  }
  .Field-email{
    width: 12%;
    color: var(--color-black);
  }
  .User-id{
    background-color: rgb(149, 158, 158);
    width: 12%;
    border-radius: 4px;
    color: var(--text-color-white);
  }

  .User-name{
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    padding-inline-start: 10px;
  }

  .User-email{
    font-style: normal;
    font-size: 20px;
    text-align: center;
    padding-inline: 25px;
  }
  .User-role{
    font-style: normal;
    font-size: 20px;
    text-align: center;
  }
  .Adm-btn{
    border-radius: 0px 7px 9px 0px;

  .Adm-btn-delete{
  border: none;
  background-color: var(--color-red);
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  padding: 18px 16px;
  width: 50%;
  color: var(--color-white);
  position: relative;
  overflow: hidden;
  z-index: 1;
  -webkit-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
}
/* .Adm-btn-delete:after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  width: 0;
  height: 100%;
  background: var(--color-red);
  z-index: -1;
  -webkit-transition: width 150ms ease-in-out;
  transition: width 150ms ease-in-out;
}
.Adm-btn-delete:hover {
  color: var(--color-red-hover);
}
.Adm-btn-delete:hover:after {
  width: 110%;
} */

.Adm-btn-delete:hover {
  background-color: var(--color-red-hover);
}
    }

`;

export const Tr = styled.tr`
  
`;
