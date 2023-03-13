import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  align-content: center;
  justify-content: center;
  font-family: 'OpenSans';
  height: 100vh;
  background-color: rgb(255, 99, 99);

  
  .content-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 40%;
    border-radius: 14px;
  }

  .logo-img {
    height: 27%;
    width: 35%;
    margin-bottom: 10%;
    margin-top: -6%;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 55%;
    height: 55%;
    border-style: none;
    border-radius: 14px;
    align-items: center;
    text-align: center;
    color: var(--color-black);
    font-size: 30px;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 8px;
    margin-top: -6%;
  }

  .login {
    color: var(--color-red);
    font-size: 36px;
    font-weight: bold;
    margin-top: 2%;
    margin-bottom: 4%;
  }

  .inputslogin {
    height: 44px;
    margin-top:6%;
    margin-bottom:4%;
    width: 90%;
    border: none;
    border-radius: 20px;
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 4px;
    background-color: rgb(231, 243, 243);
  }

  .login-btn-login {
    height: 44px;
    width: 90%;
    margin-top:4%;
    margin-bottom:2%;
    border: none;
    border-radius: 20px;
    color: white;
    text-align: center;
    font-size: 20px;
    background: var(--color-red);
    font-weight: bold;
  }
  .login-btn-register {
    height: 44px;
    width: 90%;
    margin-bottom:4%;
    color: rgb(243, 244, 237);
    border: none;
    border-radius: 20px;
    text-align: center;
    font-size: 20px;
    background: var(--color-red);
    font-weight: bold;
  }

  .login-btn-register, .login-btn-login {
    :hover {
      background-color: var(--color-red-hover); 
    }
  }

  .section-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-orange);
    height: 100vh;
    width: 50%;
  }

  .login-img {
      width: 90%;
      height: 40%;
      position: relative;
      
    }

`;

export default Main;
