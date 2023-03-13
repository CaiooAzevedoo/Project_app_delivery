import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    color: var(--color-white);
    font-family: OpenSans;
    font-size: 18px;
    flex-flow: row wrap;
    place-content: center flex-end;
    -webkit-box-pack: end;
    -webkit-box-align: baseline;
    align-items: baseline;
    justify-content: center;
    flex-direction: column;
    margin-top: 2%;
    margin-bottom: 1%;
    
    h1{
      text-align: left;
      color: var(--color-black);
      margin-bottom: 1%;
      margin-left: 2%;
    }
  .form-container-title{
    max-width: 100%;
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
  }
.user-data-container{
  margin-top: .5%;
  margin-bottom: 10px;
  display: flex;
  width: 75%;
  text-align: left;
  flex-direction: row;
  justify-content: space-around;
  color: var(--color-black);
  
  .user-data-name{
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 15%;
    .user-data-name-input{
      border: 1px solid rgba(30, 29, 26, 0.357);
      border-radius: 8px;
      width: 100%;
      height: 26px;
      margin-bottom: 4px;
    }
  }
  .user-data-email{
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 15%;
    .user-data-email-input{
      border: 1px solid rgba(30, 29, 26, 0.357);
      border-radius: 8px;
      width: 100%;
      height: 26px;
      margin-bottom: 4px;
    }
  }
  .user-data-password{
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 15%;
    .user-data-password-input{
      border: 1px solid rgba(30, 29, 26, 0.357);
      border-radius: 8px;
      width: 100%;
      height: 26px;
      margin-bottom: 4px;
    }
  }

  .user-data-role{
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 15%;
    .user-data-role-select{
      border: 1px solid rgba(30, 29, 26, 0.357);
      border-radius: 8px;
      width: 100%;
      height: 26px;
      margin-bottom: 4px;
    }
  }
  .adm-btn-cadastrar{
  border: none;
  background-color: var(--color-green-register);
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  padding: 18px 16px;
  color:  var(--color-green-register-hover);
  width: 120px;

  position: relative;
  overflow: hidden;
  z-index: 1;
  -webkit-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
}
.adm-btn-cadastrar:after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  width: 0;
  height: 100%;
  background:  var(--color-green-register-hover);
  z-index: -1;
  -webkit-transition: width 150ms ease-in-out;
  transition: width 150ms ease-in-out;
}
.adm-btn-cadastrar:hover {
  color: var(--color-green-register);
}
.adm-btn-cadastrar:hover:after {
  width: 110%;
}
  }

`;

export default Form;
