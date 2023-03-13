import styled from 'styled-components';

const Form = styled.form`
     display: flex;
    place-content: center;
    -webkit-box-pack: center;
    font-family: 'OpenSans';
    height: 100vh;
    background-color: rgb(255, 99, 99);
    flex-flow: column nowrap;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    
  .logo-img {
    height: 27%;
    width: 35%;
    margin-bottom: 10%;
    margin-top: -6%;
  }
  
  .user-data-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 40%;
    border-radius: 14px;
  label{
    display: flex;
    align-items: center;
    height: 10%;
    margin-top:6%;
    margin-bottom:4%;
    width: 90%;
    border: none;
    border-radius: 20px;
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
    padding: 10px;
    /* margin-top: -50%; */
    margin-bottom: 50%;
  }
  .login-btn-register {
    min-height: 44px;
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
  .user-date-register {
    height: 44px;
    width: 100%;
    border: none;
    border-radius: 20px;
    text-align: center;
    font-size: 18px;
    background-color: rgb(231, 243, 243);
  }
  .title {
    color: var(--color-red);
    font-size: 36px;
    font-weight: bold;
    margin-top: 2%;
    margin-bottom: 8%;
  }
  }
`;

export default Form;
