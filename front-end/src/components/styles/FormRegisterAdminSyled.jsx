import styled from 'styled-components';

const Form = styled.form`
margin-top: auto;
display: flex;
flex-direction: column;
align-items: center;
.adm-title{
  display: flex;
  text-align: left;
  justify-content: left;
}
.user-data-container{
    margin-top: 0px;
    display: flex;
    width: 100vh;
    text-align: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;

  .user-data-name{
    display: flex;
    flex-direction: column;
  }
  .user-data-email{
    display: flex;
    flex-direction: column;
  }
  .user-data-password{
    display: flex;
    flex-direction: column;
  }
  .user-data-role{
    display: flex;
    flex-direction: column;
  }
  .user-data-name-input{
  border-radius: 10px;
  }
  .user-data-email-input{
  border-radius: 10px;
  }
  .user-data-password-input{
  border-radius: 10px;
  }
  .user-data-role-select{
  border-radius: 10px;
  }
  .adm-btn-cadastrar{
   margin-top: auto;
    text-align: center;
  }

}

`;

export default Form;
