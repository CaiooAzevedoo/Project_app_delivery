import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  align-content: flex-star;
  font-family: 'OpenSans';
  height: 100vh;
  
  .content-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 50%;
    display: flex;
  }

  .logo-img {
    height: 27%;
    width: 30%;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    background-color: rgb(243, 244, 237);
    width: 60%;
    height: 50%;
    border-style: none;
    border-radius: 14px;
    align-items: center;
    text-align: center;
    color: rgb(27, 26, 23);
    font-size: 30px;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-top: 5%;
    padding: 14px;
  }

  .login {
    color:rgb(255, 130, 5);
    font-size: 32px;
    font-weight: bold;
    margin-top: 2%;
    margin-bottom: 4%;
  }

  .inputslogin {
    height: 44px;
    margin-top:2%;
    margin-bottom:2%;
    width: 90%;
    border: none;
    border-radius: 20px;
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 4px;
  }

  .login-btn-login {
    height: 44px;
    width: 90%;
    margin-top:2%;
    margin-bottom:2%;
    border: none;
    border-radius: 20px;
    color: rgb(243, 244, 237);
    text-align: center;
    font-size: 20px;
    background: rgb(255, 130, 5);
  }
  .login-btn-register {
    height: 44px;
    width: 90%;
    margin-top:2%;
    margin-bottom:8%;
    color: rgb(243, 244, 237);
    border: none;
    border-radius: 20px;
    text-align: center;
    font-size: 20px;
    background: rgb(255, 130, 5);
  }

  .login-btn-register, .login-btn-login {
    :hover {
      background-color: rgba(225, 133, 40, 0.835); 
    }
  }

  .section-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 130, 5);
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
