import styled from 'styled-components';

const NavBarStyles = styled.main`
  font-family: var(--font-family);
  background-color: var(--color-black);
  /* background-image: linear-gradient(
    -45deg, var(--color-black),
    rgba(255, 129, 3, 0),
    rgba(255, 129, 3, 0.253)); */
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
    padding: 20px;
    max-width: 35%;
    font-style: normal;
    text-align: start;
    a {
      color: #F2FFFC;
      text-decoration: none;
    }
    :hover {
      background-color: var(--color-orange);
      color: var(--color-black);
    }
  }

  .maus-pedidos-nav-bar {
    box-sizing: border-box;
    font-size: large;
    padding: 20px 0px 20px 60px;
    line-height: 33px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    min-width: 44%;
    a {
      color: #F2FFFC;
      text-decoration: none;
    }
    :hover {
      background-color: var(--color-orange);
      color: var(--color-black);
    }
  }

  .user-name {
    padding-right: 60px;
    line-height: 33px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    color: #F2FFFC;
    height: 80%;
    max-width: 50%;
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
