import styled from 'styled-components';

const NavBarStyles = styled.main`
  background-color: #036B52;
  display: flex;
  justify-content: space-between;
  margin: 0.01px;
  font-size: 25px;
  max-width: 100%;

  section {
    display: flex;
    width: 60%;
  }

  .secund-section {
    justify-content: end;
  }

  .selected {
    background-color: #2FC18C;
  }

  .link-Produtos {
    align-items: center;
    background-color: #2FC18C;
    box-sizing: border-box;
    padding: 20px;
    max-width: 35%;
    font-family: 'Roboto';
    font-style: normal;
    /* font-weight: 700; */
    /* font-size: 25px; */
    line-height: 33px;
    text-align: start;
    /* width: 300px; */
    a {
      color: #F2FFFC;
      text-decoration: none;
    }
  }

  .maus-pedidos-nav-bar {
    box-sizing: border-box;
    padding: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 33px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #036B52;
    max-width: 35%;
    a {
      color: #F2FFFC;
      text-decoration: none;
    }
  }

  .user-name {
    font-family: 'Roboto';
    font-style: normal;
    line-height: 33px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #421981;
    color: #F2FFFC;
    max-width: 50%;
  }

  .button-exit {
    border: none;
    background-color: #056CF9;
    width: 20%;
    font-size: 25px;
    :hover {
      background-color: #0563e7c5;
    }
  }
`;

export default NavBarStyles;
