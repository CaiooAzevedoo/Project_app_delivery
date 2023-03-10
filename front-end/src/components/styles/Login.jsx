import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
   0% {
    transform: rotate(-25deg);
  }

  25% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(25deg);
  }

  75% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(-25deg);
  }
`;
export const Title = styled.div`
    display: flex;
    padding: 2rem 1rem;
    font-size: 50px;
    text-align: center;
    flex-flow: column nowrap;
    flex-direction: column;
    align-items: center;
    
`;
export const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
  /* background-color: rgba(11, 43, 90, 0.91); */
  max-width: 100px;
  max-height: 100px;
`;

export const Main = styled.main`
  background-color: rgba(11, 43, 90, 0.911);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`

    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    

  .content-login {
    border: 1px solid rgba(7, 14, 8, 0.13);
    border-radius: 8px;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.452);
    display: flex;
    flex-direction: column;
    padding: 25px;
    text-align: left;
    justify-content: space-between;
    background: #EAF1EF;
    /* background-image: linear-gradient(45deg, black, red, blue);  */
      .user-date-login {
      border: 1px solid rgba(0, 0, 0, 0.5);
      text-align: center;
      font-size: 15px;
      border-radius: 5px;
      height: 33px;
      margin-bottom: 20px;
      width: 250px;
    }
      .login-btns {
      display: flex;
      justify-content: space-between;
      text-align: center;
      flex-direction: column;
        .login-btn-entrar {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 33px;
          text-align: center;
          color: #F2FFFC;
          background: #036B52;
          border-radius: 5px;
          margin-bottom: 20px;
        }
        .login-btn-register {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 33px;
          text-align: center;
          color: #036B52;
          background: #EAF1EF;
          /* background-image: radial-gradient( blue, red, green); */
          /* background-image: radial-gradient() */
          border: 2px solid #036b537d;
          border-radius: 5px;
          margin-bottom: 20px;
        }
    } 
  }

  

  

  .user-not-found {
    color: red;
    margin: auto;
  }
`;

export default Form;
