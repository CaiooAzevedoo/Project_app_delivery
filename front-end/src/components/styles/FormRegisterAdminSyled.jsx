import styled from 'styled-components';

const Form = styled.form`
margin-top: auto;
display: flex;
flex-direction: column;
margin-left: 20vh;
max-width: 100vh;
padding-inline: 20px;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.452);
background-color: #f5f2f2;
.user-data-container{
  margin-top: 0px;
    display: flex;
    width: 100vh;
    height: 60px;
    text-align: center;
    /* -webkit-box-align: stretch;
    -webkit-box-pack: justify; */
    flex-flow: row nowrap;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

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
   margin-top: 15px;
  }

}

`;

export default Form;
