import React from 'react';
import NavBar from '../components/NavBar';
import FormRegisterAdmin from '../components/FormRegisterAdmin';
import AdmTable from '../components/AdmTable';

function AdmManage() {
  return (
    <div>
      <NavBar />
      <FormRegisterAdmin />
      <AdmTable />
    </div>
  );
}

export default AdmManage;
