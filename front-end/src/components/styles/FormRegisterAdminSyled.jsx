import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    box-shadow: rgb(0 0 0 / 45%) 2px 2px 4px;
    background-color: rgb(243, 244, 237);
    width: 100%;
    font-family: "OpenSans";
    font-size: 18px;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  .form-container-title{
    max-width: 100%;
    font-size: 30px;
    font-weight: bold;
  }
.user-data-container{
  margin-top: .5%;
  margin-bottom: 10px;
  display: flex;
  width: 75%;
  text-align: left;
  flex-direction: row;
  justify-content: space-around;
  
  .user-data-name{
    display: flex;
    flex-direction: column;
    text-align: left;
    .user-data-name-input{
      border-radius: 5px;
      max-width: 80%;
    }
  }
  .user-data-email{
    display: flex;
    flex-direction: column;
    text-align: left;
    .user-data-email-input{
      border-radius: 5px;
      max-width: 80%;
    }
  }
  .user-data-password{
    display: flex;
    flex-direction: column;
    text-align: left;
    .user-data-password-input{
      border-radius: 5px;
      max-width: 80%;
    }
  }

  .user-data-role{
    display: flex;
    flex-direction: column;
    text-align: left;
    .user-data-role-select{
      border-radius: 5px;
      max-width: 80%;
    }
  }
  .adm-btn-cadastrar{
  border: none;
  background-color: #036B52;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  padding: 18px 16px;
  color:  rgb(143, 255, 99);
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
  background:  rgb(143, 255, 99);
  z-index: -1;
  -webkit-transition: width 150ms ease-in-out;
  transition: width 150ms ease-in-out;
}
.adm-btn-cadastrar:hover {
  color: #036B52;
}
.adm-btn-cadastrar:hover:after {
  width: 110%;
}
  }

`;

export default Form;
