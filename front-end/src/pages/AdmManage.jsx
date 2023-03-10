import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import FormRegisterAdmin from '../components/FormRegisterAdmin';
import AdmTable from '../components/AdmTable';

function AdmManage() {
  const [count, setCount] = useState(false);
  return (
    <div>
      <NavBar />
      <FormRegisterAdmin setCount={ setCount } />
      <AdmTable count={ count } />
    </div>
  );
}

export default AdmManage;
