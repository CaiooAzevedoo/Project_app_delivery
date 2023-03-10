import styled from 'styled-components';

export const Table = styled.table`
  /* background-color: aliceblue; */
  /* margin-left: 20vh; */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.452);
  max-height: 100vh;
`;

export const Tr = styled.tr`
  .Field-item{
    font-family: "Roboto";
    font-style: normal;
    font-size: 15px;
    text-align: center;
    background-color: #f5f2f2;
    height: 10px;
  }
  .Field-name{
    font-family: "Roboto";
    font-style: normal;
    font-size: 15px;
    text-align: center;
    background-color: #f5f2f2;
    height: 10px;
  }
  .Field-email{
    font-family: "Roboto";
    font-style: normal;
    font-size: 15px;
    text-align: center;
    background-color: #f5f2f2
  }
  .Field-type{
    font-family: "Roboto";
    font-style: normal;
    font-size: 15px;
    text-align: center;
    background-color: #f5f2f2
  }
  .Field-delete{
    font-family: "Roboto";
    font-style: normal;
    font-size: 15px;
    text-align: center;
    background-color: #f5f2f2
  }
  .User-id{
    font-family: "Roboto";
    font-style: normal;
    font-size: 10px;
    background-color: #2FC18C;
    border-radius: 7px 0% 0 7px;
    
  }
  .User-name{
    font-family: "Roboto";
    font-style: normal;
    font-size: 20px;
    text-align: center;
    background-color: #e0dada;
    
  }

  .User-email{
    font-family: "Roboto";
    font-style: normal;
    font-size: 20px;
    text-align: center;
    background-color: #036B52;
    color: #e0dada;
    
  }
  .User-role{
    font-family: "Roboto";
    font-style: normal;
    font-size: 20px;
    text-align: center;
    background-color: #421981;
    color: #e0dada;
    
  }
  .Adm-btn{
    border-radius: 0px 7px 9px 0px;
    background-color: #421981;
    .Adm-btn-delete{
      font-family: "Roboto";
      font-style: normal;
      font-size: 20px;
      text-align: center;
      background-color: #2f51e6;
      color: #e0dada;
    }
  }
  

`;
