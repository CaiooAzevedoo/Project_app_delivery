import styled from 'styled-components';

const NavBarStyles = styled.main`
  background-color: #036B52;
  display: flex;
  justify-content: space-between;

  section {
    display: flex;
    width: 50%;
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
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: start;
    width: 300px;
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
    font-size: 28px;
    line-height: 33px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #036B52;
    /* width: 35%; */
    a {
      color: #F2FFFC;
      text-decoration: none;
    }
  }

  .user-name {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #421981;
    color: #F2FFFC;
  }

  .button-exit {
    border: none;
    background-color: #056CF9;
    width: 20%;
    :hover {
      background-color: #0563e7c5;
    }
  }
`;

export default NavBarStyles;
