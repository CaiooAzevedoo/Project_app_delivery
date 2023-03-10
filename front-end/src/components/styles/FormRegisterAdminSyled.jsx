import styled from 'styled-components';

const Form = styled.form`
margin-top: auto;
display: flex;
flex-direction: column;
/* margin-left: 20vh; */
justify-content: space-between;
max-width: 100%;
padding-inline: 20px;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.452);
background-color: #f5f2f2;
align-items: center;
.user-data-container{
  margin-top: 0px;
    display: flex;
    width: 100%;
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
    text-align: left;
    .user-data-name-input{
      border-radius: 10px;
      max-width: 80%;
    }
  }
  .user-data-email{
    display: flex;
    flex-direction: column;
    text-align: left;
    .user-data-email-input{
      border-radius: 10px;
      max-width: 80%;
    }
  }
  .user-data-password{
    display: flex;
    flex-direction: column;
    text-align: left;
    .user-data-password-input{
      border-radius: 10px;
      max-width: 80%;
    }
  }

  .user-data-role{
    display: flex;
    flex-direction: column;
    text-align: left;
    .user-data-role-select{
      border-radius: 10px;
      max-width: 80%;
    }
  }
  .adm-btn-cadastrar{
   margin-top: 15px;
  border-color:  #036B52;;
  border-radius: 0;
  color:  #036B52;;
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
  background:  #036B52;;
  z-index: -1;
  -webkit-transition: width 150ms ease-in-out;
  transition: width 150ms ease-in-out;
}
.adm-btn-cadastrar:hover {
  color: #fff;
}
.adm-btn-cadastrar:hover:after {
  width: 110%;
}
  }

`;

export default Form;
