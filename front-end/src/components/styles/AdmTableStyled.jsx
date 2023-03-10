import styled from 'styled-components';

export const Table = styled.table`
  display: table;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.452);
  max-width: 100%;
`;

export const Tr = styled.tr`
  .Field-item{
    font-family: "Roboto";
    font-style: normal;
    font-size: 15px;
    text-align: center;
    justify-content: center;
    background-color: #f5f2f2;
    height: 10px;
    padding: 10px 50px;
    border-collapse: collapse;
  }
  .Field-name{
    font-family: "Roboto";
    font-style: normal;
    font-size: 15px;
    text-align: center;
    background-color: #f5f2f2;
    height: 10px;
    padding: 3px 20px;
    border-collapse: collapse;
  }
  .Field-email{
    font-family: "Roboto";
    font-style: normal;
    font-size: 15px;
    text-align: center;
    background-color: #f5f2f2;
    padding: 3px 20px;
    border-collapse: collapse;
  }
  .Field-type{
    font-family: "Roboto";
    font-style: normal;
    font-size: 15px;
    text-align: center;
    background-color: #f5f2f2;
    padding: 3px 20px;
    border-collapse: collapse;
  }
  .Field-delete{
    font-family: "Roboto";
    font-style: normal;
    font-size: 15px;
    text-align: center;
    background-color: #f5f2f2;
    padding: 3px 20px;
    border-collapse: collapse;
  }
  .User-id{
    font-family: "Roboto";
    font-style: normal;
    font-size: 15px;
    background-color: #2FC18C;
    border-radius: 7px 0% 0 7px;
    padding: 3px 20px;
    border-collapse: collapse;
    text-align: center;
  }
  .User-name{
    font-family: "Roboto";
    font-style: normal;
    font-size: 20px;
    text-align: center;
    background-color: #e0dada;
    padding: 3px 20px;
    border-collapse: collapse;
  }

  .User-email{
    font-family: "Roboto";
    font-style: normal;
    font-size: 20px;
    text-align: center;
    background-color: #036B52;
    color: #e0dada;
    padding: 3px 20px;
    border-collapse: collapse;
  }
  .User-role{
    font-family: "Roboto";
    font-style: normal;
    font-size: 20px;
    text-align: center;
    background-color: #421981;
    color: #e0dada;
    padding: 3px 20px;
    border-collapse: collapse;
    
  }
  .Adm-btn{
    border-radius: 0px 7px 9px 0px;
    background-color: #421981;
    padding: 3px 20px;
    border-collapse: collapse;

      .Adm-btn-delete{
   margin-top: 15px;
  border-color:  #036B52;
  border-radius: 0;
  color:  #036B52;
  position: relative;
  overflow: hidden;
  z-index: 1;
  -webkit-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
}
.Adm-btn-delete:after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  width: 0;
  height: 100%;
  background:  #f1251d;
  z-index: -1;
  -webkit-transition: width 150ms ease-in-out;
  transition: width 150ms ease-in-out;
}
.Adm-btn-delete:hover {
  color: #fff;
}
.Adm-btn-delete:hover:after {
  width: 110%;
}
    }

  

`;
