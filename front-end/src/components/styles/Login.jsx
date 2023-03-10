import styled from 'styled-components';

export const Main = styled.main`

  font-family: 'OpenSans';
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  height: 100vh;
  background-color: rgb(255, 131, 3);
  flex-wrap: wrap;

  img {
  width: 800px;
  height: 40%;
  margin-top: 220px;
  position: relative;
}

fieldset {
  display: flex;
  flex-direction: column;
  background-color: rgb(243, 244, 237);
  margin-right: 120px;
  width: 90%;
  height: 380px;
  border-style: none;
  border-radius: 14px;
  align-items: center;
  text-align: center;
  color: rgb(27, 26, 23);
  font-size: 30px;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-left: 20px;
  margin-top: 200px;
  padding: 12px;
}

.login {
  color: rgb(78, 148, 79);
  font-size: 32px;

}

.inputslogin {
  height: 44px;
  margin-top:2px;
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
  margin-top: 10px;
  margin-bottom: 4px;
  border: none;
  border-radius: 20px;
  color: rgb(243, 244, 237);
  text-align: center;
  font-size: 20px;
  background: rgb(78, 148, 79);
}
.login-btn-register {
  height: 44px;
  width: 90%;
  margin-top: 10px;
  margin-bottom: 4px;
  color: rgb(243, 244, 237);
  border: none;
  border-radius: 20px;
  text-align: center;
  font-size: 20px;
  background: rgb(78, 148, 79);
}

.login-btn-register, .login-btn-login {
  :hover {
    background-color: rgb(56, 96, 57); 
  }
  
}
`;

export default Main;
