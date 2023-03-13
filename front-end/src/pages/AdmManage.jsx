import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import FormRegisterAdmin from '../components/FormRegisterAdmin';
import AdmTable from '../components/AdmTable';
import Background from './styles/AdmManageStyles';

function AdmManage() {
  const [count, setCount] = useState(false);
  return (
    <Background>
      <NavBar />

      <FormRegisterAdmin setCount={ setCount } />
      <AdmTable count={ count } />

    </Background>
  );
}

export default AdmManage;
