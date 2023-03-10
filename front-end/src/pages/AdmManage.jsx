import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import FormRegisterAdmin from '../components/FormRegisterAdmin';
import AdmTable from '../components/AdmTable';
import Title from './styles/AdmManageStyles';

function AdmManage() {
  const [count, setCount] = useState(false);
  return (
    <Title>
      <NavBar />
      <div className="adm-div">
        <div
          className="adm-div-title"
        >
          Cadastrar novo usuário

        </div>
        <FormRegisterAdmin setCount={ setCount } />
        <AdmTable count={ count } />
      </div>
    </Title>
  );
}

export default AdmManage;
