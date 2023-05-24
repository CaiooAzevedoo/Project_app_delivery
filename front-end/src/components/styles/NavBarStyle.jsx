import styled from 'styled-components';

const NavBarStyles = styled.main`
  font-family: var(--font-family);
  background-color: var(--color-black);
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  font-size: var(--font-title);
  font-weight: bold;
  max-width: 100%;
  box-shadow: 0px 1px 7px;

  .link-Produtos {
    align-items: center;
    font-size: large;
    background-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    padding: 20px 20px 20px 20px;
    width: 20%;
    font-style: normal;
    text-align: center;
    color: #F2FFFC;
    border-radius: 20px;
    a {
      color: #F2FFFC;
      text-decoration: none;
    }
    :hover {
      background-color: var(--color-red);
      color: var(--color-black);
    }
  }

  .maus-pedidos-nav-bar {
    box-sizing: border-box;
    font-size: large;
    padding: 20px 20px 20px 20px;
    line-height: 33px;
    width: 20%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 20px;
    a {
      color: #F2FFFC;
      text-decoration: none;
    }
    :hover {
      background-color: var(--color-red);
      color: var(--color-black);
    }
  }

  .user-name {
    line-height: 33px;
    display: flex;
    background-color: rgba(0, 0, 0, 0);
    color: #F2FFFC;
    height: 80%;
    max-width: 100%;
  }

  .button-exit {
    font-size: var(--font-title);
    background-color: var(--color-red);
    /* background-image: linear-gradient(
      45deg, var(--color-black), rgba(255, 129, 3, 0.685)); */
    margin-right: 7px;
    min-height: 55px;
    color: white;
    font-weight: bold;
    width: 8%;
    border-radius: 20px;
    border: none;
    box-sizing: border-box;   
    text-align: center;
    display: block;
    :hover {
      background-color: var(--color-red-hover);
    }
  }
`;

export default NavBarStyles;
